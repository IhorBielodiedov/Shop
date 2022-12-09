import ShopListItem from '../shopListItem/ShopListItem';
import './shopList.scss';

const ShopList = () => {
    return (
        <div className='shop-list__list'>
            <ShopListItem/>
            <ShopListItem/>
            <ShopListItem/>
        </div>
    )
}

export default ShopList;