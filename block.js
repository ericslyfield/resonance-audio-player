( function ( blocks, element, blockEditor ) {
    
    var BlockControls = blockEditor.BlockControls;
    var AlignmentControl = blockEditor.AlignmentControl;
    var blockElement = element.createElement;
    var RichText = blockEditor.RichText;

    blocks.registerBlockType( 'resonance-audio-player/waveform', {

        edit: function (properties) {

            var blockProps = blockEditor.useBlockProps();
            
            function onChangeContent(newContent){
                properties.setAttributes({ content: newContent })
                console.log(properties.attributes.content);
            }

            return blockElement(
                'div',
                blockProps,
                blockElement(
                    BlockControls,
                    {},
                    blockElement(
                        AlignmentControl,
                        {
                            onChange: onChangeContent
                        }
                    )
                ),
                blockElement(
                    RichText,
                    {
                        tagName: 'p',
                        value: properties.attributes.content,
                        onChange: onChangeContent
                    }
                )
                
            )
        },

        save: function (properties) {

            var blockProps = blockEditor.useBlockProps.save();

            return blockElement(

                    RichText.Content,
                    Object.assign(
                      blockProps, 
                        {
                            tagName: 'p',
                            value: properties.attributes.content
                        }  
                    )
                    
            );
        },
});

} )( window.wp.blocks, window.wp.element, window.wp.blockEditor );