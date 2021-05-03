import React, {useState, useEffect} from "react";
import './App.css';
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import Order from "./component/Order";
import Nav from "./Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import _ from 'lodash'

function App() {
    const [cartItems, setCartItems] = useState([]);

    const onAddToCart = (selected) => {
        const items = _.map(selected, (item) => {
            var returnItem = item;
            returnItem.quantity = 1;
            return returnItem;
        })
        console.log(items);
        setCartItems([...selected]);
    };

    const onAdd = (item) => {
        const items = _.map(cartItems, (cartItems) => {
            if(cartItems.itemId === item.itemId) {
                var returnItem = cartItems;
                returnItem.quantity += 1;
                return returnItem;
            } else {
                return cartItems;
            }
        })
        setCartItems([...items]);
    }
    const onRemove = (item) => {
        if(item.quantity === 1) {
            var filtered = cartItems.filter(function(el) { return el.itemId != item.itemId; });
            setCartItems([...filtered]);
        } else {
            const items = _.map(cartItems, (cartItem) => {
                if(cartItem.itemId === item.itemId) {
                    var returnItem = cartItem;
                    returnItem.quantity -= 1;

                    return returnItem;
                } else {
                    return cartItem;
                }
            })
            setCartItems([...items]);

        }

    }

  return (
      <Router>
          <div className="App">
              <Nav />
              <Switch>
                  <Route path="/"  exact render={props => <ProductList onAddToCart = {onAddToCart} />} />
                  <Route path='/kart' exact component={props => <Cart items = {cartItems} onAdd={onAdd} onRemove={onRemove}/>}/>
                  <Route path='/order' exact component={Order}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
