'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Caps = require('./Caps');

var _Caps2 = _interopRequireDefault(_Caps);

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _TestimonialText = require('./TestimonialText');

var _TestimonialText2 = _interopRequireDefault(_TestimonialText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Testimonial = function Testimonial(props) {
  return _react2.default.createElement(
    _Box2.default,
    props,
    _react2.default.createElement(
      _TestimonialText2.default,
      null,
      '\u201C',
      props.text,
      '\u201D'
    ),
    _react2.default.createElement(
      _Flex2.default,
      { align: 'center', center: true, mt: 2 },
      _react2.default.createElement(_Avatar2.default, { src: props.src, mr: 2 }),
      _react2.default.createElement(_Caps2.default, { children: props.author })
    )
  );
};

exports.default = Testimonial;