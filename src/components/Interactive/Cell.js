import React from "react";

import "./Interactive.css";

class Cell extends React.Component {
  state = {
    marker: false
  };

  toggleMarkerCounter = () => {
    const { marker } = this.state;
    const { item, id, addCell, removeCell, validator } = this.props;

    if (!marker) {
      switch (id) {
        case 0:
          addCell(id, item);
          break;
        case 1:
          addCell(id, item);
          break;
        case 2:
          addCell(id, item);
          break;
        case 3:
          addCell(id, item);
          break;
        case 4:
          addCell(id, item);
          break;

        default:
          break;
      }
    } else {
      switch (id) {
        case 0:
          removeCell(id, item);
          break;
        case 1:
          removeCell(id, item);
          break;
        case 2:
          removeCell(id, item);
          break;
        case 3:
          removeCell(id, item);
          break;
        case 4:
          removeCell(id, item);
          break;

        default:
          break;
      }
    }
    this.setState({
      marker: !this.state.marker
    });
    validator(id, marker);
  };
  render() {
    return (
      <span
        onClick={this.toggleMarkerCounter}
        className={
          this.state.marker
            ? "interactive__container-tiket-field--cell marker"
            : "interactive__container-tiket-field--cell"
        }
      >
        {this.props.item}
      </span>
    );
  }
}

export default Cell;
