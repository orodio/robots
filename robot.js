var debug = true;

var grid     = require('./libs/boundGrid/boundGrid'),
    Position = require('./libs/position/position');

function Robot () { return this; }

Robot.prototype = {
  place: function (x, y, direction) {
    this.grid = grid();
    var pos = new Position(x, y, direction);
    if (this.grid.inGrid(pos)) this.position = pos;
    return this;
  },

  move: function () {
    if (this.grid === undefined) return this;
    var pos = this.position.move();
    if (this.grid.inGrid(pos)) this.position = pos;
    return this;
  },

  left: function () {
    if (this.grid === undefined) return this;
    this.position = this.position.turn('left');
    return this;
  },

  right: function () {
    if (this.grid === undefined) return this;
    this.position = this.position.turn('right');
    return this;
  },

  report: function () {
    if (this.grid === undefined) return 'place me';
    return this.position.report();
  }
};

module.exports = Robot;
