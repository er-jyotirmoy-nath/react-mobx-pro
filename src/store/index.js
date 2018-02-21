import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
//Local Imports
import C from '../actions/constants';
import appreducer from './Appreducer';

const listingConsoleMessages =  store => next => action => {
  console.log(`
      Dispatched ${action.type}
      Original State
      ==============
      ${JSON.stringify(store.getState().tmv3all.tmv3Filter)}
    `);
  let result = next(action);
  console.log(`
    New state
    =========
    ${JSON.stringify(store.getState().tmv3all.tmv3Filter)}
    `);

  return result;
}

export default (initialstate={})=>{
  return applyMiddleware(thunk,listingConsoleMessages)(createStore)(appreducer,initialstate);
}
