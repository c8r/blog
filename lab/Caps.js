'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Caps = (0, _styledComponents2.default)('span')([], function (props) {
  return {
    textTransform: 'uppercase',
    letterSpacing: '0.1875em'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight);

Caps.defaultProps = {
  fontSize: 0,
  fontWeight: '600'
};

exports.default = Caps;