'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = (0, _styledComponents2.default)('h2')([], function (props) {
  return {
    fontWeight: 'bold',
    lineHeight: '1.125'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

Heading.defaultProps = {
  fontSize: 5,
  m: 0
};

exports.default = Heading;