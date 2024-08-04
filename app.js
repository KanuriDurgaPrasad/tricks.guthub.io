// WebFont Loader
WebFont.load({
    google: {
      families: ["DM Sans:regular,italic,500,700", "Fahkwang:regular,500,600,700"]
    }
  });
  
  // Detect touch devices
  !function(o, c){
    var n = c.documentElement, t = " w-mod-";
    n.className += t + "js";
    ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch");
  }(window, document);
  