import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'color': '#ffffff'}}>Page doesn't exist</p>
            <Link style={{'color': '#ffffff', 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;