'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StripeStyles = function StripeStyles(props) {
  return _react2.default.createElement('style', {
    dangerouslySetInnerHTML: {
      __html: '.stripe-button-el { margin-right: 16px; padding: 0; box-shadow: none!important;} .stripe-button-el.stripe-button-el span { font-size:16px; line-height: inherit!important; height:auto!important;box-shadow: none!important; background: #0093ef!important; padding-right: 18px; padding-left: 18px; padding-bottom: 12px; padding-top: 12px;text-shadow: none!important; }'
    }
  });
};

exports.default = StripeStyles;