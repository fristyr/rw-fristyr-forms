import React from "react";
import countries from "../data/countries";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      repeatPassword: "",
      country: "1",
      gender: "male",
      agree: true
    };
  }

  onSubmit = event => {
    event.preventDefault();
    console.log(this.username.value, this.password.value);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onChangeAgree = event => {
    console.log(event.target.checked);
    this.setState = ({
      [event.target.name]: event.target.checked 
    })
  };

  getOptionItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              ref={node => (this.username = node)}
              value={this.state.username}
              onChange={this.onChange}
              name="username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Password"
              ref={node => (this.password = node)}
              value={this.state.password}
              onChange={this.onChange}
              name="password"
            />
          </div>
          <div className="form-group">
            <label>Repeat password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Repeat Password"
              ref={node => (this.repeatPassword = node)}
              value={this.state.repeatPassword}
              onChange={this.onChange}
              name="repeatPassword"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Countries</label>
            <select
              className="form-control"
              id="country"
              value={this.state.country}
              name="country"
              onChange={this.onChange}
            >
              {this.getOptionItems(countries)}
            </select>
          </div>
          <fieldset className="form-group">
            <div>Gender</div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </fieldset>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="agree"
              name="agree"
              value={this.state.agree}
              onChange={this.onChangeAgree}
              checked={this.state.agree}
            />
            <label className="form-check-label" htmlFor="agree">
              Agree
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
