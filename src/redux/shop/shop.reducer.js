// import { SHOP_DATA } from "./shop.data";
import ShopActionTypes from "./shop.types";

const initialState = {
  collections: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
