import React, { useMemo } from 'react'
import './HomeDiscountProducts.css'
import { Link, useNavigate } from 'react-router-dom'

const HomeDiscountProducts = ({ products }) => {
    const navigate = useNavigate()
    const discountDeals = useMemo(() => {
        return [...products]
            .filter(product => product.discountPercentage > 10)
            .sort((a, b) => b.discountPercentage - a.discountPercentage)
            .slice(0, 8)
    }, [products])
    if (discountDeals.length === 0) return null;

    return (
        <section className="discount__container" aria-labelledby="discount-products" >
            <div className="discount__header">
                <h2 className="discount__title" > Günün Fırsatları</h2 >
                <span className="discount__subtitle">Sadece sınırlı bir süre için!</span>
            </div >

            <div className="discount__grid">
                {discountDeals.map((product) => {
                    // Eski fiyat hesaplama: Fiyat / (1 - indirim/100)
                    const originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);

                    return (
                        <article key={product.id} className="discount__card" >
                            {/* İndirim Rozeti */}
                            <div className="discount__badge">
                                %{Math.round(product.discountPercentage)}
                            </div>

                            <figure className="discount__image-box">
                                <img src={product.thumbnail} alt={product.title} loading="lazy" />
                            </figure>

                            <div className="discount__content">
                                <span className="discount__category">{product.category}</span>
                                <h3 className="discount__name">{product.title}</h3>

                                <div className="discount__price-row">
                                    <span className="price--new">${product.price}</span>
                                    <span className="price--old">${originalPrice}</span>
                                </div>

                                <button onClick={() => navigate('/product-details/' + product.id)} className="discount__add-btn">İncele</button>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section >
    )
}

export default HomeDiscountProducts