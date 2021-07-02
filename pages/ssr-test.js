import React from "react";
import Layout from "../components/Layout";
import axios from "axios";

class SSRTest extends React.Component {
  static async getInitialProps({ req }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return {
      users: response.data,
    };
  }
  render() {
    const { users } = this.props;
    console.log(users);
    const userList = users.map((now) => {
      return <li key={now.id}>{now.name}</li>;
    });
    return <Layout>{userList}</Layout>;
  }
}

export default SSRTest;
