import React, { Component } from 'react'
import { Container, Col } from 'react-bootstrap'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Divider from '@mui/material/Divider';
import "./Navbar.scss"
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';


class NavbarComponent extends Component {
  links = [
    { name: "Men", path: ""},
    { name: "Women", path: "Women"},
    { name: "Unisex", path: ""},
    { name: "Kids", path: ""},
    { name: "Best Sellers", path: ""},
    { name: "New Arrivals", path: ""},
    { name: "Offers", path: ""},
  ];

  getLink = () => {
    return this.links.map((link, index) => (
      <Col md={1.7} key={index}>
        <NavLink style={{backgroundColor: "transparent"}} className="category" key={index} to={`${link.path}`}>
          {link.name}
        </NavLink>
      </Col>
    ));
  };
  render() {
    return (
      <>
        <div className='navbar'>
          <Container>
            {this.getLink()}
          </Container>
        </div>
        <Container>
          <Breadcrumbs aria-label="breadcrumb" className='breadCrumbs'>
            <Link underline="hover" color="inherit" href="/">
              Men
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Clothing
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Tops
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Adidas
            </Link>
            <Typography>Adidas Black T-Shirt</Typography>
          </Breadcrumbs>
        </Container>
        <Divider />
      </>
    )
  }
}

export default NavbarComponent