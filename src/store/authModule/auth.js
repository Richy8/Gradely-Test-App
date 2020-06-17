import axios from "axios";
const api_version = "v1";
axios.defaults.baseURL = `http://apitest.gradely.ng/${api_version}`;

const state = {
    authUser: {},
    authToken: ''
};

const getters = {
    // getUser
};

const actions = {
    // HANDLE USER LOGIN
    async loginUser({
        commit
    }, loginData) {
        try {
            const response = await axios.post('/auth/login', loginData)
            commit('VALIDATE_USER', response);
            // console.log(response);
            return response
        } catch (err) {
            console.log(err);
        }

    },

    async sendResetLink() {},

    async resetPassword() {},

};

const mutations = {
    VALIDATE_USER: (state, response) => {
        state.user = response.data
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}