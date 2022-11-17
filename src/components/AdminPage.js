// import React from 'react';

// // import { userService } from '@/_services';

// class AdminPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             users: null
//         };
//     }

//     componentDidMount() {
//         userService.getAll().then(users => this.setState({ users }));
//     }

//     render() {
//         const { users } = this.state;
//         return (
//             <div>
//                 <h1>Admin</h1>
//                 <p>This page can only be accessed by administrators.</p>
//                 <div>
//                     All users from secure (admin only) api end point:
//                     {users &&
//                         <ul>
//                             {users.map(user =>
//                                 <li key={user.id}>{user.firstName} {user.lastName}</li>
//                             )}
//                         </ul>
//                     }
//                 </div>
//             </div>
//         );
//     }
// }

// export { AdminPage };






import { Link, useState} from "react-router-dom"

// const [users, setUser] = useState("")

// const userService =() => {
//         setUser(...users)
// }

const Admin = () => {
    return (
        // const {users} = this.state;
        <section>
            <h1>Admins Page</h1>
            <br />
            <p>You must have been assigned an Admin role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
            {/* <div>
                All users can see
                {users && 
                <ul>
                    {users.map(user =>
                        <li key={user.id}>{user.firstName}{user.lastName}</li>
                        )}
                </ul>
                }
            </div> */}
        </section>
    )
}

export default Admin

