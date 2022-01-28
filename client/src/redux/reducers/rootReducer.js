import {combineReducers} from 'redux'
import adminReducer from './adminReducer'
import authorizerReducer from './authorizerReducer'
import organizationReducer from './organizationReducer'
import userReducer from './userReducer'
export const rootReducer = combineReducers({
    admin:adminReducer,
    organization:organizationReducer,
    authorizer:authorizerReducer,
    user:userReducer
})