import './loginForm.scss';

const LoginForm = () => {
    return (
        <form className='login-form'>
            <div className='title'>
                <h1>Agent Login</h1>
                <p>Hey,Enter Your Detalis To get Sing In Your Account</p>
            </div>
            <div className='container'>
                <input className='login-form__input'
                        placeholder='Enter Your Email-Phone No'></input>
            </div>
            <div className='container'>
                <input className='login-form__input'
                        placeholder='Password'></input>
            </div>
            <div className='container'>
                <button type="submit" className='login-form__button'>Sign In</button>
            </div>
        </form>
    )
}

export default LoginForm;