import React from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Interactive from "../Interactive/Interactive";
import Footer from "../Footer/Footer";

import "./App.css";

class App extends React.Component {
  state = {
    shopingList: [],
    goods: Array(8).fill(null)
  };

  removeFromBacket = id => {
    const updateList = this.state.shopingList.filter(function(item) {
      return item !== id;
    });

    this.setState({
      shopingList: updateList
    });
  };

  addToBacket = id => {
    if (this.state.shopingList.includes(id)) {
      return;
    }
    this.setState({
      shopingList: [...this.state.shopingList, id]
    });
  };

  // handleclick = e => {
  //   console.log(e.target);
  //   const { inBasket } = this.state;
  //   this.setState({
  //     inBasket: !inBasket
  //   });
  //   this.setState({});
  // };

  render() {
    const { goods, inBasket } = this.state;
    let goodsList = goods.map((item, index) => {
      return (
        <Main
          key={index}
          inBasket={inBasket}
          // click={e => this.handleclick(e)}
          itemId={index}
          addToBacket={this.addToBacket}
          removeFromBacket={this.removeFromBacket}
        />
      );
    });
    return (
      <div className="App">
        <Header shopingList={this.state.shopingList} />
        {<div className="goodsList">{goodsList} </div>}
        <Interactive />
        <Footer />
      </div>
    );
  }
}

export default App;
