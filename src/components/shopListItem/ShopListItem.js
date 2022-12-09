import clock from '../../resources/imgClock.png';
import './shopListItem.scss';

const ShopListItem = () => {
    return (
        <div className="shop-list__item">
            <div className='shop-list__img'>
                <img src={clock} alt="clock"/>
            </div>
           <div className='shop-list-label'>
            <div>
                <p className='shop-list-label__name'>Product Name</p>
                <p className='shop-list-label__rating'>4.0</p>
            </div>
            <p className='shop-list-label__price'>$200</p>
           </div>
        </div>
    )
}

export default ShopListItem;