var numStars = 0;

// Mouse-over handlers for the stars outside the dialog
$("#star1").on("mouseover", function() {
  fillStars(1);
});
$("#star2").on("mouseover", function() {
  fillStars(2);
});
$("#star3").on("mouseover", function() {
  fillStars(3);
});
$("#star4").on("mouseover", function() {
  fillStars(4);
});
$("#star5").on("mouseover", function() {
  fillStars(5);
});

// Mouse-over handlers for the stars inside the dialog
$("#innerStar1").on("mouseover", function() {
  fillInnerStars(1);
});
$("#innerStar2").on("mouseover", function() {
  fillInnerStars(2);
});
$("#innerStar3").on("mouseover", function() {
  fillInnerStars(3);
});
$("#innerStar4").on("mouseover", function() {
  fillInnerStars(4);
});
$("#innerStar5").on("mouseover", function() {
  fillInnerStars(5);
});

// Mouse out handler for the stars row outside the dialog
$("#stars").on("mouseleave", function() {
  fillStars(numStars);
});

// Mouse out handler for the stars row inside the dialog
$("#innerStars").on("mouseleave", function() {
  fillInnerStars(numStars);
});

// Star click handlers for stars outside the dialog
$("#star1").on("click", function() {
  numStars = 1;
  fillInnerStars(numStars);
});
$("#star2").on("click", function() {
  numStars = 2;
  fillInnerStars(numStars);
});
$("#star3").on("click", function() {
  numStars = 3;
  fillInnerStars(numStars);
});
$("#star4").on("click", function() {
  numStars = 4;
  fillInnerStars(numStars);
});
$("#star5").on("click", function() {
  numStars = 5;
  fillInnerStars(numStars);
});

// Star click handlers for stars inside the dialog
$("#innerStar1").on("click", function() {
  numStars = 1;
});
$("#innerStar2").on("click", function() {
  numStars = 2;
});
$("#innerStar3").on("click", function() {
  numStars = 3;
});
$("#innerStar4").on("click", function() {
  numStars = 4;
});
$("#innerStar5").on("click", function() {
  numStars = 5;
});

// The function that figures out which stars should be empty or full and
// sets the corresponding image (for the stars outside the dialog).
function fillStars(fillNumber) {
  for (i = 1; i <= 5; i++) {
    id = "#star" + i;
    if (i <= fillNumber) {
      $(id).attr('src',"images/star_filled.png");
    } else {
      $(id).attr('src',"images/star_unfilled.png");
    }
  }
}

// The function that figures out which stars should be empty or full and
// sets the corresponding image (for the stars inside the dialog).
function fillInnerStars(fillNumber) {
  for (i = 1; i <= 5; i++) {
    id = "#innerStar" + i;
    if (i <= fillNumber) {
      $(id).attr('src',"images/star_filled.png");
    } else {
      $(id).attr('src',"images/star_unfilled.png");
    }
  }
}

function getPageId() {
  var pageId = getProjectName() + "_";
  pageId = pageId + document.getElementById("revnumber").innerHTML + "_";
  pageId = pageId + window.location.pathname.split('\\').pop().split('/').pop();
  pageId = pageId.split(' ').join('_');
  return pageId;
}

function getProjectName() {
  var metas = document.getElementsByTagName('meta');
  for (i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === 'project') {
      return metas[i].getAttribute('content');
    }
  }
  return '';
}

// Create and send the feedback JSON
function sendFeedback() {
  var feedbackText = $("#feedbackText").val();
  var email = $("#email").val();
  var path = window.location.pathname;
  var parser = new UAParser();
  var result = parser.getResult();
  var browserName = result.browser.name;
  var browserVersion = result.browser.version;
  var osName = result.os.name
  var osVersion = result.os.version;
  var timestamp = new Date().getTime();

  var data = {"starNumber":numStars, "feedbackText":feedbackText, "email":email,
    "pageId":getPageId(), "path":path, "browserName":browserName,
    "browserVersion":browserVersion, "osName":osName, "osVersion":osVersion,
    "timestamp":timestamp,
    "heading":getHeadingId()};
  var jsonData = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://spring-docs-feedback.cfapps.io/feedback", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(jsonData);

  numStars = 0;
  fillStars(numStars);
  $("#feedbackText").val("");
  $("#email").val("");
}

// NOTE: It doesn't always return an id.
// When no id is present, it returns the text or other information.
function getHeadingId() {
  var headings = $("h1, h2, h3, h4, h5, h6");
  var visibleHeadings = [];
  for (var i=0, max=headings.length; i < max; i++) {
    if (!isElementOutOfViewport(headings[i])) {
      var thisHeading = headings[i];
      if (!($(headings[i]).hasClass("js-toc-ignore"))) {
        visibleHeadings.push(headings[i]);
      }
    }
  }
  if (visibleHeadings.length === 0) {
    var firstVisibleElement = getFirstVisibleElement();
    var sectionBodyElement = findSectionBody(firstVisibleElement);
    return "id: " + sectionBodyElement.previousElementSibling.id;
  }
  if (visibleHeadings[0].hasAttribute('id')) {
    return "id: " + visibleHeadings[0].id;
  } else {
    if (visibleHeadings[0].firstElementChild != null) {
      if (visibleHeadings[0].firstElementChild.nodeName.toLowerCase() === "svg") {
        return "(top of document)";
      }
    } else {
      return "heading content: " + visibleHeadings[0].innerText;
    }
  }
}

function findSectionBody(startingElement) {
  element = startingElement;
  foundIt = false;
  while (!foundIt) {
    if (element.className === "sectionbody") {
      return element;
    } else {
      element = element.parentNode;
    }
  }
}

function getFirstVisibleElement() {
  var elements = $("p");
  for (var i=0, max=elements.length; i < max; i++) {
    // Have to block the preamble section to avoid false positives
    if (elements[i].closest("#preamble") === null) {
      if (!isElementOutOfViewport(elements[i])) {
        return elements[i];
      }
    }
  }
}

function isElementOutOfViewport(el){
  var rect = el.getBoundingClientRect();
  return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
}
