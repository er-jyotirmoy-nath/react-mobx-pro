import axios from 'axios';



export const fetchtmv3All = ()=> (dispatch,getState)=>{
  axios.get('https://wrcnsf.com/listings/php/tmv3Details.php?getTmv3Files=get')
  .then((value) => {
        dispatch({
          type:'FETCH_TMV3_ALL',
          payload:value.data
        })
      }).catch((err) => {
        console.log(err);
      });
}
export const fetchtmv3Details = (id)=>(dispatch,getState)=>{
  axios.get('https://wrcnsf.com/listings/php/tmv3Details.php?BUILD_APP_ID='+id)
  .then((value) => {
        dispatch({
          type:'FETCH_TMV3_DETAIL',
          payload:value.data
        });
      }).catch((err) => {
        console.log(err);
      });
}
export const addtoFilterTmv3 = (f)=>{
  return {
    type:'ADD_FILTER_TMV3',
    payload:f
  }
}

export const removetoFilterTmv3 = (f)=>{
  return {
    type:"REMOVE_FILTER_TMV3",
    payload:f
  }
}

export const applyFilterTmv3 = (f)=>{
  return {
    type:"APPLY_TMV3_FILTER",
    payload:f
  }
}
