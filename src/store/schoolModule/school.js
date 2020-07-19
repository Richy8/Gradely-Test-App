import axios from "axios";
const api_version = "v2";
axios.defaults.baseURL = `https://apitest.gradely.ng/${api_version}`;

const state = {};

const getters = {};

const actions = {
    // GET CLASSES IN A SCHOOL
    async getClasses() {
        try {
            const token = localStorage.getItem("gradelyAuthToken");
            let query = await axios.get("/school/classes", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            let response = query.data

            return response;
        } catch (err) {
            console.log(err);
        }
    },
};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}