// import axiosWithAuth from '../utils/axiosWithAuth';
import Axios from 'axios';

// export const GET_CHEF_RECIPES = 'GET_CHEF_RECIPES';
// export const POST_CHEF_RECIPE = 'POST_CHEF_RECIPE';
// export const DELETE_CHEF_RECIPE = 'DELETE_CHEF_RECIPE';
// export const EDIT_CHEF_RECIPE = 'EDIT_CHEF_RECIPE';
export const CHEF_LOGIN = 'CHEF_LOGIN'

export const chefLogin = (userLog) => dispatch => {
    console.log('LOGGING FROM ACTION')
    Axios.post("https://simmr.herokuapp.com/api/chefs/login", userLog)
    .then(res => {
      console.log("user has logged in", res);
      localStorage.setItem("test-token", res.data.token);
      dispatch({ type: CHEF_LOGIN, payload: res.data.id })
    })
    .catch(err => {
      console.log("user FAILED to log in", err);
    });
    
};

// export const getChefRecipes = (id) => dispatch => {
//     axiosWithAuth()
//         .get(`/api/chefs/${id}/recipes`)
//         .then(res => {
//             console.log('getting chef recipes', res)
//             dispatch({ type: GET_CHEF_RECIPES, payload: res.data})
//         })
//         .catch(err => {
//             console.log('could not retrieve chef recipes', err)
//         })
// };

// // export const postChefRecipe = (recipe) => dispatch => {
// //     axiosWithAuth()
// //         .post('/api/recipes', recipe)
// //         .then(res => {
// //             console.log('new recipe posted', res)
// //             dispatch({ type: POST_CHEF_RECIPE, payload: recipe })
// //         })
// //         .catch(err => {
// //             console.log('could not post recipe', err)
// //         })
// // };

// export const deleteChefRecipe = (chefID, recipeID) => dispatch => {
//     axiosWithAuth()
//         .delete(`/api/chefs/${chefID}/recipes/${recipeID}`)
//         .then(res => {
//             console.log('recipe was deleted', res)
//             dispatch({ type: DELETE_CHEF_RECIPE, payload: recipeID})
//         })
// };

// export const editChefRecipe = (chefID, recipeEdit) => dispatch => {
//     axiosWithAuth()
//         .put(`/api/chefs/${chefID}/recipes/${recipeEdit.id}`)
//         .then(res => {
//             console.log('recipe was editted', res)
//             dispatch({ type: EDIT_CHEF_RECIPE, payload: recipeEdit})
//         })
//         .catch(err => {
//             console.log('could not edit recipe', err)
//         })
// }