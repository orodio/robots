var directions = {
  "NORTH" : { key: "NORTH", right: "EAST",  left: "WEST",  movement: {x:0, y:1}  },
  "EAST"  : { key: "EAST",  right: "SOUTH", left: "NORTH", movement: {x:1, y:0}  },
  "SOUTH" : { key: "SOUTH", right: "WEST",  left: "EAST",  movement: {x:0, y:-1} },
  "WEST"  : { key: "WEST",  right: "NORTH", left: "SOUTH", movement: {x:-1, y:0} }
};

function Position(/* x,y || {x,y,direction} */) {
  var useArgs = arguments.length > 1;
  this.x         = useArgs ? arguments[0] : arguments[0].x;
  this.y         = useArgs ? arguments[1] : arguments[0].y;
  this.direction = useArgs ? arguments[2] : arguments[0].direction;
}

Position.prototype = {
  report: function () { return [this.x, this.y, this.direction].join(); },
  obj: function () { return {x: this.x, y: this.y, direction: this.direction}; },

  turn: function (dir) {
    var _dir = directions[this.direction][dir];
    if (_dir === undefined) return this;
    return new Position( this.x, this.y, _dir);
  },

  move: function () {
    if (this.x === undefined || this.y === undefined) return this;
    var _m = directions[this.direction].movement;
    return new Position( this.x + _m.x, this.y + _m.y, this.direction );
  }
};

module.exports = Position;
