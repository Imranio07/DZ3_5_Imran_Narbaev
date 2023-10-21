import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

import './index.css'
import App from './App'

const initialState = {
    counter: 0
}
//{type: 'INCREMENT'}
const counterReducer=(state=initialState, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {counter: state.counter+action.payload}
        case 'DECREMENT':
            return {counter: state.counter-1}
        default:
            return state
    }
}
const increaseCounter = ()=> {
    return {type:"DECREMENT"}
}
const store = createStore(counterReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)