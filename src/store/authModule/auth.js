import axios from "axios";
const api_version = "v2";
axios.defaults.baseURL = `https://apitest.gradely.ng/${api_version}`;

const state = {
    authUser: {},
};

const getters = {
    getAuthToken: (state) => {
        return state.authUser.token
    }
};

const actions = {
    //HANDLE USER SIGNUP
    async signupUser(_,data){
        const url = `signup/${data.userType}`;
        const response = await axios.post(url,data)
        return response;
    },


    // HANDLE USER LOGIN
    async loginUser({
        commit
    },data) {
        try {
            const query = await axios.post('/login',data)
            const response = query.data

            //SET STATE IF VALIDATED PROPERLY
            if (query.status == 200) {
                commit('VALIDATE_USER', response);
            }

            return query;
        } catch (err) {
            console.log('failed');
        }

    },
    async updateBoardingStatus(){
        const token = localStorage.getItem("gradelyAuthToken");
        console.log(token);
        const query =  await axios.put("/general/update-boarding",null,{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return query
        
    },
    async sendResetLink(_,email) {
        try {
            const response =  await axios.post('/forgot-password',{email});
            return response
        } catch (err) {
            console.log(err)
        }
    },

    async resetPassword(_,data) {
        const token = localStorage.getItem('gradelyAuthToken');
        try {
            const response =  await axios.post('/reset-password',{...data,token});
            return response
        } catch (err) {
            console.log(err)
        }
    },

    logout({ commit }){
        localStorage.removeItem('gradelyAuthToken')
        let response = {
            data: null
        }
        commit('VALIDATE_USER',response)
    }

};

const mutations = {
    VALIDATE_USER: (state, response) => {
        state.authUser = response.data
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}