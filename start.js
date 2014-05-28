var fs = require('fs'),
    Robot = require('./libs/robot/robot'),
    _ = require('lodash');

fs.readFile('commands.txt', function (err, doc) {
  var sets = _.map(
    doc.toString().split('---'),
    function (set) {
      return _.compact(set.split('\n'));
    }
  );

  _.each(sets, function (command) {
    var robot = new Robot();
    _.each(command, function (c) {
      var parts = c.split(' '),
          head  = _.first(parts).toLowerCase(),
          tail  = parts.length > 1 ? _.rest(parts)[0].split(',') : undefined;
      robot[head].apply(robot, tail);
    });
  });
});
