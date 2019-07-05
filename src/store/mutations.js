import {REQUEST,REQ_SUCCESS,REQ_ERROR}  from './mutations-types'
export default {
  [REQUEST](state){
    state.firstView = false
    state.loading = true
  },
  [REQ_SUCCESS](state,users){
    state.loading = false
    state.users = users
  },
  [REQ_ERROR](state,err){
    state.loading = false
    state.errMsg = err
  }
}
