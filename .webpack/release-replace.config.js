const pkg = require("../package.json");

const _rootdir = __dirname + "/..";
const { version } = pkg;

const getReplace = (search, replace) => ({
	loader: "string-replace-loader",
	options: {
		search: search,
		replace: replace,
		flags: "gm"
	}
});

module.exports = [
	{
		entry: _rootdir + `/.webpack/release-replace.index.js`,
		output: {
			path: `${_rootdir}/_extras/release`,
			filename: `_replace.js`
		},
		module: {
			rules: [
				{
					test: /melonpan-block-images\.php$/,
					use: [
						{
							loader: "file-loader",
							options: {
								name: "[name].[ext]"
							}
						},
						getReplace(/^( \* Version: )\d+\.\d+\.\d+/.source, "$1" + version)
					]
				},
				{
					test: /README\.txt$/,
					use: [
						{
							loader: "file-loader",
							options: {
								name: "[name].[ext]"
							}
						},
						getReplace(/^(Stable tag: )\d+\.\d+\.\d+/.source, "$1" + version)
					]
				}
			]
		}
	}
];
