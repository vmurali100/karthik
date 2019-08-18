import React, { Component } from "react";
import axios from "axios";
export default class Comp3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: [],
      editUser: {
        subjectName: ""
      }
    };
    console.log("constructor is Called");
    // this.editUser = this.editUser.bind(this);
  }
  editUser = user => {
    console.log(user);
    this.setState({ editUser: user });
  };
  render() {
    console.log("Render  is Called");

    return (
      <div>
        <h2>All Subjects</h2>
        <ul>
          {this.state.subjects.map((obj, i) => {
            return (
              <li key={i}>
                {obj.subjectName}
                <button
                  onClick={() => {
                    this.editUser(obj);
                  }}
                >
                  Edit
                </button>
                <button onClick={this.deleteUser}>Delete</button>
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          name="subjectName"
          id=""
          value={this.state.editUser.subjectName}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <button onClick={this.updateSubject}>Update</button>
      </div>
    );
  }
  updateSubject = () => {
    console.log(this.state.editUser);
    axios
      .put(
        "http://localhost:3000/allSubjects/" + this.state.editUser.id,
        this.state.editUser
      )
      .then(response => {
        console.log(response);
      });
  };
  handleChange = e => {
    let subject = this.state.editUser;
    subject[e.target.name] = e.target.value;
    this.setState({ editUser: subject });
  };

  componentDidMount() {
    axios.get("http://localhost:3000/allSubjects").then(res => {
      console.log(res.data);
      this.setState({ subjects: res.data });
    });
  }

  deleteUser = () => {
    console.log(this.state.editUser);
  };
}
