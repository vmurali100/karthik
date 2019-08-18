import React, { Component } from "react";

export default class Comp2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editUser: {}
    };
  }
  editUser = obj => {
    console.log(obj);
    this.setState({ editUser: obj });
  };
  deleteUser = i => {
    this.props.del(i);
  };
  handleChange = e => {
    editUserInfo = this.state.editUser;
    editUserInfo[e.target.name] = e.target.value;
    this.setState({ editUser: editUserInfo });
  };
  updateUser = () => {
    console.log(this.state.editUser);
  };
  render() {
    return (
      <div>
        <h2>I am from Comp2</h2>
        {/* {Object.keys(this.props.val).map((property, index) => {
          return <p key={index}>{this.props.val[property]}</p>;
        })} */}
        <div className="row">
          <div className="col-sm-8 text-left">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Tel</th>
                  <th scope="col">Address</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                  <th scope="col">Zip</th>
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
                            this.editUser(obj);
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
          <div className="col-sm-4 text-left">
            <form>
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  name="fname"
                  value={this.state.editUser.fname}
                  onChange={this.handleChange}
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  name="lname"
                  value={this.state.editUser.lname}
                  onChange={this.handleChange}
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fname">Tel</label>
                <input
                  type="text"
                  className="form-control"
                  id="tel"
                  name="tel"
                  placeholder="Enter Tel"
                  value={this.state.editUser.tel}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  placeholder="Enter Address"
                  value={this.state.editUser.address}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  placeholder="Enter City Name"
                  value={this.state.editUser.city}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  placeholder="Enter State Name"
                  value={this.state.editUser.state}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  name="zip"
                  placeholder="Zip"
                  value={this.state.editUser.zip}
                  onChange={this.handleChange}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={this.updateUser}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

let editUserInfo = {
  fname: "",
  lname: "",
  tel: "",
  address: "",
  city: "",
  state: "",
  zip: null
};
