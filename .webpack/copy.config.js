const CopyPlugin = require("copy-webpack-plugin");

const _rootdir = __dirname + "/..";

module.exports = [
	{
		entry: _rootdir + `/.webpack/copy.index.js`,
		output: {
			path: _rootdir + "/_extras/releases/latest",
			filename: `_copy.js`
		},
		plugins: [
			new CopyPlugin([
				{
					from: "**/*",
					ignore: [
						".*",
						".*/**",
						"node_modules/**",
						"_extras/**",
						"src/**",
						"types/**",
						"documentation/**",
						"pro/**",
						"inc/test/**",
						"gulpfile*",
						"yarn*",
						"package*",
						"*.config.js",
						"jest*",
						"tsconfig*",
						"inc/test/**"
					]
				}
			])
		]
	}
];
