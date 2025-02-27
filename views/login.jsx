const React = require('react');
const FrontLayout = require('./layouts/frontpage');

class Login extends React.Component {
  render() {

    let headerTitle = "Login | Tweedr";

    let loginURL = `/home`;
    let registerURL = `/register`;

    return (

      <FrontLayout title={headerTitle}>

        <h1>Login</h1>

        <form method="POST" action={loginURL}>
            <p>Name:</p>
            <input type={"text"} name={"name"} required/>
            <p>Password:</p>
            <input type={"text"} name={"password"} required/>
            <br/>
            <br/>
            <input type="submit" value="Login"/>
        </form>
        <br/>
        <p>New to Tweedr?</p>
        <form action={registerURL}>
            <button type={"submit"}>Sign up now</button>
        </form>

      </FrontLayout>
    );
  }
}

module.exports = Login;