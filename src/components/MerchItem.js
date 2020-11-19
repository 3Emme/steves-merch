import React from 'react';
import PropTypes from "prop-types";

function MerchItem(props){
  const thisNotStolenFromSkaTune = {
    background: "#36cfb6",
    color: "#000000",
    fontFamily: "Lexend-Exa",
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: "1.5em",
    position: "relative"
  }
  return(
    <React.Fragment>
      <div class="product-list-image-container">
        <h3>{props.image}</h3>
        <h3>{props.name}</h3>
        <h3>{props.description}</h3>
        <h3>{props.quantity}</h3>
      </div>
    </React.Fragment>
  );
}

MerchItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number.isRequired
};

export default MerchItem;