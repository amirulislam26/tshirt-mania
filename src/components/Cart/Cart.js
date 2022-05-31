import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css'

const Cart = ({ cart, hendelRemoveFromCart }) => {
    //1................
    let command;
    if (cart.length === 0) {
        command = <p>Pleace Add at least one item!!!</p>
    }
    else if (cart.length === 1) {
        command = <p>Pleace add more</p>
    }
    else {
        command = <p><small>Thanks for adding item...</small></p>
    }
    return (
        <div>
            <h2>Item Selected: {cart.length}</h2>
            {command}
            {

                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button className='delete' onClick={() => hendelRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orenge'>YAY! YOU are buying</p>}
            {cart.length === 3 &&
                <div className='orenge'>
                    <h3>Trigonal</h3>
                    <p>tin jon ke ki gift diba</p>
                </div>
            }
            {cart.length !== 4 ? <p>Keep adding</p> : <button className='remove-button'>Remove All</button>}
            {cart.length === 4 && <button className='review-button'>Review Order</button>}
        </div>
    );
};

export default Cart;