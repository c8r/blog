'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonOutline = (0, _styledComponents2.default)(_Button2.default)([], function (props) {
  return {
    boxShadow: 'inset 0 0 0 2px'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.borderWidth);

ButtonOutline.defaultProps = {
  bg: 'transparent',
  color: 'blue',
  pt: 2
};

exports.default = ButtonOutline;