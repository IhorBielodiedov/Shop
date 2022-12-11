import ShopListItem from '../shopListItem/ShopListItem';
import {useHttp} from '../../hooks/http.hook';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, productsAdd } from './shopListSlice';
import Spinner from '../spinner/Spinner';
import './shopList.scss';

const ShopList = () => {
    const products = useSelector(state => state.products);
    const productsLoadingStatus = useSelector(state => state.productsLoadingStatus);
    const countOfProducts = useSelector(state => state.countOfProducts);

    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchProducts());

        // eslint-disable-next-line
    }, [countOfProducts]);

    if (productsLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (productsLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const pagination = (value) => {
        dispatch(productsAdd(value));
    }
    const renderProductsList = (arr) => {
        if (arr.length === 0) {
            return (
                    <h5 className="text-center mt-5">Продуктов пока нет</h5>
            )
        }

        return arr.map(({...props}) => {
            return (
                    <ShopListItem  {...props}/>
            )
        })
    }
    console.log(products);
    const elements = renderProductsList(products);
    return (
        <div className='shop-list__list'>
            {elements}
            <button
            onClick={() => pagination(9)}
            >
                Load More
            </button>
        </div>
    )
}

export default ShopList;