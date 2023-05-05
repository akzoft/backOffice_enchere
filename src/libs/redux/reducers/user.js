import { _user_auth_success, _user_clear_errors, _user_delete_success, _user_errors, _user_get_success, _user_gets_success, _user_loading, _user_login_success, _user_logout, _user_register_success, _user_update_success } from "../constants/constants"

const init = {
    isAuth: false,
    host: null,
    user: null,
    users: [],
    message: null,
    errors: null,
    loading: false
}

const userReducer = (state = init, action) => {
    switch (action.type) {

        case _user_loading: return { ...state, loading: true, errors: null }
        case _user_errors: return { ...state, loading: false, errors: action.payload }


        case _user_auth_success:
        case _user_login_success: return { ...state, loading: false, errors: null, host: action.payload.ans, isAuth: true }

        case "_user_auth_fail":
        case "_user_login_fail": return { ...init }

        case _user_logout: return { ...init, message: action.payload.message };

        case _user_register_success: return { ...state, loading: false, errors: null, users: [...state.users, action.payload.ans], message: action.payload.message }

        case _user_update_success:
            const updatedUsers = state.users.map(user => {
                if (user._id === action.payload.ans?._id) { return { ...user, ...action.payload.ans } }
                return user
            })
            return { ...state, loading: false, errors: null, users: updatedUsers }

        case _user_delete_success:
            const filteredUsers = state.users.filter(user => user._id !== action.payload.ans?._id)
            return { ...state, loading: false, errors: null, users: filteredUsers }

        case _user_get_success: return { ...state, loading: false, errors: null, user: action.payload.ans, message: action.payload.message }

        case _user_gets_success: return { ...state, loading: false, errors: null, users: action.payload.ans, message: action.payload.message }

        case _user_clear_errors: return { ...state, errors: null, };

        default:
            return state;
    }
}

export default userReducer