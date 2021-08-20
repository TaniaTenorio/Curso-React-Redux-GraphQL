import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import userReducer, { restoreSessionAction } from './userDuck'
import charsReducer, {
  getCharactersAction,
  restoreFavsAction,
} from './charsDuck'
import thunk from 'redux-thunk'

let rootReducer = combineReducers({
  user: userReducer,
  characters: charsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore() {
  let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  // fetch characters for the first time
  getCharactersAction()(store.dispatch, store.getState)

  // fetch user data from local storage if it has already logged in
  restoreSessionAction()(store.dispatch)

  // fetch favorites from local storage is user is logged in
  restoreFavsAction()(store.dispatch)
  return store
}
