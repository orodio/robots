var inRangeFn = function (min, max) {
  return function (value) {
    return value >= min && value <= max;
  };
};

var boundGrid = function (x, y){
  var _xMin = 0,
      _yMin = 0,
      _xMax = (x||5) - 1,
      _yMax = (y||5) - 1;

  return {
    inX: inRangeFn( _xMin, _xMax ),
    inY: inRangeFn( _yMin, _yMax ),
    inGrid: function (/* x,y || {x,y} */) {
      var useArgs = arguments.length > 1,
          _x = this.inX(useArgs ? arguments[0] : arguments[0].x),
          _y = this.inY(useArgs ? arguments[1] : arguments[0].y);
      return _x && _y;
    }
  };
};

module.exports = boundGrid;
