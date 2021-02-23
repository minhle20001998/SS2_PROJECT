import React from "react";

class getProduct extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
            productName: '',
            productPrice: '',
            productQuantity: '',
            productDescription: ''
        }
    }
    
    async fetchProduct(e){
        // // const {productName, productPrice, productQuantity,productDescription} = this.state;
        // const url ='http:localhost:3030/admin/products';
        // // const body = {
        // //     productName: productName,
        // //     productPrice: productPrice,
        // //     productQuantity: productQuantity,
        // //     productDescription: productDescription
        // // }
        // const response  = await fetch(url, {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   // body: JSON.stringify(body),
        // });
        // const data = await response;
        // console.log(data);
        const axios = require('axios');
        const data = await axios.get('http://localhost:3030/admin/products');
        console.log(data.data);
        return data;

    }
    componentDidMount(){
     let container_data = this.fetchProduct();
     console.log(JSON.stringify(container_data.json()));
      
    }
    render() {
    return (
      <div>
        <table>
          <tr>
            <th>Product_Name</th>
            <th>Product_Price</th>
            <th>Product_Quantity</th>
            <th>Product_description</th>
          </tr>

          <tr>
            <td>
            1
            </td>
            <td>2</td>
            <td>3</td>
            <td>4</td>

          </tr>
        </table>
      </div>
    );
  }
}

export default getProduct;
