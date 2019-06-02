const package = require("../package.json");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BannerPlugin = require("webpack").BannerPlugin;
const nib = require("nib");

const _rootdir = __dirname + "/..";
const { wp, name } = package;
const {
	plugin_name,
	plugin_uri,
	plugin_description,
	plugin_author,
	plugin_version,
	plugin_tested_up_to,
	plugin_requires_at_least,
	plugin_php_version,
	plugin_tags
} = wp;

module.exports = [
	{
		entry: `./src/css/index-front.styl`,
		output: {
			path: _rootdir + "/build",
			filename: `${name}-front.js`
		},
		module: {
			rules: [
				{
					test: /\.(css|styl)$/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						{
							loader: "stylus-loader",
							options: {
								use: [nib()],
								import: ["~nib/index.styl"]
							}
						}
					]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: `${name}-front.css`
			}),
			new BannerPlugin({
				banner: `${plugin_name} | ${plugin_version} | ${plugin_uri}`,
				include: new RegExp(/.*?\.css/)
			})
		],
		optimization: {
			minimizer: [new OptimizeCSSAssetsPlugin({})]
		}
	}
];
