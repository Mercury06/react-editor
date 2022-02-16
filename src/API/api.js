import * as axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/todos';

export const todosAPI = {
    
    getTodos () {
        
        return axios.get ( baseURL)
        .then(response => {
            return response
        });
    },

    // getGender (gender) {
       
    //     return axios.get ( baseURL+`character?gender=${gender}`)
    //     .then(response => {
    //         return response
    //     });
    // },

    // getSpecies (species) {
       
    //     return axios.get ( baseURL+`character?species=${species}`)
    //     .then(response => {
    //         return response
    //     });
    // },

    // getStatus (status) {
        
    //     return axios.get ( baseURL+`character?status=${status}`)
    //     .then(response => {
    //         return response
    //     });
    // },


}





