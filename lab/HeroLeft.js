'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Caps = require('./Caps');

var _Caps2 = _interopRequireDefault(_Caps);

var _Subhead = require('./Subhead');

var _Subhead2 = _interopRequireDefault(_Subhead);

var _BigButton = require('./BigButton');

var _BigButton2 = _interopRequireDefault(_BigButton);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeroLeft = function HeroLeft(props) {
  return _react2.default.createElement(
    _Container2.default,
    null,
    _react2.default.createElement(
      _Flex2.default,
      {
        flexDirection: ['column', 'row'],
        mx: -3,
        py: 4,
        align: 'center' },
      _react2.default.createElement(
        _Box2.default,
        {
          px: 3,
          py: 4,
          width: [1, 384, 448],
          style: { flex: 'none' } },
        props.children
      ),
      _react2.default.createElement(
        _Box2.default,
        {
          px: 3,
          py: 2,
          mr: [0, -6],
          width: [1]
        },
        _react2.default.createElement(_Image2.default, { src: props.image })
      )
    )
  );
};

exports.default = HeroLeft;