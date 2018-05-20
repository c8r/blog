"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GA = function GA(props) {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement("script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=UA-78113757-1" }),
    _react2.default.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());  gtag('config', 'UA-78113757-1');"
      }
    })
  );
};

exports.default = GA;