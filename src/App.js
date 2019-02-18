import React, { Component } from 'react';
import './App.css';
import Cart from './Cart.js';

import { Button } from 'reactstrap';


import Log from './Loginrender';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './Productcard.js'
import './loginrender.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          imagen: "https://http2.mlstatic.com/chaleco-led-ciclista-ciclismo-luz-led-D_NQ_NP_849611-MLM20619478626_032016-O.webp",
          name: "BikeVest 1",
          prize: "1000 lps"
        },
        {
          imagen: "https://http2.mlstatic.com/led-y-chaleco-reflectante-por-wildsaver-usb-recargable-con-D_NQ_NP_682281-MLM29135319788_012019-O.webp",
          name: "BikeVest 2 limited edicion",
          prize: "1500 lps"
        },
        {
          imagen: "https://images-na.ssl-images-amazon.com/images/I/61kYQ6gO4xL._SL1001_.jpg",
          name: "Accesiorio Wireless",
          prize: "300 lps"
        },
        {
          imagen: "https://i0.wp.com/ae01.alicdn.com/kf/HTB10b8ieILJ8KJjy0Fnq6AFDpXa7/Chaleco-reflectante-colorido-de-fibra-LED-chaleco-de-seguridad-para-deportes-al-aire-libre-correr-ciclismo.jpg",
          name: "Traje BikeVest",
          prize: "500 lps"
        },
        {
          imagen: "https://images-na.ssl-images-amazon.com/images/I/41MLGJee00L._SX342_.jpg",
          name: "Gafas Vision Nocturna BikeVest",
          prize: "750 lps"
        },
        {
          imagen: "https://images-na.ssl-images-amazon.com/images/I/811yQu5+BDL.jpg",
          name: "BikeVest Bote de agua",
          prize: "600 lps"
        }








      ]
    }
  }
  render() {

    let peopleCards = this.state.people.map(person => {
      return (
        <div class="col-sm-3">

          <ProductCard person={ person } />

        </div>
      )
    });
    return (

      <div className="containerhome">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">
            <img src={ "https://eastus21-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpeg&cs=fFNQTw&docid=https%3A%2F%2Funitechn-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!Cn0Ef-UMIUq-sk9LU9SAK1-4Q-lBjmtPokluTfQXybGlxcN0EnftSJ0weKVTMeQL%2Fitems%2F0133VYAA2SQRRZRMLEGVGYNMESJSV53FBI%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvdW5pdGVjaG4tbXkuc2hhcmVwb2ludC5jb21AYWYyZmQxOTYtMWQ5Zi00N2I0LTkwNjktMzkxYTQ2ZjgzNjAxIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTU1MDQ1NjU0NSIsImV4cCI6IjE1NTA0NzgxNDUiLCJlbmRwb2ludHVybCI6Ik1qekJCSHUzNktjN1ByMFlUV3RqYjJkM2NWd1FMeWZKNlkxYW5vdy9DRFE9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTgiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImNpZCI6Ik5qTXdPV014T1dVdE1EQXpNeTA0TURBd0xUWTJZalF0WXpVek5UZ3dZMlEyTkdZMCIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJOMll3TkRka01HRXRNR05sTlMwMFlUSXhMV0psWWpJdE5HWTBZalV6WkRRNE1ESmkiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfGplYW53YWhsdW5nQHVuaXRlYy5lZHUiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzN2ZmZTljNzBkMmE5QGxpdmUuY29tIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjMifQ.Y3pvcW1rWUFFbWlZVGx2TFZPMTE4dVEzaG9SWDZlRk5lK0QxdTk5UlRncz0&encodeFailures=1&width=1366&height=606&srcWidth=&srcHeight=" } style={ { width: 75, height: 75, marginTop: -7 } } />
          </Navbar.Brand>
          <Nav className="mr-auto">

          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>

        <div className="cartcontainer">
          <h2>  Cart </h2>
          <Cart />

        </div>
        <div class="col-sm-8">


          <div className="ventascontainer">


            <div class="row">
              { peopleCards }


            </div>
          </div>




        </div>




      </div>

    );
  }
}




export default App;