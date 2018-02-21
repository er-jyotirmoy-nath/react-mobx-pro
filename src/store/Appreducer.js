import C from '../actions/constants';
import {combineReducers} from 'redux';

import {tmv3,tmv3file,tmv3Filter} from './tmv3Reducer';
import {ciasfiles,ciasfile} from './ciasReducer';


export const tmv2 = (state=[],action)=>{
  switch (action.type) {
    case C.FETCH_TMV2_ALL:
      return [
        action.payload
      ];
      break;
    default:
    return state;
  }
}

export const tmv2file = (state={},action)=>{
  if (action.type==C.FETCH_TMV2_DETAIL) {
    return action.payload;
  }
  else {
    return state;
  }
}


export const dtcfile = (state={},action)=>{
  if (action.type==C.FETCH_DTC_DETAIL) {
    return action.payload;
  }
  else {
    return state;
  }
}

export const pdcertfile = (state={},action)=>{
  if (action.type==C.FETCH_PDCERT_DETAIL) {
    return action.payload;
  }
  else {
    return state;
  }
}



export default combineReducers({
  tmv2all:combineReducers({
    tmv2,
    tmv2file
  }),
  tmv3all:combineReducers({
    tmv3,
    tmv3file,
    tmv3Filter
  }),
  ciasall:combineReducers({
    ciasfiles,
    ciasfile
  }),
  dtcall:combineReducers({
    dtcfile
  }),
  pdcertall:combineReducers({
    pdcertfile
  })
})
