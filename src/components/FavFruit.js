import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import MyFavoritescards from "./Favcards";
import Updatemodal from "./favUpdatmodale";
import swal from "sweetalert";

class FavFruit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fvdata: [],
      Fvdatadb: [],
      show: false,
      Favid: "",
    };
  }

  componentDidMount = async () => {
    let userEmail = this.props.auth0.user.email;
    let Url = `http://localhost:3001/getFav?useremail=${userEmail}`;
    let receivedfavData = await axios.get(Url);
    this.setState({
      Fvdata: receivedfavData.data,
    });
    // console.log(this.state.Fvdata[0].name);
  };

  deleteFavorite = async (itemid) => {
    let datafterdelete = await axios.delete(
      `http://localhost:3001/deleteFav/${itemid}?useremail=${this.props.auth0.user.email}`
    );
    await this.setState({
      Fvdata: datafterdelete.data,
    });
  };

  showmodalhandle = async () => {
    await this.setState({
      show: !this.state.show,
    });
  };

  getfavid = async (itemid) => {
    let lastiteminfo = this.state.Fvdata.find((item) => {
      return item._id === itemid;
    });
    this.setState({
      Favid: itemid,
      Fvdatadb: lastiteminfo,
    });
  };

  updatefav = async (e) => {
    e.preventDefault();
    let updatedata = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value,
    };
    let updatedData = await axios.put(
      `http://localhost:3001/updateFav/${this.state.Favid}?useremail=${this.props.auth0.user.email}`,
      updatedata
    );
    console.log("nnnnnnn", updatedData.status);
    await this.setState({
      Fvdata: updatedData.data,
    });
    if (updatedData.status === 200) {
      swal("success!", "You Update the data!", "success");
    } else {
      swal("Oops!", "Update filed!", "error");
    }
  };

  render() {
    return (
      <>
        <h1>My Favorite Fruits</h1>
        <MyFavoritescards
          Fvdata={this.state.Fvdata}
          deleteFavorite={this.deleteFavorite}
          getfavid={this.getfavid}
          showmodalhandle={this.showmodalhandle}
        />
        <Updatemodal
          Fvdatadb={this.state.Fvdatadb}
          updatefav={this.updatefav}
          showmodalhandle={this.showmodalhandle}
          show={this.state.show}
        />
      </>
    );
  }
}

export default withAuth0(FavFruit);
