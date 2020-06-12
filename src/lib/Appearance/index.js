import React, { Component } from "react";
import { connect } from "react-redux";
import column from "../../res/images/column.svg";
import columnActive from "../../res/images/column-active.svg";
import grid from "../../res/images/grid.svg";
import gridActive from "../../res/images/grid-active.svg";
import { changeAppearanceType } from "../../actions/images.action";

class Appearance extends Component {
  handleAppearanceChange = (type) => {
    const { changeAppearanceType } = this.props;
    changeAppearanceType(type);
  };

  render() {
    const { appearance } = this.props;
    return (
      <div className="Appearance">
        {appearance === "COLUMN" ? (
          <>
            <img className="Appearance__column" src={columnActive} alt="" />
            <img
              onClick={() => this.handleAppearanceChange("GRID")}
              className="Appearance__grid"
              src={grid}
              alt=""
            />
          </>
        ) : (
          <>
            <img
              onClick={() => this.handleAppearanceChange("COLUMN")}
              className="Appearance__column"
              src={column}
              alt=""
            />
            <img className="Appearance__grid" src={gridActive} alt="" />
          </>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appearance: state.images.appearance,
  };
}

export default connect(mapStateToProps, { changeAppearanceType })(Appearance);
