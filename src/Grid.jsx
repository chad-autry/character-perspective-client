import React from "react";
import GridItem from "./GridItem.jsx";

const Grid = class Grid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let cells = [];
    //Iterate over the view cells and render them from the map data
    for (let i = 0; i < this.props.gridWidth; i++) {
      let columns = [];
      for (let j = 0; j < this.props.gridHeight; j++) {
        columns.push(
          <td
            key={i + ":" + j}
            style={{
              width: "20px",
              height: "20px",
              border: "1px solid black",
              textAlign: "center"
            }}>
            <GridItem icon={this.props.gridData[i][j].iconString} />
          </td>
        );
      }
      cells.push(
        <tr key={"row" + i} style={{ border: "1px solid black" }}>
          {columns}
        </tr>
      );
    }
    return (
      <table
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          borderCollapse: true,
          border: "1px solid black",
          tableLayout: "fixed"
        }}>
        <tbody>{cells}</tbody>
      </table>
    );
  }
};

export default Grid;
