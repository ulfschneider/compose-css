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
  adjust: null
}

//logic
function getHeaderHeight() {
  return config.header.clientHeight;
}

function selectHeader() {
  return document.getElementById('siteHeader');
}

function selectAdjust() {
  return document.getElementById('grid');
}

function adjust() {
  if (config.header && config.adjust) {
    var headerHeight = getHeaderHeight();
    config.adjust.style.marginTop = headerHeight + 'px';
  }
}

function init() {
  config.header = selectHeader();
  config.adjust = selectAdjust();
  adjust();

  if (config.header) {
    window.onscroll = function() {
      config.scrolled = true;
    }
    window.onresize = function() {
      config.header.style.top = 0;
      adjust();
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
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (Math.abs(config.lastScrollTop - scrollTop) <= config.delta) return;

  var headerHeight = getHeaderHeight();

  config.header.style.transition = 'top 0.2s ease-in-out';
  if (scrollTop > config.lastScrollTop && scrollTop > headerHeight){
    // If current position > last position AND scrolled past header
    // scroll down
    config.header.style.top = '' + -headerHeight + 'px';
  } else {
    if(scrollTop + windowHeight() < documentHeight()) {
      config.header.style.top = 0;
    }
  }
  config.lastScrollTop = scrollTop;
}


//TODO make header + adjust configurable

(function dynamicHeader() {
  window.onload = function() {
    init();
  }
})();
