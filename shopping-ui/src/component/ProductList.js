import React, {useEffect, useState} from "react";
import '../App.css';
import TableComponent from "./TableComponent";
import _ from 'lodash';
import PropTypes from 'prop-types';

function ProductList(props) {

    useEffect(() => {
        fetchProductList();
    }, [])

    const [productList, setProductList] = useState([]);

    const fetchProductList = async () => {
        const header = {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        };
      const products = await fetch('http://localhost:9191/products/', header).then(data => data.json());
      setProductList([...products]);
    };

    const onAddToCart = (selected) => {
        let items = [];
        _.forEach(selected, (item) => {
            const product = _.find(productList, _.matchesProperty('itemId', item));
            items.push(product);
        })

        props.onAddToCart([...items]);

    }

    return (
        <div>
            <TableComponent rows={productList} onAddToCart={onAddToCart} />
        </div>
    );
}

ProductList.prototype = {
    onAddToCart: PropTypes.func
}

export default ProductList;
