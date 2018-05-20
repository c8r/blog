'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dit = (0, _styledComponents2.default)('hr')([], function (props) {
  return {
    width: '64px',
    height: '4px'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.borderWidth);

Dit.defaultProps = {
  m: 0,
  borderWidth: 0,
  bg: 'black'
};

exports.default = Dit;