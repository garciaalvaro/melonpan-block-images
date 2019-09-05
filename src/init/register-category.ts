import { __ } from "@wordpress/i18n";
import { select, dispatch } from "@wordpress/data";

import { block_category } from "utils/data";

type Category = import("wordpress__blocks/api/categories").Category;

const categories: Category[] = select("core/blocks").getCategories();

// If the categories array exists and "melonpan" hasn't been added yet
if (categories && !categories.find(({ slug }) => slug === block_category)) {
	// Add the new category
	dispatch("core/blocks").setCategories([
		...categories,
		{
			slug: block_category,
			title: __("Melonpan Blocks"),
			icon: null
		}
	]);
}
