module.exports = function(wct, pluginOptions) {
  var counter = 0;

  wct.on('test-start', function() {
    process.stdout.write(++counter % 50 === 0 ? counter.toString() : '.');
  });
};
