import React from 'react';
import PropTypes from "prop-types";
import MerchItem from "./MerchItem";

function MerchCatalogue(props){
  return(
    <React.Fragment>
      <h3>Placeholder catalogue</h3>
      {props.merchItemList.map((merchItem, index) =>
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