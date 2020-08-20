import React, { useEffect } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from "../utils/helpers";

function Success() {
    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
            const cart = await idbPromise('cart', 'get');
            const products = cart.map(item => item._id);

            if (products.length) {
                const { data } = await addOrder({ variables: { products } });
                const productData = data.addOrder.products;

                productData.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }

            setTimeout(() => {
                window.location.assign('http://localhost:3000/')
            }, 3000);
        }
        saveOrder();
    }, [addOrder]);

    return (
        <div>
            <h1>New Shoes Incoming!</h1>
            <h2>Thank you for placing your order!</h2>
            <h2>This page will redirect you to the homepage but make sure to follow us below!</h2>
        </div>
    )
}