import './shopHeader.scss';
import {Link} from 'react-router-dom';

const ShopHeader = () => {
    return (
        <div className='shop__header'>
            <nav className='shop__menu'>
                <ul>
                    <li><Link to='/'>Main Page</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default ShopHeader;