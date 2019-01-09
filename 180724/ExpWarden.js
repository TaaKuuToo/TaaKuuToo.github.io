var rollover = {
  init : function() {
    if(!document.getElementById || !document.getElementsByTagName) return;
    rollover.setRollover();
  },
  setRollover : function() {
    var imgElement = document.getElementsByTagName('img');
    for(var i = 0; i < imgElement.length; i++) {
      if(imgElement[i].className == 'rollover') {
        var src = imgElement[i].getAttribute('src');

        imgElement[i].onmouseover = function() {
          this.setAttribute('src', this.getAttribute('src').replace('_off', '_on'));
        }

        imgElement[i].onmouseout = function() {
          this.setAttribute('src', this.getAttribute('src').replace('_on', '_off'));
        }
      }
    }
  }

}

if(window.addEventListener) {
  window.addEventListener("load", rollover.init, false);
} else {
  window.attachEvent("onload", rollover.init);
}