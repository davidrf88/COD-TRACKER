import { login  } from '~/services/userService'

export const state = () => ({
    user: null
  })

  export const getters = {
    GetUser (state) {
        return state.user;
    },
    GetState (state) {
      return state;
  },
  }

  export const mutations = {
    SetUser (state, userVal) {

      //state.user = userVal
    },

  }

  export const actions = {

    async login({ commit }, { username, password }) {
     
      return await login(commit, username, password);
    }
  }; //END ACTIONS


