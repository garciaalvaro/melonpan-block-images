import { Icon } from "utils/components";
import {
	block_category,
	plugin_namespace,
	plugin_title,
	plugin_description
} from "utils/data/plugin";
import { Edit } from "Components/Edit/Edit";
import { Container } from "Components/Content/Container";

wp.blocks.registerBlockType<AttributesDefinition>(
	`${plugin_namespace}/images`,
	{
		title: plugin_title,
		icon: () => <Icon icon="logo" />,
		category: block_category,
		description: plugin_description,
		supports: {
			align: true
		},
		edit: (props: BlockPropsWithSetAttributes) => (
			<div className={props.className}>
				<Edit {...props} />
			</div>
		),
		save: (props: BlockProps) => {
			const { images } = props.attributes;

			if (!images) {
				return null;
			}

			return (
				<div>
					<Container {...props} />
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
	}
);
