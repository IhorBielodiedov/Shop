import { useParams, Link } from "react-router-dom";
import {useHttp} from '../../hooks/http.hook';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from "./singleProductSlice";

import './singleProduct.scss';

const SingleProduct = () => {
    
    const {productId} = useParams();
    const product = useSelector(state => state.singleProduct);
    console.log(productId);
    const dispatch = useDispatch();
    const {request} = useHttp();


    useEffect(() => {
        dispatch(fetchSingleProduct(productId));
        // eslint-disable-next-line
    }, [productId]);
    
    console.log(product);
    return (
        <div className="single-product">
            {/* <div className="single-product__img">
                <img src={product.image}/>
            </div>
            <div className="single-product__desc">
                <p>{product.title}</p>
                <p>{product.rating.rate}</p>
                <p>PRICE: {product.price}</p>
                <p>{product.description}</p>
                <p>REMAINING {product.rating.count}</p>
                <button>BUY NOW</button>
            </div> */}
        </div>
    )
}

export default SingleProduct;