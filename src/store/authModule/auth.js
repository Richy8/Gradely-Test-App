import axios from "axios";
const api_version = "v2";
axios.defaults.baseURL = `https://apitest.gradely.ng/${api_version}`;

const state = {
    status: null,
    token: localStorage.getItem('gradelyAuthToken') || "",
    authUser: JSON.parse(localStorage.getItem('authUser') || "{}"),
};

const getters = {
    isAuthenticated: state => !!state.token,
    getAuthUser: state => state.authUser,
    getAuthToken: state => state.token

};

const actions = {
    //HANDLE USER SIGNUP
    async signupUser({
        commit
    }, data) {
        try {
            const url = `signup/${data.account_type}` // SETUP URL

            delete data.account_type // DELETE ACCOUNT TYPE PROPERTY FROM OBJECT

            let query = await axios.post(url, data)
            let response = query.data

            if (response.code === 200) {
                localStorage.setItem('gradelyAuthToken', response.data.token)
                commit('AUTH_SUCCESS', response.data);
            }

            return response;
        } catch (err) {
            localStorage.removeItem('gradelyAuthToken')
            commit('AUTH_ERROR')
            return err;
        }
    },


    // HANDLE USER LOGIN
    async loginUser({
        commit
    }, data) {
        try {
            const query = await axios.post('/login', data)
            const response = query.data

            //SET STATE IF VALIDATED PROPERLY
            if (response.code === 200) {
                localStorage.setItem('gradelyAuthToken', response.data.token)
                commit('AUTH_SUCCESS', response.data);
            }
            return response;
        } catch (err) {
            localStorage.removeItem('gradelyAuthToken')
            commit('AUTH_ERROR')
            return err;
        }

    },


    // HANDLE USER FORGET PASSWORD ACTION
    async sendResetLink(_, email) {
        try {
            const response = await axios.post('/forgot-password', email);
            return response.data
        } catch (err) {
            return err;
        }
    },


    // HANDLE USER PASSWORD RESET ACTION
    async resetPassword(_, data) {
        try {
            const response = await axios.post('/reset-password', data);
            return response.data
        } catch (err) {
            return err
        }
    },


    // HANDLE USER LOGOUT
    async logoutUser({
        commit
    }) {
        try {
            const token = localStorage.getItem("gradelyAuthToken");
            const query = await axios.post("/logout", null, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            let response = query.data;

            // REMOVE TOKEN FROM LOCAL STORAGE
            localStorage.removeItem('gradelyAuthToken');
            localStorage.removeItem('authUser');
            commit('AUTH_LOGOUT');

            return response;
        } catch (err) {
            return err;
        }
    },


    // GET USER BOARDING STATUS
    async getBoardingStatus() {
        try {
            const token = localStorage.getItem("gradelyAuthToken");
            console.log(token)
            const response = await axios.get("/general/boarding-status", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            return response.data
        } catch (error) {
            console.log(error)
            return error
        }
    },


    // UPDATE USER BOARDING STATUS
    async updateBoardingStatus({
        commit
    }) {
        const token = localStorage.getItem("gradelyAuthToken");
        try {
            const response = await axios.put("/general/update-boarding", {}, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            commit('BOARD_SUCCESS')
            return response.data

        } catch (error) {
            console.log(error)
            return error
        }
    },

};

const mutations = {
    AUTH_SUCCESS: (state, response) => {
        state.authUser = response
        state.status = "success"
        localStorage.setItem("authUser", JSON.stringify(state.authUser))
    },

    BOARD_SUCCESS: state => {
        state.authUser.is_boarded = 1
        localStorage.setItem("authUser", JSON.stringify(state.authUser))
    },

    AUTH_ERROR: state => {
        state.status = "error"
    },

    AUTH_LOGOUT: state => {
        state.status = ""
        state.token = ""
        state.authUser = {}
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}