//# 命名经验
//局部变量尽量详细
// 1. 会被编译掉不要紧
// 2. 更容易看懂代码
//全局公开的，尽量简单，便于熟记，而且应该有API文档容易查阅
module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'react'
  ],
  'ecmaFeatures': {
    'blockBindings': true,
    'forOf': true,
    'jsx': true,
    'classes': true,
    'modules': true
  },
  'env':{
    'es6': true
  },
  'rules': {
    'semi': 2,
    'quotes': [1, 'single'],//只能使用单引号
    'no-eval': 1,//禁止使用eval
    'no-multi-str': 2,//字符串不能用\换行
    'no-new-func': 1,//禁止使用new Function
    'no-new-object': 2,//禁止使用new Object()
    'no-new-require': 2,//禁止使用new require
    'no-redeclare': 2,//禁止重复声明变量
    'no-unreachable': 2,//不能有无法执行的代码
    'no-with': 2,//禁用with
    'default-case': 2,//switch语句最后必须有default
    'eqeqeq': 2,//必须使用全等
    'require-yield': 0,//生成器函数必须有yield
    'indent':  [2, 2, {'SwitchCase': 1}],//缩进风格
    'no-alert': 0,//禁止使用alert confirm prompt
    'camelcase': [2, { 'properties': 'never' }]
  }
};
