var DynamicHeader = (function() {
  //config
  var self = this;
  this.config = {
    scrolled: false,
    lastScrollTop: 0,
    delta: 5,
    header: null,
    content: null,
    trim: null
  }

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

  //logic
  function getHeaderHeight() {
    return config.header.clientHeight;
  }

  function isHeaderHidden() {
    var top = parseInt(config.header.style.top);
    return top < 0;
  }

  function selectHeader(config) {
    if (config && config.headerId) {
      return document.getElementById(config.headerId);
    } else {
      return document.getElementById('header');
    }
  }

  function selectContent(config) {
    if (config && config.contentId) {
      return document.getElementById(config.contentId);
    } else {
      return document.getElementById('content');
    }
  }

  function setContentTrim(margin) {
    config.trim.style.height = margin;
  }

  function setHeaderTop(top) {
    config.header.style.top = top;
  }

  function trimContent() {
    if (config.trim) {
      var headerHeight = getHeaderHeight();
      setContentTrim(headerHeight + 'px');
    }
  }

  function insertTrim() {
    //it´s more unobtrusive to insert a trim div with a specific height
    //before the content instead of setting a top-margin for the
    //content

    if (config.header && config.content && !config.trim) {
      var parent = config.content.parentElement;
      config.trim = document.createElement("div");
      parent.insertBefore(config.trim, config.content);
      trimContent();
    }
  }

  function trimHeader() {
    if (config.header) {
      if (isHeaderHidden()) {
        //move the header out of the way, even if resizing the window
        //leads to different height of header
        setHeaderTop('-1000px');
      }
    }
  }

  function moveHeader() {
    var headerHeight = getHeaderHeight();
    if (isHeaderHidden()) {
      //if the header has been trimmed before, it should be
      //moved into a position from where it can be moved
      //with proper animation speed
      setHeaderTop(-headerHeight + 'px');
    }

    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (Math.abs(config.lastScrollTop - scrollTop) <= config.delta) return;

    if (scrollTop > config.lastScrollTop && scrollTop > headerHeight){
      // if current position > last position AND scrolled past header height,
      // move the header out of the way
      setHeaderTop(-headerHeight + 'px');
    } else {
      if(scrollTop + windowHeight() < documentHeight()) {
        setHeaderTop(0);
      }
    }
    config.lastScrollTop = scrollTop;
  }


  //public API

  return {
    init: function(config) {

      if (!self.config.header && !self.config.content) {
        window.onload = function() {
          self.config.header = selectHeader(config);
          self.config.content = selectContent(config);
          insertTrim();

          if (self.config.header) {
            self.config.header.style.transition = 'top 0.2s ease-in-out';
            window.onresize = function() {
              trimHeader();
              trimContent();
            }
            window.onscroll = function() {
              self.config.scrolled = true;
            }
            setInterval(function() {
              if (self.config.scrolled) {
                self.config.scrolled = false;
                moveHeader();
              }
            }, 250);
          }
        }
      }
    }
  }
})();
