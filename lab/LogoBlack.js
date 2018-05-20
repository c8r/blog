'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoBlack = (0, _styledComponents2.default)('img')([], function (props) {
  return {};
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

LogoBlack.defaultProps = {
  m: 0,
  width: 32,
  src: 'https://compositor.io/logo/dist/compositor-black.png'
};

exports.default = LogoBlack;