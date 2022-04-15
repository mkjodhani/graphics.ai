import { userActionsLabels } from "./actionNames"
const logIn = ({ email, displayName, photoURL, lastLoginAt }) => {
    return async function (dispatch, getState) {
        dispatch({
            type: userActionsLabels.USER_LOGIN, payload: {
                user: { email, displayName, photoURL, lastLoginAt }
            }
        })
    }
}
const logOut = () => {
    return async function (dispatch, getState) {
        dispatch({type: userActionsLabels.USER_LOGOUT})
    }
}
export const userActions = {
    logIn, logOut
}