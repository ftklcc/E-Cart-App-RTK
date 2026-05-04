import React from "react";
import { BiTrash } from "react-icons/bi";
import { decrementQuantity, incrementQuantity, removeCartItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import useAlert from "../../hooks/useAlert";

const CartItems = ({ item }) => {
    const dispatch = useDispatch();
    const showAlert = useAlert()

    const removeItemFromCart = (id) => {
        dispatch(removeCartItem(id));
        showAlert(`Ürün sepetten çıkarıldı`, 'error')
    };


    return (
        <div className='cart'>
            <figure className='cart__img'>
                <img src={item.thumbnail} alt='image name' />
            </figure>
            <div className='cart__title'>
                <article className='cart__info'>
                    <h3>{item.title} </h3>
                    <h3> ${item.price} </h3>
                </article>
                <article className='cart__actions'>
                    <div className='cart__quantitiy'>
                        <span onClick={() => dispatch(decrementQuantity(item.id))}>-</span>
                        <span> {item.quantity} </span>
                        <span onClick={() => dispatch(incrementQuantity(item.id))}>+</span>
                    </div>
                    <button onClick={() => removeItemFromCart(item.id)}>
                        <BiTrash />
                        Remove
                    </button>
                </article>
            </div>
        </div>
    );
};

export default CartItems;
