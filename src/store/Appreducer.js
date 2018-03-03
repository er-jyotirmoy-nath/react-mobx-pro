import C from '../actions/constants';
import {combineReducers} from 'redux';

import {tmv3,tmv3file,tmv3Filter} from './tmv3Reducer';
import {ciasfiles,ciasfile} from './ciasReducer';
import {pdcertall,pdcertfile} from './pdcertreducer';
import {dtcfiles,dtcfile} from './dtcreducer';

export const news = (state=[],action)=>{
  switch (action.type) {
    case C.FETCH_ALL_NEWS:
      return [
        action.payload
      ];
      break;
    default:
    return state;
  }
}

export const newsimage = (state='',action)=>{
  if (action.type==C.FETCH_NEWS_IMAGE) {
    return action.payload;
  }
  else {
    return state;
  }
}




export const error = (state=[],action)=>{
  switch (action.type) {
    case C.ADD_ERROR:
      return [
        ...state,
        action.payload
      ]
      break;
    case C.CLEAR_ERROR:
      return [];
      break;
    default:
    return state;

  }
}

export const savestatus = (state='',action)=>{
  switch (action.type) {
    case C.ADD_SAVE_STATUS:
      return action.payload;
      break;

    default:
    return state;

  }
}

export default combineReducers({
  newsall:combineReducers({
    news,
    newsimage
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
    dtcfiles,
    dtcfile
  }),
  pdcertall:combineReducers({
    pdcertall,
    pdcertfile
  }),
  error,
  savestatus,
})
