import { useParams, Link } from "react-router-dom";
import {useHttp} from '../../hooks/http.hook';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct, createId } from "./singleProductSlice";

import Spinner from '../spinner/Spinner';
import starFull from '../../resources/starFullBlack.svg';
import starEmpty from '../../resources/starEmpty.svg';
import './singleProduct.scss';

const setContent = (process, Component, data) => {
    if (process === "idle") {
        return <Component data={data}/>
    }
    else if (process === "loading") {
        return <Spinner/>;
    } else if (process === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }
}

const SingleProduct = () => {
    
    const {productId} = useParams();
    const product = useSelector(state => state.singleProduct);
    const singleProductLoadingStatus = useSelector(state => state.singleProduct.singleProductLoadingStatus);
    console.log(productId);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(createId(productId));
        console.log("load");
        dispatch(fetchSingleProduct());
        // eslint-disable-next-line
    }, [productId]);
    
    console.log(product);
    return (
        <>
            {setContent(singleProductLoadingStatus, View, product)}
        </>
    )
}

const View = ({data}) => {
    const renderRatingStars = (rating) => {
        let counterOfStars = Math.round(rating);
        let emptyStars = 5 - counterOfStars;
        let str = '';
        while(counterOfStars > 0){
            counterOfStars--;
            str += `<img src=${starFull} className="rating-stars__full" alt="F"></img>`
        }
        while(emptyStars > 0) {
            emptyStars--;
            str += `<img src=${starEmpty} className="rating-stars__empty" alt="E"></img>`
        }
        return str;
    }
    return (
        <div className="single-product">
            <div className="single-product__img">
                <img src={data.singleProduct.image}/>
            </div>
            <div className="single-product-info">
                <p className="single-product-info__label">{data.singleProduct.title}</p>
                <p className="single-product-info__rating" dangerouslySetInnerHTML={{__html:renderRatingStars(data.singleProduct.rating.rate)}}></p>
                <p className="single-product-info__price">PRICE: <span>{data.singleProduct.price} $</span></p>
                <p className="single-product-info__description">{data.singleProduct.description}</p>
                <p className="single-product-info__count">REMAINING <span>{data.singleProduct.rating.count}</span></p>
                <button className="single-product-info__button">BUY NOW</button>
            </div>
        </div>
    )
}

export default SingleProduct;