import React, { Component } from "react";

export default class Comp2 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log(props);
    props.val.fname = "Murali";
  }
  editUser = i => {
    console.log("editUser called");
    this.props.edit(i);
  };
  deleteUser = i => {
    console.log("deleteUser called");
    this.props.del(i);
  };
  render() {
    return (
      <div>
        <h2>I am from Comp2</h2>
        {/* {Object.keys(this.props.val).map((property, index) => {
          return <p key={index}>{this.props.val[property]}</p>;
        })} */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {this.props.arr.map((obj, i) => {
              return (
                <tr key={i}>
                  {Object.keys(obj).map((property, j) => {
                    return <td key={j}>{obj[property]}</td>;
                  })}
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        this.editUser(i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteUser(i);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
