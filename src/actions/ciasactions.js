import axios from 'axios';



export const fetchciasAll = ()=> (dispatch,getState)=>{

  axios.get('https://wrcnsf.com/listings/php/ciasDetails.php?getciasfiles=get')
          .then((value) => {
            dispatch({
              type:'FETCH_CIAS_ALL',
              payload:value.data
            })
          }).catch((err) => {console.error(err);});
}
