import React from 'react';
import MerchCatalogue from "./MerchCatalogue";
import CheckoutCart from "./CheckoutCart";
import NewMerchForm from "./NewMerchForm";

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      merchCatalogueVisibleOnPage: true,
      checkoutCartVisibleOnPage: false,
      newMerchFormVisibleOnPage: false,
      masterMerchItemList: []
    };
    this.handleCheckoutCartClick = this.handleCheckoutCartClick.bind(this);
  }

  handleAddingNewMerchItemToList = (newMerchItem) => {
    const newMasterMerchItemList = this.state.masterMerchItemList.concat(newMerchItem);
    this.setState({masterMerchItemList: newMasterMerchItemList,
                  newMerchFormVisibleOnPage: false});
  }

  handleCheckoutCartClick = () => {
    this.setState({merchCatalogueVisibleOnPage: false,
                  checkoutCartVisibleOnPage: true});
  }
  handleNewMerchFormClick = () => {
    this.setState({newMerchFormVisibleOnPage: true,
                  merchCatalogueVisibleOnPage: false});
  }

  render() {
    let currentVisibleState = null;
    let checkoutCartButton = null;
    let newMerchFormButton = null;

    if (this.state.checkoutCartVisibleOnPage){
      currentVisibleState = <CheckoutCart />;
    } 
    else if (this.state.newMerchFormVisibleOnPage){
      currentVisibleState = <NewMerchForm onNewMerchItemCreation={this.handleAddingNewMerchItemToList}/>;
    } 
    else {
      currentVisibleState = <MerchCatalogue merchItemList={this.state.masterMerchItemList}/>;
      checkoutCartButton = <button onClick={this.handleCheckoutCartClick}>Checkout</button>
      newMerchFormButton = <button onClick={this.handleNewMerchFormClick}>Add Merch</button>
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        {checkoutCartButton}
        {newMerchFormButton}
      </React.Fragment>
    );
  }
}

export default MerchControl;