import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import { userActions } from '../_actions';
import { userService, alertService } from '../_services';

function AddEdit({ history, match }) {
  
    const { id } = match.params;
    // let params = useParams();
    const isAddMode = !id;
    // const [user1, setUser1] = useState({});
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        role:'',
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();
    // reset login status
    useEffect(() => {
    console.log('-->>>>>>>',id)
        // dispatch(userActions.logout());
    }, []);
    useEffect(() => {
        if (!isAddMode) {
            // get user and set form fields
            userService.getById(id).then(user =>
                setUser(user)
            );
            console.log('user',user)
        }
    }, []);
    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password && user.role) {
            user.token='Bearer fake-jwt-token.'+user.role;
        
            return isAddMode
            ?  dispatch(userActions.register(user))
            : dispatch(userActions.update(user));    
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">
             
          <h1>{isAddMode ? 'Add  User' : 'Edit User'}</h1>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={user.lastName} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                    {submitted && !user.username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <input type="role" name="role" value={user.role} onChange={handleChange} className={'form-control' + (submitted && !user.role ? ' is-invalid' : '')} />
                    {submitted && !user.role &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                
                <div className="form-group">
                    <button className="btn btn-primary">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Save
                    </button>
                    <Link to="/admin" className="btn btn-link">Back</Link>
                </div>
            </form>
        </div>
    );
}

export { AddEdit };