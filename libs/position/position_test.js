var Position = require('./position');

describe('position: ', function () {
  describe('a new position: ', function () {

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
          var pos    = new Position(0,0,d.start),
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
      describe('NORTH: ', function () {
        var p = new Position(4,4,'NORTH'),
            n = p.move();

        it('moved position y has increased by 1', function(){
          expect(n.y).toBe(5);
          expect(n.x).toBe(4);
        });

        it('old position hasnt been touched', function(){
          expect(p.y).toBe(4);
          expect(p.x).toBe(4);
        });
      });

      describe('EAST: ', function () {
        var p = new Position(4,4,'EAST'),
            n = p.move();

        it('moved position x has increased by 1', function(){
          expect(n.x).toBe(5);
          expect(n.y).toBe(4);
        });

        it('old position hasnt been touched', function(){
          expect(p.y).toBe(4);
          expect(p.x).toBe(4);
        });
      });

      describe('SOUTH: ', function () {
        var p = new Position(4,4,'SOUTH'),
            n = p.move();

        it('moved position y has decreased by 1', function(){
          expect(n.y).toBe(3);
          expect(n.x).toBe(4);
        });

        it('old position hasnt been touched', function(){
          expect(p.y).toBe(4);
          expect(p.x).toBe(4);
        });
      });

      describe('WEST: ', function () {
        var p = new Position(4,4,'WEST'),
            n = p.move();

        it('moved position x has decreased by 1', function(){
          expect(n.x).toBe(3);
          expect(n.y).toBe(4);
        });

        it('old position hasnt been touched', function(){
          expect(p.y).toBe(4);
          expect(p.x).toBe(4);
        });
      });
    });
  });
});
