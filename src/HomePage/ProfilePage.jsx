import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../_helpers';
import { userActions } from '../_actions';

function ProfilePage({ match }) {
    const { path } = match;
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(user.role)
        dispatch(userActions.getAll(user.role));
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }
    function getUserByid(id) {
        dispatch(userActions.delete(id));
    }
    function handlelogout() {
        history.push('/login')
    }

    return (
        <div className="container-fluid" style={{ width: "25em" }} >
            <div class="card">
                <div class="card-header">
                    <h3>
                        Hi {user.firstName}!
                    </h3>
                </div>
                <div class="card-body">
                    <h5 class="card-title">User Name: {user.username}</h5>
                    <p class="card-text">First Name :{user.firstName}</p>
                    <p class="card-text">Last Name :{user.lastName}</p>
                    <p class="card-text">Role&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" class="btn btn-primary">{user.role}</a></p>
                </div>
            </div>
        </div>

    );
}

export { ProfilePage };