import gulp from "gulp";
import zip from "gulp-zip";
import header from "gulp-header";
import rename from "gulp-rename";
import replace from "gulp-replace";
import run from "gulp-run-command";
import fs from "fs";
import merge2 from "merge2";
import pkg from "./package.json";

const { name, version } = pkg;
const npm_run_command = task_name =>
	`parcel build src/index-${task_name}.ts -o ${name}-${task_name}.min.js -d build --no-source-maps`;

gulp.task(
	"build_production_script",
	run([npm_run_command("front"), npm_run_command("editor")])
);
gulp.task("change_version_number", () => {
	const main_php = gulp
		.src(`${name}.php`)
		.pipe(replace(/( \* Version: )\d+\.\d+\.\d+/g, "$1" + version))
		.pipe(replace(/(define.*?PLUGIN_VERSION.*?)\d+\.\d+\.\d+/g, "$1" + version))
		.pipe(gulp.dest("."));

	const readme_txt = gulp
		.src("readme.txt")
		.pipe(replace(/(Stable tag: )\d+\.\d+\.\d+/g, "$1" + version))
		.pipe(gulp.dest("."));

	return merge2(main_php, readme_txt);
});
gulp.task("create_zip_file", () => {
	const js_with_header = gulp
		.src([`build/${name}-editor.min.js`], { base: "../" })
		.pipe(
			header(fs.readFileSync("./src/js/#header", "utf8"), {
				pkg
			})
		);

	const css_with_header = gulp
		.src([`build/${name}-editor.min.css`, `build/${name}-front.min.css`], {
			base: "../"
		})
		.pipe(
			header(fs.readFileSync("./src/css/#header", "utf8"), {
				pkg
			})
		);

	const renamed_js_css = merge2(js_with_header, css_with_header).pipe(
		rename(path => {
			path.basename = path.basename.replace(".min", "");
		})
	);

	return merge2(
		renamed_js_css,
		gulp.src(
			[
				"**",
				"!.*",
				"!.*/**",

				"!node_modules/**",
				"!_extras/**",
				"!build/**",
				"!src/**",
				"!types/**",

				"!gulpfile*",
				"!yarn*",
				"!package*",
				"!*.config.js",
				"!jest*",
				"!tsconfig*"
			],
			{ base: "../" }
		)
	)
		.pipe(zip(`${name}-${version}.zip`))
		.pipe(gulp.dest("_extras/releases"));
});
gulp.task(
	"release",
	gulp.series(
		"build_production_script",
		"change_version_number",
		"create_zip_file"
	)
);
