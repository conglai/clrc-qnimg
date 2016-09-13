# 从来React组件：七牛图片 [![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url]
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/clrc-qnimg
[npm-version-image]: http://img.shields.io/npm/v/clrc-qnimg.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/clrc-qnimg.svg?style=flat

## 安装
```
npm i clrc-qnimg
```

## 案例
```
QNImg.setDefaultConfig({
  pre: '//cdn.withme.cn/',
  mode: 0,
  className: 'ssss-img',
  scale: 2
});
class APP extends Component {
  componentDidMount() {
    window._load = () => {
      this.refs.obj.loadPic();
    };
  }
  render() {
    return <div>
      <h1>从来前端组件测试：</h1>
      <QNImg ref="obj" lazy={true} config={{
        src: '//cdn.withme.cn/withme.back.u.2f7f440d35a38b7610eba472762c120f.jpg',
        w: 100,
        h: 100,
      }}/>
    </div>;
  }
};

```
