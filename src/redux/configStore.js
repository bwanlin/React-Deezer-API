import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'

// const logger = createLogger()

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore)

const configureStore = (initialState) => {
  const store = finalCreateStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers'))
    );
  }

  return store;
}

export default configureStore
