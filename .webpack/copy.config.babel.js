const { name } = require("../package.json");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = [
	{
		entry: __dirname + "/copy.entry.js",
		output: {
			path: __dirname + "/../_extras/release",
			filename: "_temp.js"
		},
		plugins: [
			new CopyPlugin([
				{
					from: "**/*",
					ignore: [
						".*",
						".*/**",
						"_extras/**",
						"_temp.js",
						"assets-repo/**",
						`build/${name}-front.js`,
						"node_modules/**",
						"package.json",
						"package-lock.json",
						"pro/**",
						"README.md",
						"src/**",
						"tsconfig.json",
						"types.d.ts"
					]
				}
			])
		]
	}
];
