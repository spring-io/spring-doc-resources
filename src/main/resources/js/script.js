var toctitle = document.getElementById('toctitle');
var path = window.location.pathname;
if (toctitle != null) {
    var oldtoc = toctitle.nextElementSibling;
    var newtoc = document.createElement('div');
    newtoc.setAttribute('id', 'tocbot');
    newtoc.setAttribute('class', 'js-toc desktop-toc');
    oldtoc.setAttribute('class', 'mobile-toc');
    oldtoc.parentNode.appendChild(newtoc);
    tocbot.init({
        contentSelector: '#content',
        headingSelector: 'h1, h2, h3, h4, h5',
        positionFixedSelector: 'body',
        fixedSidebarOffset: 90,
        smoothScroll: false
    });
    if (!path.endsWith('index.html') && !path.endsWith('/')) {
        var link = document.createElement('a');
        if (document.getElementById('index-link')) {
            indexLinkElement = document.querySelector('#index-link > p > a');
            linkHref = indexLinkElement.getAttribute('href');
            link.setAttribute('href', linkHref);
        } else {
            link.setAttribute('href', 'index.html');
        }
        link.innerHTML = '<span><i class="fa fa-chevron-left" aria-hidden="true"></i></span> Back to index';
        var block = document.createElement('div');
        block.setAttribute('class', 'back-action');
        block.appendChild(link);
        var toc = document.getElementById('toc');
        var next = document.getElementById('toctitle').nextElementSibling;
        toc.insertBefore(block, next);
    }
}

var feedbackHtml = '<div id="feedback-area">' +
    '<h1>Send feedback</h1>' +
    getStarsComponent('stars') +
    '</div>';

var feedback = document.createElement('div');
feedback.innerHTML = feedbackHtml;

var toc = document.getElementById('toc');
var next = document.getElementById('toctitle').nextElementSibling;
toc.insertBefore(feedback, next);

