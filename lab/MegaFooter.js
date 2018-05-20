'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _NavLink = require('./NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _InputDark = require('./InputDark');

var _InputDark2 = _interopRequireDefault(_InputDark);

var _FormButton = require('./FormButton');

var _FormButton2 = _interopRequireDefault(_FormButton);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MegaFooter = function MegaFooter(props) {
  return _react2.default.createElement(
    'footer',
    null,
    _react2.default.createElement(
      _Box2.default,
      { bg: 'black', color: 'white' },
      _react2.default.createElement(
        _Container2.default,
        { py: 4 },
        _react2.default.createElement(
          _Flex2.default,
          { align: 'flex-end', mx: -3, wrap: true },
          _react2.default.createElement(
            _Box2.default,
            { px: 3, py: 3, width: [0.5, 0.5, 0.25] },
            _react2.default.createElement(
              _Box2.default,
              null,
              _react2.default.createElement(
                _NavLink2.default,
                { href: 'https://compositor.io/' },
                'Compositor'
              )
            ),
            _react2.default.createElement(
              _Box2.default,
              null,
              _react2.default.createElement(
                _NavLink2.default,
                { href: 'https://compositor.io/lab/' },
                'Lab'
              )
            ),
            _react2.default.createElement(
              _Box2.default,
              null,
              _react2.default.createElement(
                _NavLink2.default,
                { href: 'https://compositor.io/iso/' },
                'Iso'
              )
            )
          ),
          _react2.default.createElement(
            _Box2.default,
            { px: 3, py: 3, width: [0.5, 0.5, 0.25] },
            _react2.default.createElement(
              _Box2.default,
              null,
              _react2.default.createElement(
                _NavLink2.default,
                { href: 'https://compositor.io/blog/' },
                'Blog'
              )
            ),
            _react2.default.createElement(
              _Box2.default,
              null,
              _react2.default.createElement(
                _NavLink2.default,
                { href: 'https://github.com/c8r/lab-cli/' },
                'lab-cli'
              )
            )
          ),
          _react2.default.createElement(
            _Box2.default,
            { ml: 'auto', px: 3, py: 3, width: [1, 0.5, 0.5, 0.25] },
            _react2.default.createElement(
              _Flex2.default,
              null,
              _react2.default.createElement(_Box2.default, { mx: 'auto' }),
              _react2.default.createElement(
                _NavLink2.default,
                { href: 'https://twitter.com/getcompositor/', mr: 3 },
                _react2.default.createElement(_Image2.default, { src: 'https://icon.now.sh/twitter/fff' })
              ),
              _react2.default.createElement(
                _NavLink2.default,
                { href: 'https://github.com/c8r/' },
                _react2.default.createElement(_Image2.default, { src: 'https://icon.now.sh/github/fff' })
              )
            ),
            _react2.default.createElement(
              'form',
              {
                action: 'https://compositor.us1.list-manage.com/subscribe/post?u=80f1aa1145b57607ff718c03d&id=042073b294',
                method: 'post'
              },
              _react2.default.createElement(
                _Label2.default,
                null,
                'Email Address'
              ),
              _react2.default.createElement(
                _Flex2.default,
                null,
                _react2.default.createElement(_InputDark2.default, { mr: 1, name: 'EMAIL' }),
                _react2.default.createElement(
                  _FormButton2.default,
                  { px: 2, bg: 'white', color: 'black' },
                  'Sign Up'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Flex2.default,
          { align: 'baseline', py: 3, wrap: true },
          _react2.default.createElement(
            _Link2.default,
            { href: 'mailto:support@compositor.io',
              f: 0,
              mr: 3,
              mb: 3,
              color: 'white' },
            'support@compositor.io'
          ),
          _react2.default.createElement(_Box2.default, { mx: 'auto' }),
          _react2.default.createElement(
            _Text2.default,
            { fontSize: 0, mr: 3 },
            '\xA9 2017 Compositor, Inc.'
          ),
          _react2.default.createElement(
            _Link2.default,
            { color: 'white', f: 0, href: '/terms', mr: 3 },
            'Terms'
          ),
          _react2.default.createElement(
            _Link2.default,
            { color: 'white', f: 0, href: '/privacy' },
            'Privacy Policy'
          )
        )
      )
    )
  );
};

exports.default = MegaFooter;