import { Component, PropTypes } from 'react';

let _dConfig = {
  mode: 0,
  none: '',
  scale: 1,
  format: '',
  className: 'clrc-qnimg',
  useClass: false,
  pre: ''
};
function mergeConfig(config) {
  let nc = {};
  let dKeys = Object.keys(_dConfig);
  let nKeys = Object.keys(config);
  dKeys.forEach(key => {
    nc[key] = _dConfig[key];
  });
  nKeys.forEach(key => {
    nc[key] = config[key];
  });
  return nc;
}
export default class QNImage extends Component{
  static displayName = 'QNImage';

  static setDefaultConfig(dConfig) {
    let keys = Object.keys(dConfig);
    keys.forEach(key => {
      _dConfig[key] = dConfig[key];
    });
    if(dConfig.className) {
      _dConfig.useClass = true;
    }
  }

  static getPathOfQiniu(config) {
    let newConfig = mergeConfig(config);
    let { mode, format, w, h, scale, src, name, pre } = newConfig;
    let size = '';
    if(w) {
      let wStr = Math.floor(w * scale);
      size += '/w/' + wStr;
    }
    if(h) {
      let hStr = Math.floor(h * scale);
      size += '/h/' + hStr;
    }
    if(format) {
      size += '/format/' + format;
    }
    src = src || pre + name;
    return `${src}?imageView2/${mode}${size}`;
  }

  static propTypes = {
    config: PropTypes.object.isRequired,
    lazy: PropTypes.bool.isRequired
  };
  static defaultProps = {
    config: {},
    lazy: false,
  };

  hasLoaded() {
    return !!this._loaded;
  }

  loadPic = config => {
    if(this._loading) return;
    config = config || this.props.config;
    this._config = config;
    let propSrc = QNImage.getPathOfQiniu(config);
    let img = new Image();
    img.onload = () => {
      this._loaded = true;
      this._loading = false;
      this.setState({
        stateSrc: propSrc
      });
    };
    this._loading = true;
    img.src = propSrc;
  };

  render() {
    let { config, lazy } = this.props;
    config = this._config || config;
    let { stateSrc } = this.state || {};
    let newStyle = {};
    if(!stateSrc && !lazy) {
      this.loadPic();
    } else if(stateSrc) {
      newStyle.backgroundImage = `url('${stateSrc}')`;
    }
    if(!config.useClass) {
      newStyle.display = 'inline-block';
    }
    newStyle.backgroundSize = 'cover';
    newStyle.width = config.w;
    newStyle.height = config.h;

    return <span style={newStyle} className={config.className}/>;
  }
}
