'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _NavLink = require('./NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar(props) {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      _Container2.default,
      null,
      _react2.default.createElement(
        _Flex2.default,
        {
          align: 'center',
          wrap: true,
          px: 0,
          py: 3 },
        _react2.default.createElement(
          _NavLink2.default,
          { ml: -2, href: 'https://compositor.io' },
          _react2.default.createElement(_Logo2.default, null),
          'Compositor'
        ),
        _react2.default.createElement(_Box2.default, { mx: 'auto' }),
        props.children
      )
    )
  );
};

exports.default = NavBar;