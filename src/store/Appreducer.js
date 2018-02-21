import C from '../actions/constants';
import {combineReducers} from 'redux';

export const tmv2 = (state=[],action)=>{
  switch (action.type) {
    case C.FETCH_TMV2_ALL:
      return [
        ...state,
        action.payload
      ];
      break;
    case C.ADD_TMV2:
      return [
        ...state,
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

export const tmv3 = (state=[],action)=>{
  switch (action.type) {
    case C.FETCH_TMV3_ALL:
      return [
        ...state,
        action.payload
      ];
      break;
    case C.APPLY_TMV3_FILTER:
      let newtmv3 = [];let tempstate = state[0];
      if (action.payload.length > 0) {
        for(var i = 0; i < action.payload.length; i++) {
  				let filtername = action.payload[i];
  				  tempstate.filter((item) => {
  					if(item[filtername] == '1'){
  						newtmv3.push(item);
  					}
  				});
  			}
        return [newtmv3];
      }
      else{
        return state;
      }
    default:
      return state;
  }
}
export const tmv3file = (state={},action)=>{
  if (action.type==C.FETCH_TMV3_DETAIL) {
    return action.payload;
  }
  else {
    return state;
  }
}

export const ciasfile = (state={},action)=>{
  if (action.type==C.FETCH_CIAS_DETAIL) {
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

export const tmv3Filter = (state=[],action)=>{
    switch (action.type) {
      case C.ADD_FILTER_TMV3:
        return [
          ...state,
          action.payload
        ]
        break;
      case C.REMOVE_FILTER_TMV3:
        return state.filter(item => item!=action.payload)
        break;
      default:
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
    ciasfile
  }),
  dtcall:combineReducers({
    dtcfile
  }),
  pdcertall:combineReducers({
    pdcertfile
  })
})
