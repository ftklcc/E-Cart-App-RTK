import React, { useEffect, useMemo, useState } from "react";
import "../css/Products.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/productSlice";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/CustomButton/CustomButton";
import FilterSideBar from "../components/filterSideBar/FilterSideBar";


const Products = () => {
  const dispatch = useDispatch();
  const { products, productLoading, filters } = useSelector((state) => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  /* FİLTERED PRODUCTS */
  const filteredItems = useMemo(() => {
    let updatedList = products.filter((item) => {
      const searchMatch = item.title.toLowerCase().includes(filters.search.toLowerCase());
      const categoryMatch = filters.category === "all" || item.category === filters.category;

      return searchMatch && categoryMatch;
    })

    /* SORT */
    if (filters.sort === 'price-asc') {
      updatedList.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price-desc') {
      updatedList.sort((a, b) => b.price - a.price)
    }

    return updatedList;

  }, [products, filters])

  /* LOADİNG */
  if (productLoading) {
    return (
      <div className='mx loading__box'>
        <span className='loading'></span>
        <h1>Loading...</h1>
      </div>
    );
  }


  return (
    <main className='products'>
      {/* SİDEBAR */}
      <FilterSideBar />
      {/* Product LİST*/}
      <section className='products__container'>
        {filteredItems.map((item) => (
          <Link to={"/product-details/" + item.id} className='product__card' key={item.id}>
            <figure>
              <img src={item.thumbnail} alt={item.title} />
            </figure>
            <div className='product__title'>
              <span className='product__category'> {item.category} </span>
              <h4>{item.title} </h4>
              <h3>$ {item.price} </h3>
            </div>
            <Button variant='primary'>Details</Button>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Products;
