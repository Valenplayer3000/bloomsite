import React from 'react';
import ImageGallery from 'react-image-gallery';

const DrawingShowcase = () => {
  // This Image Gallery could be a little bit more performant if it wasn't a goddamm lib
  // Why did I install it instead of making my own

  const Images = [
    {
      original: "assets/img/station.png",
      loading: "lazy",
      thumbnailTitle: "Current Profile Picture",
      description: "Current PFP on revolt.chat",
      originalWidth: 500,
      originalHeight: 500,
    },
    {
      original: "assets/img/no_thoughts_head_empty.png",
      loading: "lazy",
      thumbnailTitle: "No thoughts, Head Empty",
      description:
        "Furry meme for the lols, also made because I wanted to try out coloring with a set of 20 colors",
      originalWidth: 500,
      originalHeight: 500,
    },
    {
      original: "assets/img/banner(again).png",
      loading: "lazy",
      thumbnailTitle: "Miruku.cafe Banner",
      description: "haha female station go brrr",
      originalWidth: 500,
      originalHeight: 500,
    },
    {
      original: "assets/img/toaster.png",
      loading: "lazy",
      thumbnailTitle: "Toaster",
      description: "Protogen = Toaster, Can't change my mind",
      originalWidth: 500,
      originalHeight: 500,
    },
  ];

  return (
    <>
      <ImageGallery
        items={Images}
        lazyLoad
        showPlayButton={false}
        showFullscreenButton={false}
        slideDuration={500}
      />
    </>
  );
};

export default DrawingShowcase;
