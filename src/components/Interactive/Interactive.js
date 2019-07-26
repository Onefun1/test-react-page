import React from "react";

import Field from "./Field";

import "../Interactive/Interactive.css";

class Interactive extends React.Component {
  constructor() {
    super();
    let randomCombination = [];
    for (let i = 0; i < 5; i++) {
      let randomArr = [];

      while (randomArr.length < 5) {
        let number = Math.floor(Math.random() * 100);
        if (number > 0 && number <= 20 && !randomArr.includes(number)) {
          randomArr.push(number);
        }
      }

      randomCombination.push(
        randomArr.sort(function compareNumbers(a, b) {
          return a - b;
        })
      );
    }

    this.state = {
      fieldBase: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      ],
      validBase: true,
      selectedCells: [[], [], [], [], []],
      winCombitation: randomCombination,
      count: 0
    };
  }

  addCell = (index, value) => {
    const { selectedCells } = this.state;
    selectedCells[index].push(value);
  };

  removeCell = (index, value) => {
    const { selectedCells } = this.state;

    let newCelectedCells = selectedCells[index].filter(cell => {
      return cell !== value;
    });
    this.setState(pervState => {
      return (pervState.selectedCells[index] = newCelectedCells);
    });
  };

  toggleStatus = (status, id) => {
    this.setState({
      validBase: status
    });
  };

  checkWinCombination = () => {
    const { selectedCells, winCombitation } = this.state;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (selectedCells[i].includes(winCombitation[i][j])) {
          this.setState({
            count: this.state.count + 1
          });
        }
      }
    }
  };

  render() {
    const { fieldBase, validBase, selectedCells, winCombitation } = this.state;
    return (
      <div className="interactive__container">
        <div className="combination">
          <span>Win combination</span>
          {winCombitation.map((item, index) => (
            <div key={index + 'block"'} className="combination__block">
              {item.map(cell => {
                return (
                  <span
                    key={cell + index + "block--item"}
                    className="combination__block--item"
                  >
                    {cell}
                  </span>
                );
              })}
            </div>
          ))}
        </div>

        <h3 className="interactive__container-title">Electronic Lottery</h3>
        {validBase ? (
          ""
        ) : (
          <span style={{ color: "red", fontSize: "20px" }}>
            You can choose only five cells in one field
          </span>
        )}
        <div className="interactive__container-tiket">
          {fieldBase.map((field, index) => {
            return (
              <Field
                key={index + "field"}
                valid={validBase}
                field={field}
                id={index}
                addCell={this.addCell}
                removeCell={this.removeCell}
                selectedCells={selectedCells}
                toggleStatus={this.toggleStatus}
              />
            );
          })}
        </div>
        <span onClick={this.checkWinCombination} className="check-button">
          Check
        </span>
      </div>
    );
  }
}

export default Interactive;
