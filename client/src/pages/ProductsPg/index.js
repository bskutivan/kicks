import React from 'react';
import ProductList from '../../components/ProductList';
import Cart from '../../components/Cart';

function ProductsPg() {
    return(
        <section className="ProductsPg">
            <Cart />
            <ProductList />
        </section>
    );
}

export default ProductsPg;