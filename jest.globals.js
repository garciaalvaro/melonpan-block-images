import "./jest.matchMedia.mock";
import React from "react";
import ReactDOM from "react-dom";
import lodash from "lodash";
import * as i18n from "@wordpress/i18n";
import * as element from "@wordpress/element";
import { parse } from "@wordpress/block-serialization-default-parser";
import * as components from "@wordpress/components";
import * as editor from "@wordpress/editor";
import * as compose from "@wordpress/compose";
import * as hooks from "@wordpress/hooks";
import * as blocks from "@wordpress/blocks";

global.React = React;
global.ReactDOM = ReactDOM;
global.lodash = lodash;
global.wp = {
	i18n,
	element,
	components,
	editor,
	compose,
	parse,
	hooks,
	blocks
};
