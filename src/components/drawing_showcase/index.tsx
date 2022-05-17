import React from "react";
import ImageGallery from 'react-image-gallery';

const DrawingShowcase = () => {
    const Images = [
        {
            original: 'assets/img/station.png',
            loading: 'lazy',
            thumbnailTitle: 'Current Profile Picture',
            description: 'Current PFP on revolt.chat',
            originalWidth: 500,
            originalHeight: 500
        },
        {
            original: 'assets/img/no_thoughts_head_empty.png',
            loading: 'lazy',
            thumbnailTitle: 'No thoughts, Head Empty',
            description: 'Furry meme for the lols, also made because I wanted to try out coloring with a set of 20 colors',
            originalWidth: 500,
            originalHeight: 500
        }
    ]
    
    return (
        <>
            <ImageGallery items={Images}
            lazyLoad
            showPlayButton={false}
            showFullscreenButton={false}
            slideDuration={500}
            />
        </>
    );
}

export default DrawingShowcase;