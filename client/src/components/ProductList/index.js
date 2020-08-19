import React, { useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import ProductItem from "../ProductItem";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { useDispatch, useSelector } from 'react-redux';

function ProductList() {
    const state = useSelector((state) => {
        return state
    });

    const dispatch = useDispatch();

    const { currentCategory } = state;

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    const products = data?.products || [];


    useEffect(() => {
        // if there is data to be stored
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });

            //and save each product to IndexedDB using helper function
            data.products.forEach((product) => {
                idbPromise('products', 'put', product)
            });
            // add else if to check if 'loading' is undefined in 'useQuery()' hook
        } else if (!loading) { 
            // since were offline, get all of 
            idbPromise('products', 'get').then((products) => {
                //use retrieved data to set global state for offline browsing
                dispatch({
                    type: UPDATE_PRODUCTS,
                    product: products
                });
            });
        }
    }, [data, loading, dispatch]);

    function filterProducts() {
        if (!currentCategory) {
            return state.products;
        }

        return products.filter(product => product.category._id === currentCategory);
    }

    return (
        <div>
            <h2>The Shoes</h2>
            {state.products.length ? (
                <div className="flex-row">
                    {filterProducts().map(product => (
                        <ProductItem
                            key= {product._id}
                            _id= {product._id}
                            image= {product.image}
                            name= {product.name}
                            price= {product.price}
                            quantity= {product.quantity}
                        />
                    ))}
                </div>
            ) : (
                <h3> There is nothing here yet! </h3>
            )}
        </div>
    )
}

export default ProductList;