import React from 'react';
import PropTypes from "prop-types";

function MerchItem(props){
  return(
    <React.Fragment>
      <h3>Exeample</h3>
      <h3>{props.name}</h3>
      <h3>{props.description}</h3>
      <h3>{props.quantity}</h3>
    </React.Fragment>
  );
}

MerchItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number.isRequired
};

export default MerchItem;