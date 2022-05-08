import { Role } from './'
let users = JSON.parse(localStorage.getItem('users')) || [];

export function configureFakeBackend() {
    // let users = [
    //     { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    //     { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
    // ];

    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const authHeader = opts.headers['Authorization'];
        const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        const roleString = isLoggedIn && authHeader.split('.')[1];
        const role = roleString ? Role[roleString] : null;
        const { method, headers } = opts;
        const body = opts.body && JSON.parse(opts.body);
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            // setTimeout(() => {
                // authenticate - public
                setTimeout(handleRoute, 500);
                function handleRoute() {
                    switch (true) {
                        case url.endsWith('/users/authenticate') && method === 'POST':
                            return authenticate();
                        case url.endsWith('/users/register') && method === 'POST':
                            return register();
                        case url.endsWith('/users') && method === 'GET':
                            return getUsers();
                        case url.match(/\/users\/\d+$/) && method === 'DELETE':
                            return deleteUser();
                        case url.match(/\/users\/\d+$/) && method === 'GET':
                                return getUserById();
                        case url.match(/\/users\/\d+$/) && method === 'PUT':
                                     return updateUser();
                        default:
                            // pass through any requests not handled above
                            return realFetch(url, opts)
                                .then(response => resolve(response))
                                .catch(error => reject(error));
                    }
                }
                // if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                //     const params = JSON.parse(opts.body);
                //     const user = users.find(x => x.username === params.username && x.password === params.password);
                //     if (!user) return error('Username or password is incorrect');
                //     return ok({
                //         id: user.id,
                //         username: user.username,
                //         firstName: user.firstName,
                //         lastName: user.lastName,
                //         role: user.role,
                //         token: `fake-jwt-token.${user.role}`
                //     });
                // }
                function authenticate() {
                    const { username, password } = body;
                    const user = users.find(x => x.username === username && x.password === password);
                    if (!user) return error('Username or password is incorrect');
                    return ok({
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        role: user.role,
                        token: `fake-jwt-token.${user.role}`
                    });
                }
                function getUsers(){
                    if (!isLoggedIn) return unauthorised();

                    // get id from request url
                    // let urlParts = url.split('/');
                    // let id = parseInt(urlParts[urlParts.length - 1]);

                    // // only allow normal users access to their own record
                    // const currentUser = users.find(x => x.role === role);
                    // if (id !== user.id && role !== user.role) return unauthorised();

                    // const user = users.find(x => x.id === id);
                    return ok(users);
                }
                function register() {
                    const user = body;
        
                    if (users.find(x => x.username === user.username)) {
                        return error(`Username  ${user.username} is already taken`);
                    }
        
                    // assign user id and a few other properties then save
                    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
                    users.push(user);
                    localStorage.setItem('users', JSON.stringify(users));
    
                    return ok();
                }
                // function getUsers() {
                    // if (!isLoggedIn()) return unauthorized();
    
                    // return ok(users);
                // }
        
                function deleteUser() {
                    users = users.filter(x => x.id !== idFromUrl());
                    localStorage.setItem('users', JSON.stringify(users));
    
                    return ok();
                }
                function getUserById() {
                    let user = users.find(x => x.id === idFromUrl());
                    console.log("---------->",user)
                    return ok(user);
                }
                function updateUser() {
                    let params = body;
                    let user = users.find(x => x.id === idFromUrl());
    
                    // only update password if included
                    if (!params.password) {
                        delete params.password;
                    }
                    // don't save confirm password
                    delete params.confirmPassword;
    
                    // update and save user
                    Object.assign(user, params);
                    localStorage.setItem('users', JSON.stringify(users));
    
                    return ok();
                }
    
                // get user by id - admin or user (user can only access their own record)
                // if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                //     if (!isLoggedIn) return unauthorised();

                //     // get id from request url
                //     let urlParts = url.split('/');
                //     let id = parseInt(urlParts[urlParts.length - 1]);

                //     // only allow normal users access to their own record
                //     const currentUser = users.find(x => x.role === role);
                //     if (id !== currentUser.id && role !== Role.Admin) return unauthorised();

                //     const user = users.find(x => x.id === id);
                //     return ok(user);
                // }
                // function  getAllUser(){
                //     if (role !== Role.Admin) return unauthorised();
                //     return ok(users);
                // }
                // get all users - admin only
                // if (url.endsWith('/users') && opts.method === 'GET') {
                //     if (role !== Role.Admin) return unauthorised();
                //     return ok(users);
                // }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

                // private helper functions

                function ok(body) {
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
                }

                function unauthorised() {
                    resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorised' })) })
                }
                function isLoggedIn() {
                    return headers['Authorization'] === 'Bearer fake-jwt-token';
                }
                function idFromUrl() {
                    const urlParts = url.split('/');
                    return parseInt(urlParts[urlParts.length - 1]);
                }
                function error(message) {
                    resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
                }
    
                function error(message) {
                    resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
                }
               
            }, 500);



        // });
    }
}