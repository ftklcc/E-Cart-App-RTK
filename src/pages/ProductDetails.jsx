//React  Hooks
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
//components
import CustomButton from "../components/CustomButton/CustomButton";
import ProductDetailsGallery from "../components/productDetailComponents/ProductDetailsGallery";
import ProductDetailsStars from "../components/productDetailComponents/ProductStars";
//functions redux toolkit 
import { fetchProductById } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
//custom hooks
import useAlert from "../hooks/useAlert";
import "../css/ProductDetails.css";


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedProduct, selectedProductLoading } = useSelector((state) => state.products);
  const showAlert = useAlert()



  useEffect(() => {
    dispatch(fetchProductById(Number(id)));
  }, [dispatch, id]);

  if (!selectedProduct) {
    return <div>Ürünler Bulunamadı.</div>;
  }
  if (selectedProductLoading) {
    return (
      <div className='mx loading__box'>
        <span className='loading'></span>
        <h1>Loading...</h1>
      </div>
    );
  }
  const addToBasket = (item) => {
    dispatch(addToCart(item));
    showAlert('Sepete Eklendi', 'info')
  };
  return (
    <main className='details'>
      <section className='details__back'>
        <CustomButton onClick={() => navigate("/products")} variant='primary'>
          Geri Dön
        </CustomButton>
      </section>

      <section className='details__wrap'>
        {/* DETAİLS LEFT */}
        <ProductDetailsGallery selectedProduct={selectedProduct} />
        {/* DETAİLS RİGHT */}
        <article className='details__info'>
          <ProductDetailsStars selectedProduct={selectedProduct} />
          <h3>{selectedProduct.title} </h3>
          {selectedProduct.tags.map((tag) => (
            <span className='details__tag' key={tag}>
              {tag}
            </span>
          ))}
          <p>{selectedProduct.description} </p>
          <CustomButton onClick={() => addToBasket(selectedProduct)} className='details__btn'>
            Sepete Ekle
          </CustomButton>
        </article>
      </section>
    </main>
  );
};

export default ProductDetails;
