import React, { Component } from "react";
import "../Auth/Signin";
import ReduxForm from "../ReduxForm/ReduxForm.js";
import Fallfowardpage from "../FallFowardPage/fallfowardpage";
import requireAuth from "../Auth/requireAuth";
import server from "../../apis/server";

export class DatePick extends Component {
  onSubmit(formValues) {
    // console.log(formValues);
    // // let bbb = formValues;
    // const signUp = async () => {
    //   const response = await server.post("/signup", formValues);
    //   console.log(response.data);
    // };
    // signUp();
    console.log(formValues);
  }

  dateDefault() {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    let today = year + "-" + month + "-" + day;

    return `${today}`;
  }
  sendCookie = async () => {
    try {
      const resp = server.get("/cookie", { withCredentials: true });

      console.log(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="main-body">
        <Fallfowardpage showWisdom={true} />
        <div>
          <ReduxForm
            initialValues={{ date: this.dateDefault() }}
            onSubmit={this.onSubmit}
          />
        </div>
        <button onClick={this.sendCookie}>Click Me</button>
      </div>
    );
  }
}

export default requireAuth(DatePick);
