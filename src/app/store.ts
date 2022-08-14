import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import authReducer from '../features/authentication/Login/auth-reducer';
import {appReducer} from './app-reducer';

let rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//types
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store;