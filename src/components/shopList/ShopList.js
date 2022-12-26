import ShopListItem from '../shopListItem/ShopListItem';
import {useHttp} from '../../hooks/http.hook';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchProducts, productsAdd } from './shopListSlice';
import Spinner from '../spinner/Spinner';
import './shopList.scss';

const setContent = (process, Component, newItemLoading) => {
    if (process === "idle") {
        return <Component/>
    }
    else if (process === "loading") {
        return newItemLoading ? <Component/> : <Spinner/>;
    } else if (process === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }
}

const ShopList = () => {
    const products = useSelector(state => state.products.products);
    const productsLoadingStatus = useSelector(state => state.products.productsLoadingStatus);
    const countOfProducts = useSelector(state => state.products.countOfProducts);
    const newItemLoading = useSelector(state => state.products.newItemLoading);

    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchProducts());

        // eslint-disable-next-line
    }, [countOfProducts]);
    console.log(products);
    const pagination = (value) => {
        dispatch(productsAdd(value));
    }
    const renderProductsList = (arr) => {
        if (arr.length === 0) {
            return (
                    <h5 className="text-center mt-5">Продуктов пока нет</h5>
            )
        }

        return arr.map(({id, ...props}) => {
            return (
                <Link to={`/product/${id}`}>
                    <ShopListItem key={id} {...props}/>
                </Link>
            )
        })
    }
    const elements = renderProductsList(products);
    return (
        <div className='shop-list'>
            <div className='shop-list__list'>
                {setContent(productsLoadingStatus, () => renderProductsList(products), newItemLoading)}
            </div>
            <button className='shop-list__button'
            disabled={newItemLoading || productsLoadingStatus === 'loading'}
            onClick={() => pagination(9)}
            >
                Load More
            </button>
        </div>
    )
}

export default ShopList;