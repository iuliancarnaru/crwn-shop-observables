import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  ({ collections }) => collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// when data was array
// export const selectCollection = (collectionUrlParam) =>
//   createSelector([selectShopCollections], (collections) =>
//     collections.find(
//       (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//   );

// after data normalisation (converted to object)
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
