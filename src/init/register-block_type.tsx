import { Icon } from "utils/Components";
import { getContainerRatio } from "utils/tools";
import {
	block_category,
	block_name,
	block_title,
	block_description
} from "utils/data";
import { Edit } from "Components/Edit/Edit";
import { BlockContainer } from "Components/BlockContainer/BlockContainer";

interface AttributesDefinition extends Record<keyof Attributes, any> {}

wp.blocks.registerBlockType<AttributesDefinition>(block_name, {
	title: block_title,
	icon: () => <Icon icon="logo" />,
	category: block_category,
	description: block_description,
	supports: {
		align: true
	},
	edit: (props: EditProps) => (
		<div className={props.className}>
			<Edit {...props} />
		</div>
	),
	save: (props: SaveProps) => {
		const { images, cover, fixed_dimension } = props.attributes;
		const container_ratio = getContainerRatio(images, cover, fixed_dimension);

		if (!images) {
			return null;
		}

		return (
			<div>
				<BlockContainer {...props} container_ratio={container_ratio} />
			</div>
		);
	},
	attributes: {
		id: { type: "string" },
		slider_dot_color: { type: "string", default: "#000" },
		images_id: {
			type: "array",
			default: []
		},
		// @ts-ignore
		images: {
			type: "array",
			default: [],
			source: "query",
			selector: ".mbi-figure",
			query: {
				url: {
					source: "attribute",
					selector: "img",
					attribute: "src"
				},
				link: {
					source: "attribute",
					selector: "img",
					attribute: "data-link"
				},
				alt: {
					source: "attribute",
					selector: "img",
					attribute: "alt",
					default: ""
				},
				id: {
					source: "attribute",
					selector: "img",
					attribute: "data-id"
				},
				caption: {
					type: "string",
					source: "html",
					selector: "figcaption"
				},
				ratio: {
					source: "attribute",
					selector: "img",
					attribute: "data-ratio"
				},
				srcset: {
					source: "attribute",
					selector: "img",
					attribute: "srcset"
				}
			}
		},
		responsive: {
			type: "boolean",
			default: true
		},
		separation: {
			type: "number",
			default: 5
		},
		layout: {
			type: "string",
			default: "horizontal"
		},
		fixed_dimension: {
			type: "string",
			default: "height"
		},
		cover: {
			type: "boolean",
			default: false
		},
		cover_ratio: {
			type: "number",
			default: 1
		}
	}
});
