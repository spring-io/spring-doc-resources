const { src, dest, series, parallel, watch } = require('gulp'),
    gulpSass = require('gulp-sass'),
    asciidoctor = require('@asciidoctor/gulp-asciidoctor'),
    gulpConnect = require('gulp-connect');

const paths = {
    sass: 'src/main/sass/**/*.scss',
    resources: 'src/main/resources/**',
    dist: 'build/dist/',
    web: 'build/web/'
};

/*
 * Building the theme
 */

// Compile SASS files to build/dist/css/
function sass() {
    return src(paths.sass)
        .pipe(gulpSass({outputStyle: 'compressed'}))
        .pipe(dest(paths.dist + "css"));
}

// Copy static reosurces to build/dist/
function copyResource() {
    return src(paths.resources)
        .pipe(dest(paths.dist));
}


/*
 * Developer tools
 */

// Copy built theme to static web folder
function copyDist() {
    return src(paths.dist + '**')
        .pipe(dest(paths.web));
}

// Render test Asciidoctor document
function render() {
    return src('src/test/resources/index.adoc')
        .pipe(asciidoctor({
            safe: 'unsafe',
            doctype: 'book',
            attributes: [
                'icons=font',
                'idprefix',
                'idseparator=-',
                'docinfo',
                'sectanchors',
                'sectnums',
                'source-highlighter=highlight.js',
                'highlightjsdir=js/highlight',
                'highlightjs-theme=github',
                'stylesdir=css',
                'stylesheet=spring.css',
                'docinfo=shared',
                'linkcss',
                'docinfodir='.concat(process.cwd(), "/", paths.dist)
            ]
        }))
        .pipe(dest(paths.web))
        .pipe(gulpConnect.reload());
}

// Watch files modified in src/** and rebuild theme + sample document
function watchFiles(cb) {
    watch('src/**', update);
    cb();
}

// Serve sample document and reload for changes
function connect(cb) {
    gulpConnect.server({
        root: paths.web,
        livereload: true
    });
    cb();
}

const build = series(sass, copyResource);
const update = series(build, copyDist, render);
exports.default = build;
exports.dev = series(update, parallel(connect, watchFiles));