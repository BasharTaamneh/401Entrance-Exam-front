import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Datacards from "./Datacardsapi";
import { withAuth0 } from "@auth0/auth0-react";
import  "./general.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Apidata: [],
    };
  }

  componentDidMount = async () => {
    let thdApiData = await axios.get(`http://localhost:3001/apidatafav?`);
    await this.setState({
      Apidata: thdApiData.data,
    });
  };

  addTofavorite = async (item) => {
    let Favdata = {
      email: this.props.auth0.user.email,
      image: item.image,
      price: item.price,
      name: item.name,
    };
    await axios.post(`http://localhost:3001/addFav?`, Favdata);
  };

  render() {
    return (
      <>
        <h1>API Fruits</h1>
        <Datacards
          Apidata={this.state.Apidata}
          addTofavorite={this.addTofavorite}
        />
      </>
    );
  }
}

export default withAuth0(Home);
