//helper functions

function windowHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

function documentHeight() {
  return Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
}

//config
var config = {
  scrolled: false,
  lastScrollTop: 0,
  delta: 5,
  header: null,
  content: null
}

//logic
function getHeaderHeight() {
  return config.header.clientHeight;
}

function isHeaderHidden() {
  var top = parseInt(config.header.style.top);
  return top < 0;
}

function selectHeader() {
  return document.getElementById('siteHeader');
}

function selectContent() {
  return document.getElementById('grid');
}

function setContentMargin(margin) {
  config.content.style.marginTop = margin;
}

function setHeaderTop(top) {
  config.header.style.top = top;
}

function trimHeader() {
  if (config.header) {
    if (isHeaderHidden()) {
      //move the header out of the way, even if resizing the window leads to different height of header
      setHeaderTop('-1000px');
    }
  }
}

function trimContent() {
  if (config.header && config.content) {
    var headerHeight = getHeaderHeight();
    setContentMargin(headerHeight + 'px');
  }
}

function init() {
  config.header = selectHeader();
  config.content = selectContent();
  trimContent();

  if (config.header) {
    config.header.style.transition = 'top 0.2s ease-in-out';
    window.onscroll = function() {
      config.scrolled = true;
    }
    window.onresize = function() {
      trimHeader();
      trimContent();
    }
    setInterval(function() {
      if (config.scrolled) {
        config.scrolled = false;
        moveHeader();
      }
    }, 250);
  }
}

function moveHeader() {
  var headerHeight = getHeaderHeight();
  if (isHeaderHidden()) {
    setHeaderTop(-headerHeight + 'px');
  }

  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (Math.abs(config.lastScrollTop - scrollTop) <= config.delta) return;

  if (scrollTop > config.lastScrollTop && scrollTop > headerHeight){
    // If current position > last position AND scrolled past header
    // scroll down
    setHeaderTop(-headerHeight + 'px');
  } else {
    if(scrollTop + windowHeight() < documentHeight()) {
      setHeaderTop(0);
    }
  }
  config.lastScrollTop = scrollTop;
}


//TODO make header id + adjust id configurable

(function dynamicHeader() {
  window.onload = function() {
    init();
  }
})();
