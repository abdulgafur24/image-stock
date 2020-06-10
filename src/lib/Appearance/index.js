import React, { Component } from "react";
import column from "../../res/images/column.svg";
import columnActive from "../../res/images/column-active.svg";
import grid from "../../res/images/grid.svg";
import gridActive from "../../res/images/grid-active.svg";

export default class Appearance extends Component {
  state = {
    type: "GRID",
  };

  componentDidMount() {
    const type = localStorage.getItem("Appearance");
    this.setState({
      type,
    });
  }

  render() {
    const { type } = this.state;
    return (
      <div className="Appearance">
        {type === "COLUMN" ? (
          <>
            <img className="Appearance__column" src={columnActive} alt="" />
            <img className="Appearance__grid" src={grid} alt="" />
          </>
        ) : (
          <>
            <img className="Appearance__column" src={column} alt="" />
            <img className="Appearance__grid" src={gridActive} alt="" />
          </>
        )}
      </div>
    );
  }
}
