import { CREATE, UPDATE, DELETE, FETCH_ALL } from "../constants/actionTypes";

export default (postst = [], actions) => {
    switch (actions.type){
        case FETCH_ALL:
            return actions.payload;
        case CREATE:
            return [...postst, actions.payload];
        case UPDATE:
            return postst.map((postt) => (postt._id === actions.payload._id ? actions.payload : postt ));
        case DELETE:
            return postst.filter((postt)=> postt._id !== actions.payload);
        default:
            return postst;
    }
}