const package = require("../package.json");

const _rootdir = __dirname + "/..";
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
} = package.wp;

const getReplace = (search, replace) => ({
	loader: "string-replace-loader",
	options: {
		search: search,
		replace: replace,
		flags: "g"
	}
});

module.exports = [
	{
		entry: _rootdir + `/.webpack/replace.index.js`,
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
						getReplace("_PLUGIN_NAME_", plugin_name),
						getReplace("_PLUGIN_URI_", plugin_uri),
						getReplace("_PLUGIN_DESCRIPTION_", plugin_description),
						getReplace("_PLUGIN_AUTHOR_", plugin_author),
						getReplace("_PLUGIN_VERSION_", plugin_version)
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
						getReplace("_PLUGIN_NAME_", plugin_name),
						getReplace("_PLUGIN_AUTHOR_", plugin_author),
						getReplace("_PLUGIN_TAGS_", plugin_tags),
						getReplace("_PLUGIN_REQUIRES_AT_LEAST_", plugin_requires_at_least),
						getReplace("_PLUGIN_TESTED_UP_TO_", plugin_tested_up_to),
						getReplace("_PLUGIN_VERSION_", plugin_version),
						getReplace("_PLUGIN_PHP_VERSION_", plugin_php_version),
						getReplace("_PLUGIN_DESCRIPTION_", plugin_description)
					]
				}
			]
		}
	}
];
