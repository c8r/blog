'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = (0, _styledComponents2.default)('h1')([], function (props) {
  return {
    lineHeight: '1'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight);

Title.defaultProps = {
  m: 0,
  fontSize: [48, 56],
  fontWeight: '700'
};

exports.default = Title;