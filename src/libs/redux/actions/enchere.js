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
        console.log(error)
        dispatch({ type: _enchere_errors, payload: error?.response?.data?.message })
    }
}

// export const create_enchere = (data) => async (dispatch) => {
//     try {
//         dispatch(isLoading());
//         const token = Cookies.get("cookie")
//         const ans = await axios.post(`${api}/api/enchere`, data, { headers: { token } })

//         if (!isEmpty(ans.data))
//             dispatch({ type: _enchere_create_success, payload: { ans: ans.data.response, message: ans.data.message } })
//     } catch (error) {
//         dispatch(enchere_error(error))
//     }
// }


export const create_enchere = (files, data) => async (dispatch) => {
    try {
        dispatch(isLoading())

        const token = Cookies.get("cookie")

        const config_upload = { headers: { 'Content-Type': 'multipart/form-data' } }

        const response_upload = await axios.post(`${api}/api/enchere/upload_create`, files, config_upload)

        const config = { headers: { token } }
        console.log(data)
        const ans = await axios.post(`${api}/api/enchere/admin-create-enchere`, { ...data, medias: response_upload?.data?.response }, config)

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

export const update_enchere = (enchere_id, hostID, files, newsfiles, data) => async (dispatch) => {
    try {
        dispatch(isLoading())

        const token = Cookies.get("cookie")

        if (files !== null) {
            // const _parts = files?._parts
            if (newsfiles?.length !== 0) {
                console.log("first")
                const config_upload = { headers: { 'Content-Type': 'multipart/form-data' } }

                const response_upload = await axios.put(`${api}/api/enchere/upload_edit`, files, config_upload)

                const config = { headers: { token } }

                const response = await axios.put(`${api}/api/enchere/${enchere_id}/${hostID}`, { ...data, new_img: response_upload?.data?.response }, config)

                dispatch({ type: _enchere_update_success, payload: { enchere_id, ans: response?.data?.response } })
            }
        } else {
            const config = { headers: { token } }
            console.log("second")
            const response = await axios.put(`${api}/api/enchere/${enchere_id}/${hostID}`, data, config)
            console.log(response)
            dispatch({ type: _enchere_update_success, payload: { enchere_id, ans: response?.data?.response } })
        }
    } catch (error) {
        dispatch(enchere_error(error))
    }
}

export const update_enchere_actions = (data) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const token = Cookies.get("cookie")

        const ans = await axios.put(`${api}/api/enchere/${data?.id}/${data?.hostID}`, data, { headers: { token } })

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