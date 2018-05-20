'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = (0, _styledComponents2.default)('input')([], function (props) {
  return {
    display: 'block',
    fontFamily: 'inherit',
    fontSize: 'inherit'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.borderRadius, _styledSystem.borderColor, _styledSystem.borderWidth, _styledSystem.focus);

Input.defaultProps = {
  m: 0,
  w: 1,
  px: 2,
  py: 1,
  color: 'inherit',
  bg: 'transparent',
  borderRadius: 4,
  borderColor: 'muted',
  borderWidth: 1,
  focus: {
    outline: 'none',
    borderColor: '#0093ef'
  }
};

exports.default = Input;