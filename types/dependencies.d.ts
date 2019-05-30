// Wordpress
declare const wp: {
	apiFetch: typeof import("./academic-bloggers-toolkit-master/wordpress__api-fetch");
	blocks: typeof import("./academic-bloggers-toolkit-master/wordpress__blocks");
	dashicons: typeof import("./academic-bloggers-toolkit-master/wordpress__dashicons");
	domReady: typeof import("./academic-bloggers-toolkit-master/wordpress__dom-ready");
	editPost: typeof import("./academic-bloggers-toolkit-master/wordpress__edit-post");
	element: typeof import("./academic-bloggers-toolkit-master/wordpress__element");
	i18n: typeof import("./academic-bloggers-toolkit-master/wordpress__i18n");
	keycodes: typeof import("./academic-bloggers-toolkit-master/wordpress__keycodes");
	plugins: typeof import("./academic-bloggers-toolkit-master/wordpress__plugins");
	richText: typeof import("./academic-bloggers-toolkit-master/wordpress__rich-text");
	url: typeof import("./academic-bloggers-toolkit-master/wordpress__url");
	hooks: Object;
	data: Object;
	components: Object;
	editor: Object;
	compose: Object;
	blockEditor: Object;
	parse: (arg: string) => Object[];
};

// Lodash
declare const lodash: typeof import("lodash");
