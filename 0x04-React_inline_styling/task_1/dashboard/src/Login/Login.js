import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.formInput)} type="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input className={css(styles.formInput)} type="password" name="password"></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  appBody: {
    fontSize: "1rem",
    padding: "2em",
    height: "45%"
  },
  formInput: {
    margin: "10px"
  }
});

export default Login;
