import axios from 'axios'
import {REQUEST,REQ_SUCCESS,REQ_ERROR}  from './mutations-types'
export default{
  async search({commit},name){
    commit(REQUEST)
    try{
      const url = "https://api.github.com/search/users";
      const response = await axios.get(url,{
         params:{
            q:name
         }
      })
      const result = response.data.items
      const users = result.map(item=>({
          login:item.login,
          html_url:item.html_url,
          avatar_url:item.avatar_url
      }))
      commit(REQ_SUCCESS,users)
      }catch(err){
        commit(REQ_ERROR,err.message)
      }
  }
}
