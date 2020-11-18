import React from 'react';
import MerchCatalogue from "./MerchCatalogue";
import CheckoutCart from "./CheckoutCart";

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      merchCatalogueVisibleOnPage: true,
      checkoutCartVisibleOnPage: false
    };
    this.handleCheckoutCartClick = this.handleCheckoutCartClick.bind(this);
  }
  handleCheckoutCartClick = () => {
    this.setState({merchCatalogueVisibleOnPage: false,
                  checkoutCartVisibleOnPage: true});
  }

  render() {
    let currentVisibleState = null;
    let checkoutCartButton = null;

    if (this.state.checkoutCartVisibleOnPage){
      currentVisibleState = <CheckoutCart />;
    } else {
      currentVisibleState = <MerchCatalogue />;
      checkoutCartButton = <button onClick={this.handleCheckoutCartClick}>Checkout</button>
    }
    return (
      <React.Fragment>
        {currentVisibleState}
      </React.Fragment>
    );
  }
}

export default MerchControl;