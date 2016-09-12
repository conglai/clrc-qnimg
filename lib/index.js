'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dConfig = {
  mode: 0,
  none: '',
  scale: 1,
  format: '',
  className: 'clrc-qnimg',
  useClass: false,
  pre: ''
};
function mergeConfig(config) {
  var nc = {};
  var dKeys = (0, _keys2.default)(_dConfig);
  var nKeys = (0, _keys2.default)(config);
  dKeys.forEach(function (key) {
    nc[key] = _dConfig[key];
  });
  nKeys.forEach(function (key) {
    nc[key] = config[key];
  });
  return nc;
}

var QNImage = function (_Component) {
  (0, _inherits3.default)(QNImage, _Component);

  function QNImage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, QNImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = QNImage.__proto__ || (0, _getPrototypeOf2.default)(QNImage)).call.apply(_ref, [this].concat(args))), _this), _this.loadPic = function () {
      if (_this._loading) return;
      var config = _this.props.config;

      var propSrc = QNImage.getPathOfQiniu(config);
      var img = new Image();
      img.onload = function () {
        _this._loaded = true;
        _this._loading = false;
        _this.setState({
          stateSrc: propSrc
        });
      };
      _this._loading = true;
      img.src = propSrc;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(QNImage, [{
    key: 'hasLoaded',
    value: function hasLoaded() {
      return !!this._loaded;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var config = _props.config;
      var lazy = _props.lazy;

      var _ref2 = this.state || {};

      var stateSrc = _ref2.stateSrc;

      var newStyle = {};
      if (!stateSrc && !lazy) {
        this.loadPic();
      } else if (stateSrc) {
        newStyle.backgroundImage = 'url(\'' + stateSrc + '\')';
      }
      if (!config.useClass) {
        newStyle.display = 'inline-block';
      }
      newStyle.backgroundSize = 'cover';
      newStyle.width = config.w;
      newStyle.height = config.h;

      return React.createElement('span', { style: newStyle, className: config.className });
    }
  }], [{
    key: 'setDefaultConfig',
    value: function setDefaultConfig(dConfig) {
      var keys = (0, _keys2.default)(dConfig);
      keys.forEach(function (key) {
        _dConfig[key] = dConfig[key];
      });
      if (dConfig.className) {
        _dConfig.useClass = true;
      }
    }
  }, {
    key: 'getPathOfQiniu',
    value: function getPathOfQiniu(config) {
      var newConfig = mergeConfig(config);
      var mode = newConfig.mode;
      var format = newConfig.format;
      var w = newConfig.w;
      var h = newConfig.h;
      var scale = newConfig.scale;
      var src = newConfig.src;
      var name = newConfig.name;
      var pre = newConfig.pre;

      var size = '';
      if (w) {
        var wStr = Math.floor(w * scale);
        size += '/w/' + wStr;
      }
      if (h) {
        var hStr = Math.floor(h * scale);
        size += '/h/' + hStr;
      }
      if (format) {
        size += '/format/' + format;
      }
      src = src || pre + name;
      return src + '?imageView2/' + mode + size;
    }
  }]);
  return QNImage;
}(_react.Component);

QNImage.displayName = 'QNImage';
QNImage.propTypes = {
  config: _react.PropTypes.object.isRequired,
  lazy: _react.PropTypes.bool.isRequired
};
QNImage.defaultProps = {
  config: {},
  lazy: false
};
exports.default = QNImage;