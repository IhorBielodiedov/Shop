import './shopHeader.scss';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../loginForm/userSlice';
import { useEffect } from 'react';

const ShopHeader = () => {
    const dispatch = useDispatch();
    const {isAuth, id, email} = useAuth();
    const sessionId = localStorage.getItem('id');
    const sessionEmail = localStorage.getItem('email');

    const checkSessionId = () => {
        if(sessionId) {
            return <li><button
            onClick={()=> dispatch(removeUser())}
            >Log out from {sessionEmail}</button></li>
        }
        else {
            return <li><Link to='/login'>Login</Link></li>
        }
    }

    useEffect(() => {},[sessionId]);
    console.log(id);
    return (
        <div className='shop__header'>
            <nav className='shop__menu'>
                <ul>
                    <li><Link to='/'>Main Page</Link></li>
                    {checkSessionId()}
                </ul>
            </nav>
        </div>
    )
}

export default ShopHeader;