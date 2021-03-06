import axios from 'axios';
import C from './constants';
const baseUrl = "https://treco-admin-backend-service.herokuapp.com/api";
//Thunk is Higher order Function
export const fetchAllNews = ()=> (dispatch,getState)=>{
  dispatch({
    type:C.ADD_STATUS,
    payload:'...Loading....'
  });
  axios.get(baseUrl+'/news_tables')
  .then((value) => {
        dispatch({
          type:C.FETCH_ALL_NEWS,
          payload:value.data
        })
      })
  .then((value)=>{
    dispatch({
      type:C.CLEAR_STATUS
    })
  })
  .catch((err) => {
        console.log(err);
      });
}
export const fetchNewsImage = (id)=>(dispatch,getState)=>{
  axios.get(baseUrl+'/news_tables')
      .then((value) => {
        dispatch({
          type:"FETCH_TMV2_DETAIL",
          payload:value.data
        });
      }).catch((err) => {console.error(err);});
}

export const saveNews = (send_data) => (dispatch,getState)=>{
   dispatch({
    type:C.ADD_STATUS,
    payload:'...Loading....'
  });
  let params = {
  "title": send_data.title,
  "content": send_data.content,
  "image_url": send_data.image_url,
  "visible": send_data.visible,
  "date_news": send_data.date_news
  };
  axios.post(baseUrl+'/news_tables',params)
  .then((value) => {
    dispatch(fetchAllNews());
  })
  .then((value)=>{
    dispatch({
      type:C.CLEAR_STATUS
    })
  })
  .catch((err) => {
    console.error(err);
  })
}

export const deleteNews = (id)=>(dispatch,getState)=>{
  axios.delete(baseUrl+'/news_tables/'+id)
  .then((value) => {
    dispatch(fetchAllNews());
  })
  .catch((err) => {
    console.error(err);
  })
}
