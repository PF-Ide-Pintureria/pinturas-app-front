import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../redux/reducer/reducer'
import thunkMiddleware from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default store
