import React from 'react';
import PropTypes from "prop-types";
import MerchItem from "./MerchItem";
import Scarf from "../src/Img/scarf.png"
 

const MerchCatalogueItems = [
  {
    name : "Scarf",
    description : "Soft and fuzy",
    quantity : 4,
    image:{Scarf} 
  },
  {
    name: "Hat",
    description:"It covers your head ",
    quantity : 16
  },
  {
    name : "Profile picture",
    description : "Put this on your mantle",
    quantity : 23
  }
]



function MerchCatalogue(props){
  return(
    <React.Fragment>
      <h3>Placeholder catalogue</h3>
      {MerchCatalogueItems.map((merchItem, index) =>
      <MerchItem name = {merchItem.name}
        description = {merchItem.description}
        quantity = {merchItem.quantity}
        image = {merchItem.image}
        key = {index}/>
      )}
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