import axios from "axios"
import Cookies from "js-cookie"
import { isEmpty } from "../../js/fonctions"
import { _user_auth_success, _user_clear_errors, _user_delete_success, _user_errors, _user_get_success, _user_gets_success, _user_loading, _user_login_success, _user_logout, _user_register_success, _user_update_success, api } from "../constants/constants"


export const isLoading = () => {
    return (dispatch) => {
        dispatch({ type: _user_loading })
    }
}

export const user_error = (error) => {
    return (dispatch) => {
        dispatch({ type: _user_errors, payload: error?.response?.data?.message })
    }
}

export const checking = () => async (dispatch) => {
    try {
        var token = Cookies.get("cookie");
        if (!token) token = ""
        const res = await axios.post(`${api}/api/user/checking`, null, { headers: { token } });
        if (!res.data) dispatch(logout())
    } catch (error) {
        dispatch(logout())
    }
}


export const auth = () => async (dispatch) => {
    try {
        dispatch(isLoading())

        var token = Cookies.get("cookie")
        if (!token) token = ""

        const res = await axios.post(`${api}/api/user/checking`, null, { headers: { token } });
        if (res.data) {
            const ans = await axios.get(`${api}/api/user/get/profile`, { headers: { token } });

            if (!isEmpty(ans.data))
                dispatch({ type: _user_auth_success, payload: { ans: ans.data.response } });
        } else dispatch(logout())
    } catch (error) {
        dispatch(user_error(error))
    }
}

export const login = (data) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const ans = await axios.post(`${api}/api/user/login`, data);
        console.log(ans)

        if (!isEmpty(ans.data)) {
            Cookies.set("cookie", ans.data.token);
            dispatch({ type: _user_login_success, payload: { ans: ans?.data?.response, message: ans.data.message } });
        }
    } catch (error) {
        console.log(error.response.data.message)
        dispatch(user_error(error))
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch(isLoading());
        Cookies.remove("cookie")
        dispatch({ type: _user_logout, payload: { message: "Vous êtes deconnecté!" } })
    } catch (error) {
        dispatch(user_error(error))
    }
}

export const register = (data) => async (dispatch) => {
    try {
        dispatch(isLoading());
        const ans = await axios.post(`${api}/api/user/signup`, data)

        if (!isEmpty(ans.data))
            dispatch({ type: _user_register_success, payload: { ans: ans.data.response, message: ans.data.message } })
    } catch (error) {
        console.log(error)
        dispatch(user_error(error))
    }
}

export const getUser = (data) => async (dispatch) => {
    try {
        dispatch(isLoading())
        const token = Cookies.get("cookie");
        const ans = await axios.get(`${api}/user/${data?.id}/${data?.hostID}`, { headers: { token } })

        if (!isEmpty(ans.data))
            dispatch({ type: _user_get_success, payload: { ans: ans.data.response, message: ans.data.message } })
    } catch (error) {
        dispatch(user_error(error))
    }
}

export const getUsers = (data) => async (dispatch) => {
    try {
        const token = Cookies.get("cookie");
        let ans = await axios.get(`${api}/api/user/${data?.hostID}`, { headers: { token } })
        if (!isEmpty(ans.data))
            dispatch({ type: _user_gets_success, payload: { ans: ans.data.response, message: ans.data.message } })
    } catch (error) {
        dispatch(user_error(error))
    }
}

export const updateUser = (data) => async (dispatch) => {
    try {
        dispatch(isLoading());
        const token = Cookies.get("cookie");
        const ans = await axios.put(`${api}/api/user/${data?.id}/${data?.hostID}`, data, { headers: { token: token } })
        if (!isEmpty(ans.data)) {
            dispatch({ type: _user_update_success, payload: { ans: ans.data.response, message: ans.data.message } })
        }
    } catch (error) {
        dispatch(user_error(error))
    }
}

export const deleteUser = (data) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const token = Cookies.get("cookie");
        const ans = await axios.delete(`${api}/api/user/${data?.id}/${data?.hostID}`, { headers: { token } })

        if (!isEmpty(ans.data)) {
            dispatch({ type: _user_delete_success, payload: { ans: ans.data.response, message: ans.data.message } })
        }
    } catch (error) {
        dispatch(user_error(error))
    }
}

export const clearUserError = () => (dispatch) => {
    dispatch({ type: _user_clear_errors })
}