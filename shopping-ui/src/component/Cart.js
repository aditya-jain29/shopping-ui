import React, {useState, useEffect} from "react";
import '../App.css';
import PropTypes from 'prop-types';
import _ from 'lodash'

function Cart(props) {
    const { items, onAdd, onRemove } = props;

    const itemsPrice = items.reduce((a, c) => a + c.quantity * c.sellPrice, 0)
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div>
            {items.length === 0 && <div>Cart is empty</div>}
            {items.map((item) => (
                <div key={item.itemId} className="row">
                    <div className="col-2">{item.itemName}</div>
                    <div className="col-2">
                        <button onClick={() => onRemove(item)} className="remove">
                            -
                        </button>{' '}
                        <button onClick={() => onAdd(item)} className="add">
                            +
                        </button>
                    </div>

                    <div className="col-2 text-right">
                        {item.quantity} x ${item.sellPrice.toFixed(2)}
                    </div>
                </div>
            ))}

            {items.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Tax Price</div>
                        <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">
                            ${shippingPrice.toFixed(2)}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2">
                            <strong>Total Price</strong>
                        </div>
                        <div className="col-1 text-right">
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <button onClick={() => alert('Implement Checkout!')}>
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

Cart.prototype = {
    items: PropTypes.array,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func
}

export default Cart;
