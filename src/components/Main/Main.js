import React from "react";

import "./Main.css";

// img
import imac from "./images/imac.jpeg";
import activeStar from "./images/star-active.svg";
import star from "./images/star.svg";

class Main extends React.Component {
  state = {
    willBought: false
  };

  toggle = () => {
    let { removeFromBacket, addToBacket, itemId } = this.props;

    if (this.state.willBought) {
      removeFromBacket(itemId);
    } else {
      addToBacket(itemId);
    }

    this.setState({
      willBought: !this.state.willBought
    });
  };

  render() {
    return (
      <main>
        <div className="card" data-qa="card">
          <div className="card__imacImg">
            <img src={imac} alt="i-mac" />
          </div>
          <div className="card__title-block">
            <h2 className="font_style_tittle">
              Моноблок APPLE A1419 iMac 27" Retina 5K (MNED2UA/A)
            </h2>
            <p className="font_style_minimal">Код товара: 195434</p>
          </div>
          <div className="card__stars">
            <div className="card__star__section">
              <div>
                <img
                  className="card__star__section-star"
                  src={activeStar}
                  alt="star"
                />
              </div>
              <div>
                <img
                  className="card__star__section-star"
                  src={activeStar}
                  alt="star"
                />
              </div>
              <div>
                <img
                  className="card__star__section-star"
                  src={activeStar}
                  alt="star"
                />
              </div>
              <div>
                <img
                  className="card__star__section-star"
                  src={activeStar}
                  alt="star"
                />
              </div>
              <div>
                <img
                  className="card__star__section-star"
                  src={star}
                  alt="no-active star"
                />
              </div>
            </div>

            <div className="card__star-review font_style_minimal">
              Отзывов: 5
            </div>
          </div>
          <div className="card__price">
            <p className="font_style_minimal">Цена:</p>
            <p>
              <strong>69999 грн</strong>
            </p>
          </div>
          <div className="card__buy">
            {!this.state.willBought ? (
              <span onClick={this.toggle} className="card__buy-button">
                Купить
              </span>
            ) : (
              <span
                style={{ color: "red" }}
                onClick={this.toggle}
                className="card__buy-button"
              >
                В корзине
              </span>
            )}
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
