'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputDark = (0, _styledComponents2.default)(_Input2.default)([], function (props) {
  return {
    display: 'block',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    borderRadius: '4px'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.borderColor, _styledSystem.borderWidth);

InputDark.defaultProps = {
  m: 0,
  w: 1,
  px: 1,
  py: 1,
  color: 'inherit',
  bg: 'transparent',
  borderColor: 'midgray',
  borderWidth: 1
};

exports.default = InputDark;