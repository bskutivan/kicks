import React, {useEffect, useState} from 'react';
import Casual from '../../assets/images/casual.jpg';
import Dress from './../../assets/images/dress.jpg';
import Performance from './../../assets/images/performance.jpg';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from "../../utils/queries";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../../utils/actions";
import { idbPromise } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';

function Directory() {

    const state = useSelector((state) => {
        return state
    });

    const dispatch = useDispatch();

    const { categories } = state;

    const arr = [ Casual, Dress, Performance ]

    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        console.log(categoryData)
        // if categoryData exists or has changed from the response of useQuery, then run dispatch 
        if (categoryData) {
            //execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
            dispatch({
            type: UPDATE_CATEGORIES,
            categories: categoryData.categories
            });
            categoryData.categories.forEach(category => {
            idbPromise('categories', 'put', category);
            });
        } else if (!loading) {
            idbPromise('categories', 'get').then(categories => {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categories
            });
            });
        }
    }, [categoryData, dispatch]);
    
    const handleClick = id => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id
        });
    };

    return (
        <div className="directory">
            <div className="wrap">
                {categories.map((item, index) => (
                    <div
                    className="item"
                    key={item._id}
                    onClick={() => {
                        handleClick(item._id);
                    }}
                    style={{
                        backgroundImage: `url(${arr[index]})`
                    }}
                    >
                        <a>
                            Shop {item.name} Shoes
                        </a>
                    </div>
                ))};
            </div>
        </div>
    );
};

export default Directory;