var headerHtml = '<div id="header-spring">\n' +
    '<h1>\n' +
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0"\n' +
    'viewBox="0 0 245.8 45.3" style="enable-background:new 0 0 245.8 45.3;" xml:space="preserve">\n' +
    '<g id="logos">\n' +
    '<g>\n' +
    '<path class="st0" d="M39.4,3.7c-0.6,1.5-1.4,2.8-2.3,4c-3.9-4-9.3-6.4-15.2-6.4c-11.7,0-21.3,9.5-21.3,21.3\n' +
    'c0,6.2,2.6,11.7,6.8,15.6l0.8,0.7c3.7,3.1,8.5,5,13.7,5c11.2,0,20.4-8.7,21.2-19.8C43.7,18.7,42.1,11.8,39.4,3.7z M10.5,38.3\n' +
    'c-0.6,0.8-1.8,0.9-2.6,0.3C7.1,37.9,7,36.8,7.6,36c0.6-0.8,1.8-0.9,2.6-0.3C11,36.4,11.1,37.5,10.5,38.3z M39.3,31.9\n' +
    'c-5.2,7-16.5,4.6-23.6,5c0,0-1.3,0.1-2.6,0.3c0,0,0.5-0.2,1.1-0.4c5-1.7,7.4-2.1,10.5-3.7c5.8-3,11.5-9.4,12.7-16.1\n' +
    'c-2.2,6.4-8.9,12-14.9,14.2c-4.2,1.5-11.7,3-11.7,3c0,0-0.3-0.2-0.3-0.2c-5.1-2.5-5.3-13.6,4-17.1c4.1-1.6,8-0.7,12.4-1.8\n' +
    'C31.6,14.1,37,10.6,39.2,6C41.7,13.3,44.7,24.8,39.3,31.9z"/>\n' +
    '<g>\n' +
    '<path class="st0" d="M55.2,30.9c-0.5-0.3-0.9-0.9-0.9-1.6c0-1.1,0.8-1.9,1.9-1.9c0.4,0,0.7,0.1,1,0.3c2,1.3,4.1,2,5.9,2\n' +
    'c2,0,3.2-0.9,3.2-2.2v-0.1c0-1.6-2.2-2.2-4.6-2.9c-3-0.9-6.5-2.1-6.5-6.1v-0.1c0-3.9,3.2-6.3,7.4-6.3c2.2,0,4.5,0.6,6.5,1.7\n' +
    'c0.7,0.4,1.1,1,1.1,1.8c0,1.1-0.9,1.9-2,1.9c-0.4,0-0.6-0.1-0.9-0.2c-1.7-0.9-3.4-1.4-4.9-1.4c-1.8,0-2.9,0.9-2.9,2v0.1\n' +
    'c0,1.5,2.2,2.2,4.7,2.9c3,0.9,6.4,2.3,6.4,6v0.1c0,4.3-3.4,6.5-7.7,6.5C60.4,33.3,57.6,32.5,55.2,30.9z"/>\n' +
    '<path class="st0" d="M72.5,14.3c0-1.3,1-2.4,2.3-2.4c1.3,0,2.4,1.1,2.4,2.4v1.4c1.5-2.2,3.7-3.9,7-3.9c4.8,0,9.6,3.8,9.6,10.7\n' +
    'v0.1c0,6.8-4.7,10.7-9.6,10.7c-3.4,0-5.6-1.7-7-3.6V37c0,1.3-1.1,2.4-2.4,2.4c-1.3,0-2.3-1-2.3-2.4V14.3z M89.1,22.7L89.1,22.7\n' +
    'c0-4.1-2.7-6.7-5.9-6.7c-3.2,0-6,2.7-6,6.6v0.1c0,4,2.8,6.6,6,6.6C86.4,29.3,89.1,26.7,89.1,22.7z"/>\n' +
    '<path class="st0" d="M95.7,14.3c0-1.3,1-2.4,2.3-2.4c1.3,0,2.4,1.1,2.4,2.4v1.1c0.2-1.8,3.1-3.5,5.2-3.5c1.5,0,2.3,1,2.3,2.3\n' +
    'c0,1.3-0.8,2.1-1.9,2.3c-3.4,0.6-5.7,3.5-5.7,7.6V31c0,1.3-1.1,2.3-2.4,2.3c-1.3,0-2.3-1-2.3-2.3V14.3z"/>\n' +
    '<path class="st0" d="M109.7,14.3c0-1.3,1-2.4,2.3-2.4c1.3,0,2.4,1.1,2.4,2.4V31c0,1.3-1.1,2.3-2.4,2.3c-1.3,0-2.3-1-2.3-2.3V14.3\n' +
    'z"/>\n' +
    '<path class="st0" d="M116.9,14.3c0-1.3,1-2.4,2.3-2.4c1.3,0,2.4,1.1,2.4,2.4v1c1.3-1.9,3.2-3.4,6.5-3.4c4.7,0,7.4,3.1,7.4,7.9V31\n' +
    'c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.4-1-2.4-2.3v-9.7c0-3.2-1.6-5-4.4-5c-2.7,0-4.7,1.9-4.7,5.1V31c0,1.3-1.1,2.3-2.4,2.3\n' +
    'c-1.3,0-2.3-1-2.3-2.3V14.3z"/>\n' +
    '<path class="st0" d="M156.2,11.9c-1.3,0-2.4,1.1-2.4,2.4v1.4c-1.5-2.2-3.7-3.9-7-3.9c-4.9,0-9.6,3.8-9.6,10.7v0.1\n' +
    'c0,6.8,4.7,10.7,9.6,10.7c3.4,0,5.6-1.7,7-3.6c-0.2,3.7-2.5,5.7-6.5,5.7c-2.4,0-4.5-0.6-6.3-1.6c-0.2-0.1-0.5-0.2-0.9-0.2\n' +
    'c-1.1,0-2,0.9-2,2c0,0.9,0.5,1.6,1.3,1.9c2.5,1.2,5.1,1.8,8,1.8c3.7,0,6.6-0.9,8.5-2.8c1.7-1.7,2.7-4.3,2.7-7.8V14.3\n' +
    'C158.5,13,157.5,11.9,156.2,11.9z M147.9,29.2c-3.2,0-5.9-2.5-5.9-6.6v-0.1c0-4,2.7-6.6,5.9-6.6c3.2,0,6,2.7,6,6.6v0.1\n' +
    'C153.9,26.6,151.1,29.2,147.9,29.2z"/>\n' +
    '<path class="st0" d="M114.5,6.3c0,1.3-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4\n' +
    'C113.4,3.9,114.5,4.9,114.5,6.3z"/>\n' +
    '</g>\n' +
    '</g>\n' +
    '<g class="st1">\n' +
    '<g>\n' +
    '<g>\n' +
    '<g>\n' +
    '<path class="st2" d="M200.1,21.1H198V19h2.1V21.1z M200.1,32.9H198V22.6h2.1V32.9z"/>\n' +
    '</g>\n' +
    '<g>\n' +
    '<g>\n' +
    '<path class="st2" d="M212.5,22.6l-3,8.9c-0.5,1.5-1.4,1.6-2.2,1.6c-1.1,0-1.8-0.5-2.2-1.6l-2.5-7.4h-1v-1.5h2.6l2.6,8.3\n' +
    'c0.1,0.4,0.2,0.6,0.5,0.6c0.3,0,0.4-0.2,0.5-0.6l2.6-8.3H212.5z"/>\n' +
    '<path class="st2" d="M217.8,22.6c2.8,0,4.7,1.8,4.7,4.5v1.6c0,2.6-1.9,4.5-4.7,4.5c-2.8,0-4.7-1.8-4.7-4.5v-1.6\n' +
    'C213,24.4,215,22.6,217.8,22.6 M217.8,31.4c1.7,0,2.7-1.3,2.7-2.8v-1.6c0-1.5-1-2.8-2.7-2.8c-1.8,0-2.7,1.3-2.7,2.8v1.6\n' +
    'C215.1,30.2,216,31.4,217.8,31.4"/>\n' +
    '<path class="st2" d="M239.6,22.9c-1.1-0.3-2.7-0.5-4-0.5c-2.8,0-4.6,1.8-4.6,4.6v1.1c0,2.9,1.7,4.7,4.6,4.7c0.1,0,0.6,0,0.8,0\n' +
    'v-1.7c-0.1,0-0.7,0-0.8,0c-1.5,0-2.6-1.2-2.6-2.9v-1.1c0-1.8,1-2.9,2.6-2.9c0.7,0,1.7,0.1,2.1,0.1l0.1,0l0,8.6h2.1v-9.6\n' +
    'C240,23.1,240,23,239.6,22.9"/>\n' +
    '<rect x="242.1" y="19" class="st2" width="2.1" height="13.9"/>\n' +
    '<path class="st2" d="M190.5,19h-3.8v13.9h2.2V20.9h1.3c0.3,0,0.5,0,0.8,0c1.9,0,2.9,0.8,2.9,2.3c0,0.1,0,0.1,0,0.2\n' +
    'c0,1.4-0.8,2.3-2.9,2.3c-0.2,0-0.4,0-0.6,0c0,0.5,0,1.5,0,1.9c0.2,0,0.4,0,0.6,0c3,0,5.2-1.2,5.2-4.2c0-0.1,0-0.1,0-0.2\n' +
    'C196.2,20.2,193.9,19,190.5,19"/>\n' +
    '<path class="st2" d="M226.3,20.4v2.2h3.5v1.7h-3.5v6c0,0.9,0.6,1,1.5,1h2v1.7H227c-2,0-2.9-0.8-2.9-2.6v-9.6L226.3,20.4z"/>\n' +
    '</g>\n' +
    '</g>\n' +
    '</g>\n' +
    '</g>\n' +
    '<g>\n' +
    '<path class="st2" d="M167.7,32.9v-10h1.1v3.8c0.6-0.8,1.5-1.3,2.4-1.3c1.9,0,3.2,1.5,3.2,3.8c0,2.4-1.3,3.8-3.2,3.8\n' +
    'c-1,0-1.9-0.5-2.4-1.3v1.1H167.7z M171,32.1c1.5,0,2.3-1.2,2.3-2.8c0-1.6-0.9-2.8-2.3-2.8c-0.9,0-1.8,0.5-2.2,1.2v3.3\n' +
    'C169.2,31.6,170.1,32.1,171,32.1z"/>\n' +
    '<path class="st2" d="M175.9,34.7c0.2,0.1,0.4,0.1,0.6,0.1c0.5,0,0.8-0.2,1.1-0.8l0.5-1.1l-3-7.3h1.2l2.4,5.9l2.4-5.9h1.2\n' +
    'l-3.6,8.7c-0.4,1-1.2,1.5-2.1,1.5c-0.2,0-0.6,0-0.8-0.1L175.9,34.7z"/>\n' +
    '</g>\n' +
    '</g>\n' +
    '</g>\n' +
    '</svg>\n' +
    '</h1>\n' +
    '</div>';

