import React from 'react';
import PropTypes from "prop-types";
import MerchItem from "./MerchItem";
import Scarf from "./../../src/Img/scarf.png";
import Hat from "./../../src/Img/hat.png"
import Photo from "./../../src/Img/photo.jpg"

 

const MerchCatalogueItems = [
  {
    name : "Scarf",
    description : "Soft and fuzy",
    quantity : 4,
    image: Scarf 
  },
  {
    name: "Hat",
    description:"It covers your head ",
    quantity : 16,
    image: Hat
  },
  {
    name : "Profile picture",
    description : "Put this on your mantle",
    quantity : 23,
    image: Photo
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