const pkg = require("../package.json");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BannerPlugin = require("webpack").BannerPlugin;
const nib = require("nib");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const _rootdir = __dirname + "/..";
const { name, version, plugin_name, plugin_uri } = pkg;

module.exports = [
	{
		entry: [`./src/js/index-editor.ts`, `./src/css/index-editor.styl`],

		output: {
			path: _rootdir + "/build",
			filename: `${name}-editor.js`
		},
		resolve: {
			alias: {
				utils: _rootdir + "/src/js/utils"
			}
		},
		externals: {
			react: "react",
			"react-dom": "reactDOM"
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader",
					resolve: {
						extensions: [".tsx", ".ts", ".js", ".jsx"]
					}
				},
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
				filename: `${name}-editor.css`
			}),
			new BannerPlugin({
				banner: () => {
					const banner = [
						`/*! ${plugin_name} | ${version} | ${plugin_uri} */`,
						`/*! TinyColor | https://github.com/bgrins/TinyColor | 2016-07-07, Brian Grinstead | MIT License */`
					];
					return banner.join("");
				},
				raw: true,
				include: new RegExp(/.*?\.js/)
			}),
			new BannerPlugin({
				banner: `${plugin_name} | ${version} | ${plugin_uri}`,
				include: new RegExp(/.*?\.css/)
			})
		],
		optimization: {
			minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
		}
	}
];
