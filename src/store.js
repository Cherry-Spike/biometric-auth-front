import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: 'white',
    SidebarBg: '',
    status: '',
    token: '',
    usuario: {
      id: 0,
      cargoDescricao: '',
      cargoId: 0,
      login: '',
      nivelDescricao: '',
      nivelId: 0,
      nome: '',
      sobrenome: '',
    },
  },
  mutations: {
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
    SET_CUSTOMIZER_DRAWER(state, payload) {
      state.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(state, payload) {
      state.SidebarColor = payload;
    },
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token) {
      state.status = 'success';
      state.token = token;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  actions: {
    login({ commit }, formData) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios
          .post(
            'https://biometric-auth-api.herokuapp.com/v1/autenticacao',
            formData,
            {
              headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
              },
            }
          )
          .then((resp) => {
            const token = resp.data.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            this.state.usuario.login = formData.get('login');
            commit('auth_success', token);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        resolve();
      });
    },
    obterUsuarioPorLogin({ commit }, username) {
      return new Promise((resolve) => {
        axios
          .get({
            url: 'https://biometric-auth-api.herokuapp.com/v1/usuario/{login',
            data: { login: username },
          })
          .then((result) => {
            commit('obterUsuarioPorId');
            this.state.usuario = result.data.data;
            resolve();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
    obterUsuario: (state) => state.usuario,
  },
});
