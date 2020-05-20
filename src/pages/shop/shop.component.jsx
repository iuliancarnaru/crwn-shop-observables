import React, { Component } from "react";
import { Route } from "react-router-dom";
import { firestore } from "../../firebase/firebase.utils";
import CollectionOverview from "../../components/collections-overview";
import CollectionPage from "../collection";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collection");
    collectionRef.onSnapshot(async snapshot => );
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
