'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = (0, _styledComponents2.default)('img')([], function (props) {
  return {};
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.borderRadius, _styledSystem.borderWidth, _styledSystem.borderColor);

Avatar.defaultProps = {
  width: 48,
  height: 48,
  borderRadius: 99999
};

exports.default = Avatar;