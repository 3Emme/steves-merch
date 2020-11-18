import React from 'react';
import PropTypes from "prop-types";

function MerchCatalogue(props){
  return(
    <React.Fragment>
      {props.merchCatalogue.map((merchItem, index) =>
      <MerchItem name = {merchItem.name}
        description = {merchItem.description}
        quantity = {merchItem.quantity}
        key = {index}/>
      )}
    </React.Fragment>
  );
}

MerchCatalogue.propTypes = {
  merchCatalogue: PropTypes.array
};


export default MerchCatalogue;