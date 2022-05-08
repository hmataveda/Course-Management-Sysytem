import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../_helpers';
import CheckBox from "./Checkbox";
import SearchField from "react-search-field";

import { userActions,alertActions } from '../_actions';
function AdminPage1({ match }) {
    const { path } = match;
    const [searched, setSearched] = useState('')
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    // let users = users1
    useEffect(() => {
        dispatch(alertActions.clear());
        dispatch(userActions.getadminAll());
    }, []);
    // handleAllChecked = event => {
    //     let fruites = this.state.fruites;
    //     fruites.forEach(fruite => (fruite.isChecked = event.target.checked));
    //     this.setState({ fruites: fruites });
    //   };
    function requestSearch(e) {
        const FilteredRows = users.filter((row) => {
            return row.firstName.toLowerCase().inculdes(e.target.value.toLowerCase());
        });
        users = FilteredRows
    }
    const cancelSearch = () => {
        setSearched('')
        requestSearch(searched)
    }
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
        <div>
            <div>

                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="p-2 bd-highlight"> <Link to={`${path}/add`} className="btn btn-sm btn-warning mb-2">Add User</Link></div>
                    <div class="p-2 bd-highlight">
                        <SearchField
                          placeholder="Search..."
                          onChange={requestSearch}
                          searchText="This is initial search text"
                          classNames="test-class"
                         />
                </div>
                <div class="p-2 bd-highlight">
                <input
                    type="checkbox"
                    //   onClick={this.handleAllChecked}
                    value="checkedall"
                />{" "}
                Check / Uncheck All
                </div>
                <div class="p-2 bd-highlight">
                <input
                    type="checkbox"
                    //   onClick={this.handleAllChecked}
                    value="checkedall"
                />{" "}
                 Approve All
                </div>
                <div class="p-2 bd-highlight">
                <input
                    type="checkbox"
                    //   onClick={this.handleAllChecked}
                    value="checkedall"
                />{" "}
                 Block All
                </div>
                </div>


                <table class="table table-bordered">

                    <thead className="table-warning">
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>last Name</th>
                            <th>User</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.items && users.items.map((data, index) => {
                            return <tr key={(index + 1)}>
                                <td> <CheckBox
                                // handleCheckChieldElement={this.handleCheckChieldElement}
                                /></td>
                                <td>{(index + 1)}</td>
                                <td>{data.firstName}</td><td>{data.lastName}</td>
                                <td>{data.username}</td>
                                <td>{data.role}</td>
                                <td className="btn-group" role="group" aria-label="Basic outlined example">
                                    <Link to={`admin/edit/${data.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>

                                    <button type="button" className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>DELETE</button>
                                    {/* {
                            user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={() => handleDeleteUser(user.id)} className="text-primary">Delete</a></span>
                        } */}
                                </td>

                            </tr>
                        })}
                    </tbody>
                </table>
                
            </div>
            {/* <p>
                <button onClick={handlelogout}>Logout</button>
            </p> */}
        </div>
    );
}
export { AdminPage1 };