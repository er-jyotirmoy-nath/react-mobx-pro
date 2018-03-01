import axios from 'axios';
import C from './constants';
import {addErrors} from './errorhandler';
const baseUrl = "https://wrcnsf.com/listings/php/pdCertDetails.php";

export const fetchCertAll = () => (dispatch,getState)=>{
  axios.get(baseUrl+'?getpdcertfiles=get')
  .then((value) => {
    dispatch({
      type:C.FETCH_PDCERT_ALL,
      payload:value.data
    })
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
};

export const fetchCertDetails = (id)=>(dispatch,getState)=>{
  axios.get(baseUrl+'?BUILD_APP_ID='+id)
  .then((value) => {
    dispatch({
      type:C.FETCH_PDCERT_DETAIL,
      payload:value.data
    })
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
}
