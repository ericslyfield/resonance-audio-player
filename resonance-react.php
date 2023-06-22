<?php
/**
 * Plugin Name:       Resonance React
 * Description:       An audio block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            NONARCHIVAL
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       resonance-react
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function resonance_waveform_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'resonance_waveform_block_init' );

function loadWavesurfer() {
    wp_enqueue_script(
        'wavesurfer-js',
        plugins_url( 'wavesurfer.js', __FILE__ )
    );
}
add_action( 'enqueue_block_editor_assets', 'loadWavesurfer' );
