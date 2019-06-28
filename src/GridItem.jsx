import React from "react";
import Icon from "react-awesome-svg/src/Icon.jsx";
import JsxParser from "react-jsx-parser";

const GridItem = class GridItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <JsxParser components={{Icon}} jsx={this.props.icon} />;
  }
};

export default GridItem;
