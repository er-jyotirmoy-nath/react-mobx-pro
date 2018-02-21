import axios from 'axios';

//Thunk is Higher order Function
export const fetchtmv2All = ()=> (dispatch,getState)=>{
  let params = new URLSearchParams();
  params.append('filter','yes');
  axios.post('https://wrcnsf.com/listings/php/tmv2_app.php',params)
  .then((value) => {
        dispatch({
          type:'FETCH_TMV2_ALL',
          payload:value.data
        })
      }).catch((err) => {
        console.log(err);
      });
}
export const fetchtmv2Details = (id)=>(dispatch,getState)=>{
  axios.get('https://wrcnsf.com/listings/php/tmv2Details.php?BUILD_APP_ID='+id)
      .then((value) => {
        dispatch({
          type:"FETCH_TMV2_DETAIL",
          payload:value.data
        });
      }).catch((err) => {console.error(err);});
}




export const fetchDtcDetails = (id)=>(dispatch,getState)=>{

}
export const fetchCiasDetails = (id)=>(dispatch,getState)=>{

}
export const fetchCertDetails = (id)=>(dispatch,getState)=>{

}
