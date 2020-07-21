import axios from "axios";
const api_version = "v2";
axios.defaults.baseURL = `https://apitest.gradely.ng/${api_version}`;

const state = {
    classes: [],
    parents: []
};

const getters = {
    classList: state => state.classes,
    parentList: state => state.parents
};

const actions = {
    // GET CLASSES IN A SCHOOL
    async getClasses({
        commit
    }) {
        try {
            const token = localStorage.getItem("gradelyAuthToken");
            let query = await axios.get("/school/classes", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            let response = query.data
            commit('UPDATE_CLASSES', response)
            return response;

        } catch (err) {
            console.log(err);
        }
    },


    // GET SCHOOL PARENTS 
    async getParents({
        commit
    }) {
        try {
            const token = localStorage.getItem("gradelyAuthToken");
            let query = await axios.get("/school/parents", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            let response = query.data
            commit('UPDATE_PARENTS', response)
            return response;

        } catch (err) {
            console.log(err);
        }
    },

};

const mutations = {
    UPDATE_CLASSES: (state, response) => {
        state.classes = (response.data === null) ? [] : response.data
    },

    UPDATE_PARENTS: (state, response) => {
        state.parents = (response.data === null) ? [] : response.data
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}