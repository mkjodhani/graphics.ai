import { userActionsLabels } from "../actions/actionNames";
const initialUserState = {
    isLogIn: false,
    userInfo: null
}
export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case userActionsLabels.USER_LOGIN:
            return ({ isLogIn: true, userInfo: action.payload.user })
        case userActionsLabels.USER_LOGOUT:
            return ({ isLogIn: false })
        default:
            return state;
    }
}