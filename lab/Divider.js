'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = (0, _styledComponents2.default)('hr')([], function (props) {
  return {
    height: '0',
    borderStyle: 'solid',
    borderWidth: '0',
    borderBottomWidth: '1px'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.borderWidth, _styledSystem.borderColor);

Divider.defaultProps = {
  color: 'gray'
};

exports.default = Divider;