<?php
/**
 * Plugin Name: Resonance Audio Player [!?]
 */

function resonance_waveform_register_block() {
    register_block_type( __DIR__ );
}

add_action( 'init', 'resonance_waveform_register_block' );