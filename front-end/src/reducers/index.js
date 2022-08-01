import {combineReducers} from "redux";

import postsp from "./postsp";
import auth from "./auth";
import posts from "./posts";
import postst from "./postst";

export default combineReducers({ postsp, auth, posts, postst });