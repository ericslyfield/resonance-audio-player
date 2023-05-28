( function ( blocks, element, blockEditor ) {
    
    var BlockControls = blockEditor.BlockControls;
    var InspectorControls = blockEditor.InspectorControls;
    var AlignmentControl = blockEditor.AlignmentControl;
    var element = element.createElement;
    var RichText = blockEditor.RichText;

    blocks.registerBlockType( 'resonance-audio-player/waveform', {

        edit: function (properties) {

            var blockProps = blockEditor.useBlockProps();
            
            function onChangeContent(newContent){
                properties.setAttributes({ content: newContent })
                console.log(properties.attributes.content);
            }

            function onChangeAlignment(newAlignment){
                properties.setAttributes({ alignment: newAlignment === undefined ? 'none' : newAlignment });
            }

            // Root Element
            return element(
                'div',
                blockProps,
                element(
                    BlockControls,
                    {},
                    element(
                        AlignmentControl,
                        {
                            value: properties.attributes.alignment,
                            onChange: onChangeAlignment
                        }
                    )
                ),
                element(
                    RichText,
                    {
                        tagName: 'p',
                        style: {
                            textAlign: properties.attributes.alignment
                        },
                        value: properties.attributes.content,
                        onChange: onChangeContent
                    }
                )
                
            )
        },

        save: function (properties) {

            var blockProps = blockEditor.useBlockProps.save();

            return element(

                    RichText.Content,
                    Object.assign(
                      blockProps, 
                        {
                            tagName: 'p',
                            style: {
                                textAlign: properties.attributes.alignment
                            },
                            value: properties.attributes.content
                        }  
                    )
                    
            );
        },
});

} )( window.wp.blocks, window.wp.element, window.wp.blockEditor );