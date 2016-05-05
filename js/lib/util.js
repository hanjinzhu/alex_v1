Function.prototype.bind = function (bind) {
    var self = this;
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return self.apply(bind || null, args);
    };
};

var isInt = function(n) {
    return (n % 1) === 0;
};

var TRANSITIONEND = 'transitionend webkitTransitionEnd oTransitionEnd';

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || /* 标准通用高富帅 */
          window.webkitRequestAnimationFrame || /* */
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();