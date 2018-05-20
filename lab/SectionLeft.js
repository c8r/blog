'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SectionLeft = function SectionLeft(props) {
  return _react2.default.createElement(
    _Container2.default,
    null,
    _react2.default.createElement(
      _Flex2.default,
      {
        flexDirection: ['column', 'row'],
        mx: -3,
        py: 5,
        align: 'center' },
      _react2.default.createElement(
        _Box2.default,
        {
          px: 3,
          py: 4,
          width: [1, 384, 448, 512],
          style: { flex: 'none' } },
        props.children
      ),
      _react2.default.createElement(
        _Box2.default,
        {
          px: 3,
          py: 2,
          width: [1]
        },
        _react2.default.createElement(_Image2.default, { src: props.image })
      )
    )
  );
};

exports.default = SectionLeft;