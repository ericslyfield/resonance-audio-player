import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';

import { getBlobByURL, isBlobURL } from '@wordpress/blob';

import WaveSurfer from 'wavesurfer.js';

import { useEffect } from '@wordpress/element';

import { 
	Button,
	AudioPlayer,
	FormFileUpload,
	TextControl
} from '@wordpress/components';

import { 
	RichText,
	BlockControls,
	InspectorControls,
	MediaUpload,
	MediaPlaceholder,
	MediaUploadCheck,
	useBlockProps
} from '@wordpress/block-editor';

// The Edit Function

export default function edit ( 

	{attributes: 
		{
			caption,
			id, 
			src, 
			loop, 
			autoplay, 
			preload
		}, setAttributes
	} ) {

	const ALLOWED_MEDIA_TYPES = [ 'audio' ];

	// Event Change Handlers

	// Select Audio Handler

	function showWaveForm( newSrc ){
		setAttributes ({src: newSrc})
	}

	const onSelectAudio = ( waveform ) => {
		if ( ! waveform || ! waveform.url ) {
			// In this case there was an error and we should continue in the editing state
			// previous attributes should be removed because they may be temporary blob urls.
			setAttributes( {
				src: undefined,
				id: undefined,
				caption: undefined,
			} );
			return;
		}
		// Sets the block's attribute and updates the edit component from the
		// selected media, then switches off the editing UI.
		setAttributes( {
			src: waveform.url,
			id: waveform.id,
			caption: waveform.caption,
		} );

		console.log(waveform.url)
	}



	// Caption Event Handler

	const onChangeCaption = (newCaption) => {
		setAttributes({ caption: newCaption });
		console.log(newCaption)
	}
	// const onChangeId = (value) => {
	// 	properties.setAttributes({ caption: newId});
	// }

	// const onChangeUrl = (media) => {
	// 	properties.setAttributes({ 
	// 		src: newSrc,
	// 		mediaURL: media.url,
	// 		mediaID: media.id
	// 	});
	// }

	return (
		<figure { ...useBlockProps() }>
			<MediaPlaceholder
				accept='audio/*'
				labels = { { 
					title: 'Resonance Audio Player', 
					instructions: 'Upload an audio file from your media library. You can also drag audio files into this block...' 
				} }
				allowedTypes = { [ 'audio' ] }
				icon = { 'controls-volumeon' }
				multiple = { false }
				mediaPreview={ true }
				onSelect = { onSelectAudio }			
			/>

			<br/>

			<RichText
				tagName='figcaption'
				placeholder={__( 'This is your caption...', 'Resonance')}
				value={ caption }
				className="waveform-caption"
				onChange={ onChangeCaption }
			/>

			<InspectorControls>
				<TextControl 
					className='resnance-caption-control__input'
					label={"Caption"}
					value={ caption }
					onChange={ onChangeCaption }
				/>
			</InspectorControls>

			<br/>

		</figure>
	);
}