import axios from 'axios';
import C from './constants';
const baseUrl = "https://murmuring-sea-84221.herokuapp.com/api";
//Thunk is Higher order Function
export const fetchAllNews = ()=> (dispatch,getState)=>{

  axios.get(baseUrl+'/news_tables')
  .then((value) => {
        dispatch({
          type:C.FETCH_ALL_NEWS,
          payload:value.data
        })
      }).catch((err) => {
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
