'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormButton = (0, _styledComponents2.default)('button')([], function (props) {
  return {
    display: 'inline-block',
    fontFamily: 'inherit',
    webkitTextDecoration: 'none',
    textDecoration: 'none',
    borderWidth: '0px',
    webkitAppearance: 'none',
    mozAppearance: 'none',
    appearance: 'none',
    webkitTextTransform: 'uppercase',
    letterSpacing: '0em',
    lineHeight: '1.25',
    whiteSpace: 'nowrap'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight, _styledSystem.borderRadius);

FormButton.defaultProps = {
  fontSize: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'blue',
  fontWeight: '600',
  borderRadius: 4
};

exports.default = FormButton;