var starsNumber = 0;
var header = document.createElement('div');
header.innerHTML = headerHtml;
document.body.insertBefore(header, document.body.firstChild);

function getIssueURL() {
    var metas = document.getElementsByTagName('meta');
    for (var i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === 'issue-url') {
            return metas[i].getAttribute('content');
        }
    }
    return '';
}

function getProjectName() {
    var metas = document.getElementsByTagName('meta');
    for (var i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === 'project') {
            return metas[i].getAttribute('content');
        }
    }
    return '';
}

function getPageId() {
    var pageId = getProjectName() + '_';
    if (document.getElementById('revnumber')) {
        pageId += document.getElementById('revnumber').innerHTML + '_';
    }
    pageId += window.location.pathname.split('\\').pop().split('/').pop();
    pageId = pageId.split(' ').join('_');
    return pageId;
}

function getDateString() {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    var today = new Date();
    var thisDay = today.getDate();
    var thisMonth = monthNames[today.getMonth()];
    var thisYear = today.getFullYear();
    return thisDay + ' ' + thisMonth + ', ' + thisYear;
}

function getHeadings() {
    var activeTocElement = toc.getElementsByClassName('is-active-li');
    var headings = [];
    if (activeTocElement && activeTocElement.length > 0) {
        activeTocElement = activeTocElement[0];
        headings.push({
            text: activeTocElement.childNodes[0].textContent,
            href: activeTocElement.childNodes[0].href
        });
        while (activeTocElement.parentElement.parentElement.className === 'toc-list-item') {
            headings.push({
                text: activeTocElement.parentElement.parentElement.childNodes[0].textContent,
                href: activeTocElement.parentElement.parentElement.childNodes[0].href
            });
            activeTocElement = activeTocElement.parentElement.parentElement;
        }
    } else {
        headings.push({
            text: 'Top of document',
            href: ''
        })
    }
    return headings.reverse().map(function (value) {
        if (value.href) {
            return value.text + ' (' + value.href + ')';
        }
        return value.text;
    }).join(' > ');
}

