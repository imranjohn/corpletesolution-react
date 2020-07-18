

export const AuthGuard = () => {
    const userStr = localStorage.getItem('user');
    return !!userStr;
};

export const getUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return userStr;
    else return null;
}

export const getUserId = () => {
    const userStr = localStorage.getItem('user');
    var user_object = JSON.parse(userStr);
    if(userStr) return user_object.id;
    else return null;
}

export const getUserFullName = () => {
    const userStr = localStorage.getItem('user');
    var user_object = JSON.parse(userStr);
    if(userStr) return user_object.first_name+ ' ' + user_object.last_name;
    else return null;
}

export const getUserByField = (field) => {
    const userStr = localStorage.getItem('user');
    var user_object = JSON.parse(userStr);
    if(userStr) return user_object[field];
    else return null;
}


export const isSubscribed = () => {
    return true;
}

export const getToken = () => {
    return localStorage.getItem('_token') || null;
}

export const setOnlyUserObject = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const setUserStorage = (token, user) => {
    localStorage.setItem('_token', token);
    localStorage.setItem('user', JSON.stringify(user));
}

export const removeUserStorage = () => {
    localStorage.removeItem('_token');
    localStorage.removeItem('user');
}