<?php
/**
 * Plugin Name: Resonance Waveform Block
 */

function resonance_waveform_register_block() {
    register_block_type( __DIR__ );
}

add_action( 'init', 'resonance_waveform_register_block' );