import { createStore } from 'vuex'

export default createStore({
  state: {
    loggedIn:false
  },
  getters: {
  },
  mutations: {
    setLogged(state,payload){
      state.loggedIn = payload
    }
  },
  actions: {
    async registerUser({commit},newUser){
      let {data} = await axios.post(baseUrl+'/users',newUser)
      alert(data.msg)
      window.location.reload()
    },
    async loginUser({commit}, user){
      // console.log(user);
      let {data} = await axios.post(baseUrl+'/login',user)
      alert(data.msg)
      commit('setLogged',true)
      // window.location.reload()
     }
  },
  modules: {
  }
})
