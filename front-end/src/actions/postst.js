import * as api from '../api/index.js';
import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionTypes.js';

export const getPostst = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPostst();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const createPostt = (postt) => async (dispatch) => {
    try {
        const { data } = await api.createPostt(postt);

        dispatch({ type: CREATE, payload: data });
        console.log("berhasil menambahkan")
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePostt = (id, postt) => async (dispatch) => {
    try {
        const { data } = await api.updatePostt(id, postt);

        dispatch({ type: UPDATE, payload: data });
        console.log("berhasil edit data")
    } catch (error) {
        console.log(error.message)
    }
};

export const deletePostt = (id) => async (dispatch) => {
    try {
        await api.deletePostt(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error)
    }
};