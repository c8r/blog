'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = (0, _styledComponents2.default)('div')([], function (props) {
  return {
    display: 'flex'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.alignItems, _styledSystem.justifyContent, _styledSystem.flexWrap, _styledSystem.flexDirection);

Flex.defaultProps = {};

exports.default = Flex;