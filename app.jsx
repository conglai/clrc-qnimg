import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import RC from './src/index';
import './index.less';

RC.setDefaultConfig({
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
      <RC ref="obj" lazy={true} config={{
        src: '//cdn.withme.cn/withme.back.u.2f7f440d35a38b7610eba472762c120f.jpg',
        w: 100,
        h: 100,
      }}/>
    </div>;
  }
};

//## init App
function initApp() {
  var container = document.getElementById('J_page');
  ReactDOM.render(
    <APP/>,
    container
  );
}
initApp();

