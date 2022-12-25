import './loginForm.scss';
import {useState} from 'react';

const Form = ({handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className='login-form'>
            <div className='title'>
                <h1>Agent Login</h1>
                <p>Hey,Enter Your Detalis To get Sing In Your Account</p>
            </div>
            <div className='container'>
                <input className='login-form__input'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Your Email-Phone No'></input>
            </div>
            <div className='container'>
                <input className='login-form__input'
                        type='password'
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder='Password'></input>
            </div>
            <div className='container'>
                <button className='login-form__button'
                        onClick={() => handleClick(email, pass)}>Sign In</button>
            </div>
        </div>
    )
}

export default Form;