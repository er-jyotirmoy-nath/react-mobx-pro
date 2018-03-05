import axios from 'axios';
import C from './constants';
const baseUrl = "https://murmuring-sea-84221.herokuapp.com/api";
//Thunk is Higher order Function
export const fetchAllBanners = ()=> (dispatch,getState)=>{

  axios.get(baseUrl+'/banner_tables')
  .then((value) => {
        dispatch({
          type:C.FETCH_ALL_BANNERS,
          payload:value.data
        })
      }).catch((err) => {
        console.log(err);
      });
}


export const saveBanner = (send_data) => (dispatch,getState)=>{
  let params = {
  "title": send_data.title,
  "image_url": send_data.image_url,
  "visible": send_data.visible
  };
  axios.post(baseUrl+'/banner_tables',params)
  .then((value) => {
    dispatch(fetchAllBanners());
  })
  .catch((err) => {
    console.error(err);
  })
}

export const deleteBanner = (id)=>(dispatch,getState)=>{
  axios.delete(baseUrl+'/banner_tables/'+id)
  .then((value) => {
    dispatch(fetchAllBanners());
  })
  .catch((err) => {
    console.error(err);
  })
}
