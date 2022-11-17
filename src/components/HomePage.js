import React from 'react';
import { userService } from '../services/userService';
import { authenticationService } from '../services/authenticationService';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null
        };
    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    }

    render() {
        const { currentUser, userFromApi } = this.state;
        return (
            <div>
                <h1>Home</h1>
                <p>You're logged in with React & JWT!!</p>
                <p>Your role is: <strong>{currentUser.role}</strong>.</p>
                <p>This page can be accessed by all authenticated users.</p>
                <div>
                    Current user from secure api end point:
                    {userFromApi &&
                        <ul>
                            <li>{userFromApi.firstName} {userFromApi.lastName}</li>
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

export { HomePage };






// import { useNavigate, Link } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../context/AuthProvider";

// const Home = () => {
//     // const { setAuth } = useContext(AuthContext);
//     // const navigate = useNavigate();

//     // const logout = async () => {
//     //     // if used in more components, this should be in context 
//     //     // axios to /logout endpoint 
//     //     setAuth({});
//     //     navigate('/linkpage');
//     // }

//     return (
//         <section>
//             <h1>Home</h1>
//             <br />
//             <p>You are logged in!</p>
//             <br />
//             <Link to="/editor">Go to the Editor page</Link>
//             <br />
//             <Link to="/admin">Go to the Admin page</Link>
//             <br />
//             <Link to="/lounge">Go to the Lounge</Link>
//             <br />
//             <Link to="/linkpage">Go to the link page</Link>
//             {/* <div className="flexGrow">
//                 <button onClick={logout}>Sign Out</button>
//             </div> */}
//         </section>
//     )
// }

// export default Home
