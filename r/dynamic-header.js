var DynamicHeader = (function() {
  //state
  var self = this;
  var scrolled, lastScrollTop;
  var header, content, trim;
  var initialHeaderStyle;

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

  function getHeaderHeight() {
    return header.clientHeight;
  }

  function isHeaderHidden() {
    var top = parseInt(header.style.top);
    return top < 0;
  }

  function modifyHeaderStyle() {
    //save header style for later clean up
    initialHeaderStyle = {};
    initialHeaderStyle.transition = header.style.transition;
    initialHeaderStyle.position = header.style.position;
    initialHeaderStyle.left = header.style.left;
    initialHeaderStyle.top = header.style.top;
    initialHeaderStyle.right = header.style.right;

    //modify header style
    header.style.transition = 'top 0.2s ease-in-out';
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.right = '0';
  }

  function revertHeaderStyle() {
    //clean up any settings that have been made by DynamicHeader
    if (header && initialHeaderStyle) {
      header.style.transition = initialHeaderStyle.transition;
      header.style.position = initialHeaderStyle.position;
      header.style.left = initialHeaderStyle.left;
      header.style.top = initialHeaderStyle.top;
      header.style.right = initialHeaderStyle.right;
    }
  }

  function selectHeader() {
    header = document.getElementById(config.headerId);
    if (!header) {
      console.error('Header with id=[' + config.headerId + '] could not be found in DOM');
    } else {
      modifyHeaderStyle();
    }
  }

  function selectContent() {
    if (config.contentId) {
       content = document.getElementById(config.contentId);
      if (!content) {
        console.error('Content with id=[' + config.contentId + '] could not be found in DOM');
      }

    } else {
      content = document.body.firstElementChild;
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
    selectHeader();
    selectContent();

    if (header) {
      insertTrim();
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

  function cleanUp() {
    self.config = {
      delta: 5,
      headerId: 'header',
      contentId: ''
    }
    lastScrollTop = 0;
    scrolled = false;
    revertHeaderStyle();
    if (trim) {
      trim.remove();
    }
    trim = null;
    header = null;
    content = null;

  }

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


  //public API
  return {
    init: function(config) {
      //init
      cleanUp();
      transferConfig(config);
      window.addEventListener('load', onload);
    },
    destroy: function() {
      cleanUp();
    }
  }
})();
