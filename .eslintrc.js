module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['react', 'react-hooks', '@typescript-eslint/eslint-plugin', 'prettier'],
	// 定义文件继承的子规范
	extends: ['plugin:@typescript-eslint/recommended'],
	settings: {
		// 自动发现React的版本，从而进行规范react代码
		react: {
			pragma: 'react',
			version: 'detect'
		}
	},
	// 指定ESLint可以解析JSX语法
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		// 取消函数参数需要重新赋值给另一个变量才能使用
		'no-param-reassign': [0],
		// 取消 { a, b, c } 多个变量需要换行
		'object-curly-newline': [0],
		// 禁用var，用let和const代替
		'no-var': 2,
		// 开启强制单引号
		quotes: [2, 'single'],
		// 强制全等( === 和 !==)
		eqeqeq: 2,
		// 语句强制分号结尾
		semi: [2, 'never'],
		// 出现未使用的变量
		'@typescript-eslint/no-unused-vars': [0],
		// 箭头函数参数括号
		'arrow-parens': [2, 'always'],
		// 箭头函数，箭头前后空格
		'arrow-spacing': [2, { before: true, after: true }],
		// 对象最后一项逗号
		'comma-dangle': [2, 'never'],
		// 单行代码/字符串最大长度
		'max-len': [2, { code: 100 }],
		indent: 0,
		// jsx缩进2个空格
		// 'react/jsx-indent': [2, 2],
		// 文件末尾不换行
		'eol-last': 0,
		// eslint默认不认可tab
		'no-tabs': 0,
		'@typescript-eslint/no-empty-interface': 0,

		// react配置
		// 强制组件方法顺序
		'react/sort-comp': [2],
		// 结束标签，组件省略闭合标签，html不省略闭合标签
		'react/self-closing-comp': [2, { component: true, html: false }],
		// 检查 Hook 的规则，不允许在if for里面使用
		'react-hooks/rules-of-hooks': [2],
		// 检查 effect 的依赖
		'react-hooks/exhaustive-deps': [2],
		// jsx-index
		// indent: ['error', 2, { ignoredNodes: ['JSXElement'] }],
		'react/jsx-indent': 0,
		'react/self-closing-comp': 0
	}
}
