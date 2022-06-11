import React from 'react';
import Image from 'next/image';

const DrawingShowcase = () => {
  // This Image Gallery could be a little bit more performant if it wasn't a goddamm lib
  // Why did I install it instead of making my own

  const images: string[] = ["/assets/img/no_thoughts_head_empty.png", "/assets/img/station.png", "/assets/img/toaster.png", "/assets/img/banner.png"];

  return (
    <>
      <div>
        <Image
          src={images[0]}
          alt="No thoughts head empty"
          width={300}
          height={300}
        />
        <Image
          src={images[1]}
          alt="Station"
          width={300}
          height={300}
        />
        <Image
          src={images[2]}
          alt="Toaster"
          width={300}
          height={300}
        />
        <Image
          src={images[3]}
          alt="Banner"
          width={600}
          height={300}
        />

      </div>
    </>
  );

};

export default DrawingShowcase;
