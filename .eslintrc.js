const commonRules = {
	// 缩进：使用tab 缩进
	indent: ['error', 'tab', { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
	// 换行：unix （\n for LF)  windows (\r\n for CRLF), 默认unix, 此配置允许windows开发环境
	'linebreak-style': [0, 'error', 'windows'],
	// 引号：优先单引号，允许模板字符串，允许嵌套
	quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
	// 分号：省略分号
	semi: ['error', 'never'],
	// 分号空格：需要后空格
	'semi-spacing': ['error', { before: false, after: true }],
	// 逗号空格：需要后空格(或换行)
	'comma-spacing': ['error', { before: false, after: true }],
	// 键值对冒号空格：需要后空格，至少一个空格允许多空格对齐
	'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'minimum' }],
	// 大括号空格：需要
	'object-curly-spacing': ['error', 'always'],
	// 箭头函数箭头空格：需要前后空格
	'arrow-spacing': ['error', { before: true, after: true }],
	// 块语句前空格：需要（如if、for、function、try...catch...、...）
	'space-before-blocks': ['error', 'always'],
	// 强类型比较：使用`===`和`!==`比较，避免隐式类型转换判断错误
	eqeqeq: ['error', 'always'],
	// 禁用eval函数：避免产生注入安全问题
	'no-eval': 'error',
	// 对象成员引用点号'.'与属性名在一行，提高可阅读性
	'dot-location': ['error', 'property'],
	// switch语句需要default：避免异常逻辑 （ 特殊情况无default添加注释 // No Default）
	'default-case': 'error',
	// 禁用隐式类型转换('~', '!!', '+' , '*')：提高代码可读性
	'no-implicit-coercion': 'error',
	// 禁止条件判断赋值操作：防止判断错误
	'no-cond-assign': 'error',
	// 操作符空格：需要前后空格
	'space-infix-ops': ['error', { int32Hint: false }],
	// 函数声明空格：函数名后无空格
	'space-before-function-paren': [
		'error',
		{
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		},
	],
	// 关键字空格：关键字前后留空格
	'keyword-spacing': ['error', { before: true, after: true }],
	// 文件新行结尾：需要
	'eol-last': ['error', 'always'],
}

const reactJSXRules = {
	// propsTypes声明：关闭
	'react/prop-types': ['off'],
	// 标签空格：结束标签`/`无前空格，自闭标签`/`需要前空格、标签开始`<`无后空格、标签结束`>`前空格不限制
	'react/jsx-tag-spacing': [
		'error',
		{
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
			beforeClosing: 'allow',
		},
	],
	// 多行jsx包裹：强制`()`包裹并换行（jsx变量声明、赋值、函数return、箭头函数return、条件判断、逻辑判断、prop传递）
	'react/jsx-wrap-multilines': [
		'error',
		{
			declaration: 'parens-new-line',
			assignment: 'parens-new-line',
			return: 'parens-new-line',
			arrow: 'parens-new-line',
			condition: 'ignore',
			logical: 'ignore',
			prop: 'ignore',
		},
	],
	// jsx大括号空格：无空格，允许子空格
	'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
	// jsx标签结束位置：与行对齐
	'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
	'react/display-name': ['off'],
}

// eslint-disable-next-line no-undef
module.exports = {
	parser: '@babel/eslint-parser',
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	plugins: ['react'],
	globals: {
		DEV: 'readonly',
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		requireConfigFile: false,
		sourceType: 'module',
	},
	rules: {
		...commonRules,
		...reactJSXRules,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
