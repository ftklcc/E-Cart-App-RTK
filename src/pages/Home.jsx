import React, { useEffect, useMemo, useState } from "react";
import '../css/Home.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/productSlice";
import ProductDetailsStars from "../components/productDetailComponents/ProductStars";

// İCONS
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import HomeDiscountProducts from "../components/home/HomeDiscountProducts";


const Home = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  // Using useMemo to prevent unnecessary re-calculations
  const sliderData = useMemo(() => products.slice(0, 5), [products])

  useEffect(() => {
    if (sliderData.length === 0) return;

    const timer = setTimeout(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentIndex, sliderData.length])

  const prevSlide = () => {
    setCurrentIndex((prev) => prev === 0 ? sliderData.length - 1 : prev - 1)
  }
  const nextSlide = () => {
    setCurrentIndex((prev) => prev === sliderData.length - 1 ? 0 : prev + 1)
  }
  if (sliderData.length === 0) return null;



  return (
    <main>
      {/* SLİDER----------------------------------------- */}
      <header className="slider__header">
        <h2>Popüler Ürünler</h2>
      </header>
      <section className="slide__container" aria-label="Featured products slider" >
        <div className="slide__wrapper" aria-roledescription="carousel">
          <button aria-label="Previous slide" onClick={prevSlide} className="arrow__left"> <FaArrowAltCircleLeft /> </button>
          {
            sliderData?.map((slide, index) => (
              <article aria-hidden={currentIndex !== index} key={slide.id} className={currentIndex === index ? 'slide active' : 'slide'} >
                <div className="slide__left">
                  <ProductDetailsStars selectedProduct={slide} />
                  <span>{slide.brand}</span>
                  <h2> {slide.title} </h2>
                  <p>{slide.description}</p>
                </div>
                <figure className="slide__right">
                  <img src={slide.thumbnail} alt={slide.title} />
                </figure>
              </article>
            ))
          }
          <button aria-label="Next slide" onClick={nextSlide} className="arrow__right"> <FaArrowAltCircleRight /> </button>
        </div>
      </section >
      {/* İNDİRİME GİREN ÜRÜNLer */}
      <HomeDiscountProducts products={products} />
    </main>
  )
};

export default Home;