var urlIssue = getIssueURL();
if (urlIssue) {
    document.getElementById('ref-issue').setAttribute('href', urlIssue)
} else {
    document.getElementById('p-issue').style.display = 'none';
}

function getStarsComponent(id) {
    return '<div class="stars" id="' + id + '">' +
        '<span><a id="' + id + '1" class="star" onclick="onStarClick(1)" onmouseover="onStarMouseover(1)"></a></span>' +
        '<span><a id="' + id + '2" class="star" onclick="onStarClick(2)" onmouseover="onStarMouseover(2)"></a></span>' +
        '<span><a id="' + id + '3" class="star" onclick="onStarClick(3)" onmouseover="onStarMouseover(3)"></a></span>' +
        '<span><a id="' + id + '4" class="star" onclick="onStarClick(4)" onmouseover="onStarMouseover(4)"></a></span>' +
        '<span><a id="' + id + '5" class="star" onclick="onStarClick(5)" onmouseover="onStarMouseover(5)"></a></span>' +
        '</div>';
}

function onStarMouseover(index) {
    for (var i = 1; i <= 5; i++) {
        var a = document.getElementById('stars' + i);
        var b = document.getElementById('dialog-stars' + i);
        var clazz = (i <= index) ? 'star active' : 'star';
        if (a) {
            a.className = clazz;
        }
        if (b) {
            b.className = clazz;
        }
    }
}

function resetForm() {
    starsNumber = 0;
    document.getElementById('feedback-comment').value = '';
    document.getElementById('feedback-email').value = '';
    onStarMouseover(0);
}

function onStarClick(index) {
    starsNumber = index;
    MicroModal.show('modal-1', {disableScroll: true});
}

function submitFeedback(event) {
    try {
        event.preventDefault();
        var parser = new UAParser();
        var parserResult = parser.getResult();
        var path = window.location.pathname;
        var browserName = parserResult.browser.name;
        var browserVersion = parserResult.browser.version;
        var osName = parserResult.os.name;
        var osVersion = parserResult.os.version;
        var timestamp = new Date().getTime();
        var obj = {
            'starNumber': starsNumber,
            'feedbackText': document.getElementById('feedback-comment').value,
            'email': document.getElementById('feedback-email').value,
            'projectName': getProjectName(),
            'pageId': getPageId(),
            'path': path,
            'browserName': browserName,
            'browserVersion': browserVersion,
            'osName': osName,
            'osVersion': osVersion,
            'timestamp': timestamp,
            'dateString': getDateString(),
            'heading': getHeadings()
        };
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://spring-docs-feedback.cfapps.io/feedback', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(obj));
        resetForm();
        MicroModal.close('modal-1');
        alert('Your feedback has been send.')
    } catch (e) {
        alert('An error occurred while sending your feedback.')
    }
}