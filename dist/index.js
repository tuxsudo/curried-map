'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instantCurry = require('instant-curry');

var _instantCurry2 = _interopRequireDefault(_instantCurry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _instantCurry2.default)(function (fn, items) {
  return items.map(fn);
});

