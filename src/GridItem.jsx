import React from "react";
/*Importing Icon here, expect it to be push in the string */
import Icon from "../node_modules/react-awesome-svg/src/Icon.jsx"; // eslint-disable-line no-unused-vars
import JsxParser from "react-jsx-parser";

const GridItem = class GridItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <JsxParser jsx={this.props.icon} />;
  }
};

export default GridItem;
