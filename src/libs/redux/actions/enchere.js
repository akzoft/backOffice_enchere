import Cookies from "js-cookie"
import { _enchere_create_success, _enchere_delete_success, _enchere_errors, _enchere_get_success, _enchere_gets_success, _enchere_loading, _enchere_update_success, api } from "../constants/constants"
import axios from "axios"
import { isEmpty } from "../../js/fonctions"

export const isLoading = () => {
    return (dispatch) => {
        dispatch({ type: _enchere_loading })
    }
}

export const enchere_error = (error) => {
    return (dispatch) => {
        dispatch({ type: _enchere_errors, payload: error?.response?.data?.message })
    }
}

export const create_enchere = (data) => async (dispatch) => {
    try {
        dispatch(isLoading());
        const token = Cookies.get("cookie")
        const ans = await axios.post(`${api}/api/enchere`, data, { headers: { token } })

        if (!isEmpty(ans.data))
            dispatch({ type: _enchere_create_success, payload: { ans: ans.data.response, message: ans.data.message } })
    } catch (error) {
        dispatch(enchere_error(error))
    }
}

export const upload_creat = (data) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const ans = await axios.put(`${api}/api/enchere/upload_create`)

        if (!isEmpty(ans.data))
            dispatch({ type: "_enchere_upload_create_success", payload: { ans: ans.data.response, message: ans.data.message } })
    } catch (error) {
        dispatch(enchere_error(error))
    }
}

export const update_enchere = (data) => async (dispatch) => {
    try {
        dispatch(isLoading());
        console.log(data)
        const token = Cookies.get("cookie")
        console.log(token)
        const ans = await axios.put(`${api}/api/enchere/${data?.id}/${data?.hostID}`, data, { headers: { token } })
        console.log(ans.data)
        if (!isEmpty(ans.data))
            dispatch({ type: _enchere_update_success, payload: { ans: ans.data.response, message: ans.data.message } })
    } catch (error) {
        console.log(error?.response?.data?.message || error?.message)
        dispatch(enchere_error(error))
    }
}

export const upload_edit = (data) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const ans = await axios.put(`${api}/api/enchere/upload_edit`)

        if (!isEmpty(ans.data))
            dispatch({ type: "_enchere_upload_edit_success", payload: { ans: ans.data.response, message: ans.data.message } })
    } catch (error) {
        dispatch(enchere_error(error))
    }
}

export const get_enchere = (data) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const token = Cookies.get("cookie")
        const ans = await axios.get(`${api}/api/enchere/${data?.id}/${data?.hostID}`, { headers: { token } })

        if (!isEmpty(ans.data))
            dispatch({ type: _enchere_get_success, payload: { ans: ans.data.response, message: ans.data.message } })
    } catch (error) {
        dispatch(enchere_error(error))
    }
}

export const get_encheres = (data) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const token = Cookies.get("cookie")
        const ans = await axios.get(`${api}/api/enchere/${data?.hostID}`, { headers: { token } })

        if (!isEmpty(ans.data))
            dispatch({ type: _enchere_gets_success, payload: { ans: ans.data.response, message: ans.data.message } })
    } catch (error) {
        dispatch(enchere_error(error))
    }
}


export const delete_enchere = (data) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const token = Cookies.get("cookie")
        const ans = await axios.delete(`${api}/api/enchere/${data?.id}/${data?.hostID}`, { headers: { token } })

        if (!isEmpty(ans.data))
            dispatch({ type: _enchere_delete_success, payload: { ans: ans.data.response, message: ans.data.message } })
    } catch (error) {
        dispatch(enchere_error(error))
    }
}