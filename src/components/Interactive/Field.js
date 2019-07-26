import React from "react";

import Cell from "./Cell";

import "./Interactive.css";

class Field extends React.Component {
  state = {
    valid: true
  };

  validator = (id, marker) => {
    const { selectedCells, toggleStatus } = this.props;
    console.log(selectedCells[id].length);

    if (selectedCells[id].length > 5 && !marker) {
      this.setState({
        valid: false
      });
    } else {
      this.setState(prevState => {
        return (prevState.valid = true);
      });
    }
    toggleStatus(this.state.valid, id);
  };

  render() {
    const {
      field,
      id,
      selectedCells,
      addCell,
      removeCell,
      validBase
    } = this.props;
    return (
      <>
        <div
          className={
            this.state.valid
              ? "interactive__container-tiket-field"
              : "interactive__container-tiket-field alert"
          }
        >
          {field.map(item => {
            return (
              <Cell
                key={item + "cell"}
                onClick={() => this.toggleMarker(id, item)}
                item={item}
                id={id}
                addCell={addCell}
                removeCell={removeCell}
                selectedCells={selectedCells}
                validator={this.validator}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Field;
