const React = require('react');

class NavBar extends React.Component {
  render() {

    let user = this.props.user;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/home">Tweedr</a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/tweets">Trending</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/followers">Followers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/following">Following</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">{user.name}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/newtweet">New Tweet</a>
              </li>
              <form method="POST" action="/logout">
                <button type={"submit"}>Logout</button>
              </form>

            </ul>
          </div>
        </nav>
    );
  }
}

module.exports = NavBar;