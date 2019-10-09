console.log (arguments);
exports.id = 'index';
module.exports = function () {};
console.log('In Index', module); require ('./lib/util');
setImmediate (() => {console.log ('The index.js module object is now loaded!',module)});
