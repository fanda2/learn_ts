import React, { PureComponent } from "react";

function withAuth(WrappedComponent) {
  return (props) => {
    const { isLogin } = props;
    if (isLogin) {
      return <WrappedComponent {...props} />;
    } else {
      return <LoginPage />;
    }
  };
}

class CartPage extends PureComponent {
  render() {
    return <h2>cartPage</h2>;
  }
}

class LoginPage extends PureComponent {
  render() {
    return <h2>请先登录系统</h2>;
  }
}

const AuthCartPage = withAuth(CartPage);

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  render() {
    return (
      <div>
        App
        <AuthCartPage isLogin={this.state.isLogin} />
        <button
          onClick={() => {
            this.setState({ isLogin: !this.state.isLogin });
          }}
        >
          切换登录状态
        </button>
      </div>
    );
  }
}
