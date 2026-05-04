import React, { useEffect, useState } from "react";

const ProductDetailsGallery = ({ selectedProduct }) => {
  const [mainImage, setMainImage] = useState(null);

  /* Thumbnail için */
  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0]);
    } else if (selectedProduct?.thumbnail) {
      setMainImage(selectedProduct.thumbnail);
    }
  }, [selectedProduct]);

  const changeImage = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <div className='details__left'>
      <figure className='details__img'>
        <img src={mainImage} alt={selectedProduct.title} />
      </figure>
      <article className='details__thumbs'>
        {selectedProduct?.images.map((img) => (
          <img src={img} key={img} onClick={() => changeImage(img)} className={mainImage === img ? "active" : ""} />
        ))}
      </article>
    </div>
  );
};

export default ProductDetailsGallery;
