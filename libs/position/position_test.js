var Position = require('./position');

describe('position: ', function () {
  describe('basics', function () {
    var pos = new Position(0,0,'NORTH');
    it('has an x value', function () { expect(pos.x).toBe(0); });
    it('has a  y value', function () { expect(pos.y).toBe(0); });
    it('has an direction value', function () { expect(pos.direction).toBe('NORTH'); });
  });

  describe('turning: ', function () {
    var dirs = [
      { start: 'NORTH', dir: 'right', end: 'EAST'  },
      { start: 'NORTH', dir: 'left',  end: 'WEST'  },
      { start: 'EAST',  dir: 'right', end: 'SOUTH' },
      { start: 'EAST',  dir: 'left',  end: 'NORTH' },
      { start: 'SOUTH', dir: 'right', end: 'WEST'  },
      { start: 'SOUTH', dir: 'left',  end: 'EAST'  },
      { start: 'WEST',  dir: 'right', end: 'NORTH' },
      { start: 'WEST',  dir: 'left',  end: 'SOUTH' }
    ];

    dirs.forEach(function (d) {
      it('can turn '+d.dir+' ('+d.start+'->'+d.end+')', function(){
        var pos = new Position(0,0,d.start),
            newPos = pos.turn(d.dir);
        expect(newPos.direction).toBe(d.end);
      });
    });
  });

  describe('reporting: ', function () {
    it('can report', function () {
      var p = new Position(65, 32, 'WEST');
      expect(p.report()).toBe('65,32,WEST');
    });
  });

  describe('moving: ', function () {
    var data = [
      {dir: 'NORTH', pos: {x: 4, y:4}, movedPos: {x:4, y:5}},
      {dir: 'EAST',  pos: {x: 4, y:4}, movedPos: {x:5, y:4}},
      {dir: 'SOUTH', pos: {x: 4, y:4}, movedPos: {x:4, y:3}},
      {dir: 'WEST',  pos: {x: 4, y:4}, movedPos: {x:3, y:4}}
    ]

    data.forEach(function (d) {
      describe(d.dir + ' movement: ', function () {
        var pos = new Position(d.pos.x, d.pos.y, d.dir),
            movedPos = pos.move();
        it('pos is still at (' + d.pos.x + ',' + d.pos.y + ',' + d.dir + ')', function () { expect(pos.report()).toBe([d.pos.x, d.pos.y, d.dir].join()); });
        it('movedPos is at (' + d.movedPos.x + ',' + d.movedPos.y + ',' + d.dir + ')', function () { expect(movedPos.report()).toBe([d.movedPos.x, d.movedPos.y, d.dir].join()); });
      });
    });
  });
});
