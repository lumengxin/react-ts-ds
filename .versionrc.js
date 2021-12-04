module.exports = {
	skip: {
		bump: true,
		changelog: false,
		commit: true,
		tag: true
	},
	// types为Conventional Commits标准中定义，目前支持
	// https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
	types: [
		{ type: 'feat', section: ' 🍓 feat: 新功能' },
		{ type: 'fix', section: ' 🐛 fix: 修复bug' },
		{ type: 'style', section: ' 👨🏻‍💻 style: 代码格式（空格、分号等）' },
		{ type: 'docs', section: ' 📦 docs: 文档修改' },
		{ type: 'refactor', section: ' 🏗 refactor: 重构（非feat、非fix）' },
		{ type: 'perf', section: ' 🧪 perf: 提高性能' },
		{ type: 'ci', section: ' 👀 ci: 持续集成的配置文件或脚本的修改' },
		{ type: 'build', section: ' 🏓 build: 构建工具或外部依赖包的修改' },
		{ type: 'WIP', section: ' 👨🏻‍🚀 WIP: 进行中的工作' },
		{ type: 'revert', section: ' 🌚 revert: 撤销某次提交' },
		{ type: 'test', section: ' 🦄 test: 添加缺少的测试' },
		{
			type: 'chore',
			section: ' 🐢 chore: 对构建过程或辅助工具和库的更改(不影响源文件、测试用例的其他操作)'
		}
	]
	// 需要server-version更新版本号的文件
	// bumpFiles: [
	// 	{
	// 		filename: 'package.json',
	// 		// The `json` updater assumes the version is available under a `version` key in the provided JSON document.
	// 		type: 'json',
	// 	},
	// ],
}
