// commit规范： <类型>(影响的作用域): <简要描述>
module.exports = {
	// 修改性质
	types: [
		{ value: 'feat', name: 'feat: 新功能' },
		{ value: 'fix', name: 'fix: 修复bug' },
		{ value: 'style', name: 'style: 代码格式（空格、分号等）' },
		{ value: 'docs', name: 'docs: 文档修改' },
		{ value: 'refactor', name: 'refactor: 重构（非feat、非fix）' },
		{ value: 'perf', name: 'perf: 提高性能' },
		{ value: 'ci', name: 'ci: 持续集成的配置文件或脚本的修改' },
		{ value: 'build', name: 'build: 构建工具或外部依赖包的修改' },
		{ value: 'WIP', name: 'WIP: 进行中的工作' },
		{ value: 'revert', name: 'revert: 撤销某次提交' },
		{ value: 'test', name: 'test: 添加缺少的测试' },
		{
			value: 'chore',
			name: 'chore: 对构建过程或辅助工具和库的更改(不影响源文件、测试用例的其他操作)'
		}
	],
	// 修改范围
	scopes: [
		['business', '业务模块'],
		['components', '公共模块'],
		['config', '配置相关'],
		['styles', '样式相关'],
		['utils', 'utils相关'],
		['docs', '文档相关'],
		['others', '其他'],
		['*', '多个模块'],
		// 如果选择 custom,后面会让你再输入一个自定义的 scope
		['custom', '都不是？自定义']
	].map(([value, description]) => {
		return {
			value,
			name: `${value.padEnd(30)} (${description})`
		}
	}),
	// 选择器提示信息
	messages: {
		type: '请选择【修改的性质】:',
		scope: '请选择【修改的范围】:',
		// 选择 scope: custom 时会出下面的提示
		customScope: '请输入自定义的 scope:',
		subject: '请输入简明的【修改的描述】:', // 主题，简短描述。一行
		confirmCommit: '确认提交吗？'
	},
	allowCustomScopes: false,
	allowBreakingChanges: [],
	// Body: 对 subject 的补充。可以多行。Footer: 主要是一些关联 issue 的操作。
	skipQuestions: ['body', 'footer'],
	// 描述的长度限制
	subjectLimit: 100
}
