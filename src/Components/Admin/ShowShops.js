import React, { Component } from "react";
import axios from "axios";

class ShowShops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:8000/api/get-shopActive");
      this.setState({ shops: response.data });
    } catch (error) {
      console.error("Error retrieving shops:", error);
    }
  }

  render() {
    const columns = [
      {
        name: "ID",
        selector: "shop_id",
        sortable: true,
      },
      {
        name: "Name",
        selector: "name",
        sortable: true,
      },
      {
        name: "Location",
        selector: "location",
        sortable: true,
      },
      {
        name: "Description",
        selector: "description",
        sortable: true,
      },
      {
        name: "Time Open",
        selector: "timeOpen",
        sortable: true,
      },
      {
        name: "Cost",
        selector: "cost",
        sortable: true,
      },
      {
        name: "Tag",
        selector: "tag",
        sortable: true,
      },
    ];

    return (
      <div className="show-shops">
        <table className="shops-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.name}>{column.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.shops.map((shop) => (
              <tr key={shop.id}>
                <td>{shop.id}</td>
                <td>{shop.name}</td>
                <td>{shop.location}</td>
                <td>{shop.description}</td>
                <td>{shop.timeOpen}</td>
                <td>{shop.cost}</td>
                <td>{shop.tag}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowShops;
