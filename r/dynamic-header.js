var DynamicHeader = (function() {
  //state
  var self = this;
  var scrolled;
  var lastScrollTop;
  var header;
  var content;
  var trim;

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
  function transferConfig(config) {
    if (config) {
      if (config.headerId) {
        self.config.headerId = config.headerId;
      }
      if (config.contentId) {
        self.config.contentId = config.contentId;
      }
      if (config.delta) {
        self.config.delta = config.delta;
      }
    }
  }

  function getHeaderHeight() {
    return header.clientHeight;
  }

  function isHeaderHidden() {
    var top = parseInt(header.style.top);
    return top < 0;
  }

  function selectHeader() {
    var header = document.getElementById(config.headerId);
    if (!header) {
      console.error('Header with id=[' + config.headerId + '] could not be found in DOM');
    }
    return header;
  }

  function selectContent() {
    if (config.contentId) {
      var content = document.getElementById(config.contentId);
      if (!content) {
        console.error('Content with id=[' + config.contentId + '] could not be found in DOM');
      }
      return content;
    } else {
      return document.body.firstElementChild;
    }
  }

  function setContentTrim(margin) {
    trim.style.height = margin;
  }

  function setHeaderTop(top) {
    header.style.top = top;
  }

  function trimContent() {
    if (trim) {
      var headerHeight = getHeaderHeight();
      setContentTrim(headerHeight + 'px');
    }
  }

  function insertTrim() {
    //it´s more unobtrusive to insert a trim div with a specific height
    //before the content instead of setting a top-margin for the
    //content

    if (header && content && !trim) {
      var parent = content.parentElement;
      trim = document.createElement("div");
      trim.id = 'dynamicHeaderTrim';
      parent.insertBefore(trim, content);
      trimContent();
    }
  }

  function trimHeader() {
    if (header) {
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
    if (Math.abs(lastScrollTop - scrollTop) <= config.delta) return;

    if (scrollTop > lastScrollTop && scrollTop > headerHeight){
      // if current position > last position AND scrolled past header height,
      // move the header out of the way
      setHeaderTop(-headerHeight + 'px');
    } else {
      if(scrollTop + windowHeight() < documentHeight()) {
        setHeaderTop(0);
      }
    }
    lastScrollTop = scrollTop;
  }

  function onresize() {
    trimHeader();
    trimContent();
  }

  function onscroll() {
    scrolled = true;
  }

  function onload() {
    header = selectHeader();
    content = selectContent();

    if (header) {
      insertTrim();

      header.style.transition = 'top 0.2s ease-in-out';
      window.addEventListener('resize', onresize);
      window.addEventListener('scroll', onscroll);
      setInterval(function() {
        if (scrolled) {
          scrolled = false;
          moveHeader();
        }
      }, 250);
    }
  }

  function reset() {
    self.config = {
      delta: 5,
      headerId: 'header',
      contentId: ''
    }
    lastScrollTop = 0;
    scrolled = false;
    if (trim) {
      trim.remove();
    }
    header = null;
    content = null;
  }

  //public API
  return {
    init: function(config) {
      //clean up
      reset();

      //init
      transferConfig(config);
      window.addEventListener('load', onload);

    }
  }
})();
