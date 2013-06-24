
function morph (obj, fn, capitalized) {
  var output = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) output[fn(key, capitalized)] = obj[key];
  }
  return output;
}


function capitalize (str) {
  return str[0].toUpperCase() + str.slice(1);
}


function lowercase (str) {
  return str[0].toLowerCase() + str.slice(1);
}


function snake (str, capitalized) {
  if (typeof str === "object") return morph(str, snake, capitalized);

  str = str
          .replace(/([A-Z\d])([A-Z][a-z\d])/g, '$1_$2')
          .replace(/([a-z\d])([A-Z])/g, '$1_$2')
          .replace(/[-. ]/g, '_')
          .toLowerCase();

  if (capitalized) str = capitalize(str);
  return str;
}


function snakeCaps (str) {
  if (typeof str === "object") return morph(str, snakeCaps);

  str = snake(str).toUpperCase();
  return str;
}


function dashed (str, capitalized) {
  if (typeof str === "object") return morph(str, dashed, capitalized);

  str = str
          .replace(/([A-Z\d])([A-Z][a-z\d])/g, '$1-$2')
          .replace(/([a-z\d])([A-Z])/g, '$1-$2')
          .replace(/[_. ]/g, '-')
          .toLowerCase();

  if (capitalized) str = capitalize(str);
  return str;
}


function camel (str, capitalized) {
  if (typeof str === "object") return morph(str, camel, capitalized);

  if (!str.match(/[a-z]/)) str = str.toLowerCase();

  str = str.replace(/([\-_ .]+)([\w])/g, function (match) {
    return match[1].toUpperCase();
  });

  str = capitalized ? capitalize(str) : lowercase(str);
  return str;
}


function human (str, capitalized) {
  if (typeof capitalized === 'undefined') capitalized = true;
  if (typeof str === "object") return morph(str, human, capitalized);

  str = str
          .replace(/[-._]/g, ' ')
          .replace(/([A-Z\d])([A-Z][a-z\d])/g, '$1 $2')
          .replace(/([a-z])([A-Z])/g, '$1 $2')
          .replace(/(\s([a-zA-Z])\s)/g, function (match, p1) {
            return p1.toLowerCase();
          })
          .replace(/([A-Z])([a-z])/g, function (match, p1, p2) {
            return p1.toLowerCase() + p2;
          });

  str = capitalized ? capitalize(str) : lowercase(str);
  return str;
}


function title (str) {
  if (typeof str === "object") return morph(str, title);

  str = human(str, true)
          .replace(/(\s)([a-z])/g, function (match, p1, p2) {
            return p1 + p2.toUpperCase();
          });

  return str;
}


module.exports           = morph;
module.exports.snake     = snake;
module.exports.snakeCaps = snakeCaps;
module.exports.dashed    = dashed;
module.exports.camel     = camel;
module.exports.human     = human;
module.exports.title     = title;
