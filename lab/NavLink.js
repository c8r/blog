'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavLink = (0, _styledComponents2.default)('a')([], function (props) {
  return {
    webkitTextDecoration: 'none',
    textDecoration: 'none',
    webkitTextTransform: 'uppercase',
    textTransform: 'uppercase',
    letterSpacing: '0.1875em',
    lineHeight: '1',
    display: 'inline-flex',
    webkitAlignItems: 'center',
    webkitBoxAlign: 'center',
    msFlexAlign: 'center',
    alignItems: 'center'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight, _styledSystem.hover);

NavLink.defaultProps = {
  fontWeight: '600',
  color: 'inherit',
  hover: {
    color: '#009eef'
  },
  fontSize: 10
};

exports.default = NavLink;