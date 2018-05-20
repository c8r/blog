'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Subhead = require('./Subhead');

var _Subhead2 = _interopRequireDefault(_Subhead);

var _Caps = require('./Caps');

var _Caps2 = _interopRequireDefault(_Caps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductLockUp = function ProductLockUp(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Title2.default,
      { mb: 3 },
      props.title,
      props.beta && _react2.default.createElement(
        _Caps2.default,
        { ml: 2, color: 'muted' },
        'Beta'
      )
    ),
    _react2.default.createElement(
      _Subhead2.default,
      null,
      props.description
    )
  );
};

exports.default = ProductLockUp;