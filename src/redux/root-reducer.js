import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// localStorage
import storage from "redux-persist/lib/storage";

// because user is handled by Firebase we pass only cart
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
