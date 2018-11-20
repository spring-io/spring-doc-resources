# Spring Doc Resources

This project holds the static resources that Spring uses for document production. That includes the following:

* `/src/main/resources/stylesheets/spring.css`: The stylesheet for the HTML versions of the Spring reference guides.
* `/src/main/resources/javascript/tocbot`: The javascript library that creates the dynamic table of contents for the HTML versions of the Spring reference guides.
* `/src/main/resources/html/docinfo.html` and `html/docinfo-footer.html`: The static HTML files that tocbot needs.
* `build.gradle`: The Gradle build file for this project. All it does is make a zip file that contains the resources.
* `README.md`: This file.

## Where to Put the Files

Each of the files has to go in a particular place, all relative to where your Asciidoc files are when Asciidoctor generates its output.

CAUTION: You cannot let Asciidoctor generate its output and then move the files. The files have to be in position when Asciidoctor runs.

The files go in the following locations:

* `docinfo.html` and `docinfo-footer.html`: Put these two files at the top of your Asciidoc hierarchy (typically `src/main/asciidoc` and typically in the same directory as `index.adoc`).
* `stylesheets/spring.css`: Put this file in a directory called `stylesheets` as a child of the top directory in your Asciidoc hierarchy (so usually `src/main/asciidoc/stylesheets/spring.css`).
* `tocbot-3.0.2`: Put this directory and the files in it in a directory called `tocbot-3.0.2` as a child of the top directory in your Asciidoc hierarchy (so usually `src/main/asciidoc/tocbot-3.0.2`).

## Rendering Details

To get the dynamic table of contents to work correctly, you need to set the `docinfo` attribute to `shared`, thus: `:docinfo: shared`. Bear in mind that, if you set the attribute in your `pom.xml`, it overrides the value in your Asciidoc files. You may still want to set the attribute in your Asciidoc files, though, if you generate files with the `asciidoctor` command for testing.
