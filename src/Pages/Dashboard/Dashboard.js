import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className='container w-50 mx-auto'>
            <h2>Welcome to dashboard</h2>
            
            <ul className="nav nav-pills">
                <li className="nav-item mx-2">
                    <Link className="nav-link active mx-2" aria-current="page" to={"my-orders"}>My Orders</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active mx-2" to={"review"}>Post Review</Link>
                </li>
                { admin && <li className="nav-item">
                    <Link className="nav-link active mx-2" to={"all-users"}>All Users</Link>
                </li>}
                
            </ul>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;