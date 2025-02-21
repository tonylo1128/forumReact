import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
//for browser
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./reducer";

export default createStore( reducers, composeWithDevTools(applyMiddleware(thunk)),)