<?php
/**
 * Plugin Name: _PLUGIN_NAME_
 * Plugin URI: _PLUGIN_URI_
 * Description: _PLUGIN_DESCRIPTION_
 * Author: _PLUGIN_AUTHOR_
 * Version: _PLUGIN_VERSION_
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace MELONPANBLOCKIMAGES;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! defined( __NAMESPACE__ . '\PLUGIN_VERSION' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_VERSION', '_PLUGIN_VERSION_' );
}
if ( ! defined( __NAMESPACE__ . '\PLUGIN_NAME' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_NAME', 'melonpan-block-images' );
}
if ( ! defined( __NAMESPACE__ . '\BUILD_DIR' ) ) {
	define( __NAMESPACE__ . '\BUILD_DIR', plugins_url( 'build/', __FILE__ ) );
}

/**
 * Enqueue the plugin style in the front page.
 *
 * @since 1.0.0
 */
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_front' );
function enqueue_front() {

	wp_enqueue_style(
		PLUGIN_NAME . '-front',
		BUILD_DIR . PLUGIN_NAME . '-front.css',
		array(),
		PLUGIN_VERSION
	);
}

/**
 * Enqueue the plugin styles and scripts in the editor.
 *
 * @since 1.0.0
 */
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_editor', 900 );
function enqueue_editor() {

	wp_enqueue_style(
		PLUGIN_NAME . '-editor',
		BUILD_DIR . PLUGIN_NAME . '-editor.css',
		array(),
		PLUGIN_VERSION
	);

	wp_enqueue_script(
		PLUGIN_NAME . '-editor',
		BUILD_DIR . PLUGIN_NAME . '-editor.js',
		array(
			'lodash',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-hooks',
		),
		PLUGIN_VERSION,
		true // Enqueue in the footer.
	);
}
