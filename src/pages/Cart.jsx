import React from "react";

import "../css/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllItems } from "../redux/cartSlice";
import useAlert from "../hooks/useAlert";
import CartItems from "../components/cart/CartItems";
import CustomButton from "../components/CustomButton/CustomButton";


const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const showAlert = useAlert()

    const { cartItems } = useSelector((state) => state.cart);
    const totalQuantity = cartItems.reduce((total, item) => item.quantity + total, 0);
    const totalAmount = cartItems.reduce((total, item) => item.quantity * item.price + total, 0);

    const removeAllItemToCart = () => {
        if (cartItems.length === 0) return null;
        if (confirm('Sepeti temizlemek istediğinize emin misiniz ?')) {
            dispatch(removeAllItems())
            showAlert('Tüm sepet temizlendi', 'success')
        }
    }
    const completedOrder = () => {
        if (cartItems.length === 0) return null;
        showAlert('Siparişiniz için teşekkür ederiz.', 'success')
        dispatch(removeAllItems())

    }

    const emptyBasket = () => {
        return (
            <div className='mx empty__basket'>
                <h1>Sepetiniz Boş</h1>
                <p>Şimdi alışveriş yapabilirsiniz.</p>
                <CustomButton onClick={() => navigate('/products')} >Ürünlere Git</CustomButton>
            </div>
        )
    }

    return (
        <main className='cart__container'>
            <section className='cart__list'>
                {cartItems && cartItems.length > 0
                    ? cartItems.map((item) => <CartItems key={item.id} item={item} />)
                    : emptyBasket()}
            </section>
            {/* CART AMOUNT */}
            <section className='cart__amount'>
                <h2>Sipariş Özeti</h2>
                <p>Toplam Ürün: {totalQuantity} </p>
                <div className='underline'></div>
                <article className='cart__total'>
                    <p> TOTAL </p>
                    <p>$ {totalAmount.toFixed(2)} </p>
                </article>
                <CustomButton onClick={completedOrder} variant='secondary'>Sipariş ver</CustomButton>
                <CustomButton onClick={removeAllItemToCart} variant='danger'>Sepet temizle</CustomButton>
            </section>
        </main>
    );
};

export default Cart;
