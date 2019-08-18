import React, { Component } from "react";
import Comp2 from "./Comp2";

export default class Comp1 extends Component {
  constructor(props) {
    super(props);

    this.state = { obj, arra, editUser: {} };
  }

  render() {
    return (
      <div>
        <h2>Hello World !! I am from React Statefull Component</h2>
        <Comp2
          val={this.state.obj}
          arr={this.state.arra}
          edit={this.editUserInParent}
          del={this.deleteUserInParent}
          editUserInfo={this.state.editUser}
        />
      </div>
    );
  }

  editUserInParent = i => {
    console.log(this.state.arra[i]);
    this.setState({ editUser: this.state.arra[i] });
  };

  deleteUserInParent = i => {
    console.log(this.state.arra[i]);
    this.state.arra.splice(i, 1);
    this.setState({ arra: this.state.arra });
  };
}

let obj = {
  fname: "Lise",
  lname: "Sobczak",
  tel: "(495)374-8699",
  address: "1375 Consectetur Ln",
  city: "Wichita",
  state: "MO",
  zip: 86618
};
let arra = [
  {
    fname: "Erika",
    lname: "Branscombe",
    tel: "(601)444-4728",
    address: "6035 Risus Ave",
    city: "Wahiawa",
    state: "ME",
    zip: 36946
  },
  {
    fname: "Geoffrey",
    lname: "Peck",
    tel: "(154)361-4773",
    address: "9084 Mi Dr",
    city: "Dayton",
    state: "UT",
    zip: 43601
  },
  {
    fname: "Tony",
    lname: "Leonard",
    tel: "(877)063-0693",
    address: "4860 Adipiscing Ct",
    city: "Joliet",
    state: "GA",
    zip: 99940
  },
  {
    fname: "Sonya",
    lname: "Sheppard",
    tel: "(752)206-2385",
    address: "121 Velit Ct",
    city: "Barrington",
    state: "TX",
    zip: 37161
  },
  {
    fname: "Mario",
    lname: "Chaudary",
    tel: "(150)083-2234",
    address: "1458 Odio Ave",
    city: "Ogden",
    state: "MS",
    zip: 32324
  }
];
