import './App.scss';
import React, { Component } from 'react'
import HeaderComponent from './components/Header/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import { Route, Routes } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import FooterComponent from './components/Footer/FooterComponent';
const LazyProduct = React.lazy(() => import("./components/Product/ProductComponent"))


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quanity: 0,
      cart: 0,
      Cart: []
    }
  }

  addToCart = (product) => {
    if (this.state.quanity > 0) {
      this.setState({
        cart: this.state.quanity
      })
      this.setState({
        Cart: [product]
      })
    }
  }

  increaseQuantity = () => {
    this.setState((prevState => ({ quanity: prevState.quanity + 1 })))
  }

  decreaseQuantity = () => {
    this.setState((prevState => ({ quanity: prevState.quanity ? prevState.quanity - 1 : 0 })))
  }

  iconHandler = () => {
    document.getElementById("icon").classList.toggle("iconMenu");
    document.getElementById("icon").classList.toggle("iconMenuActive");
  };

  getCarts = () => {
    return this.state.Cart.map((cart, index) => (
      <Row key={index}>
        <Col xs={4}>
          <img src={`${cart?.["Product"][0].image}`} />
        </Col>
        <Col>
          <div className='descCart'>Lorem ipsum dolor sit amet, consecte adipiscing elit.</div>
          <div className='quantityCart'>
            Quantity: {this.state.cart}
          </div>
          <Row>
            <Col className='costCart'>
              {cart?.price}
            </Col>
            <Col>
              <button className='remove'>Remove</button>
            </Col>
          </Row>
        </Col>
      </Row>
    ));
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent iconHandler={this.iconHandler} quanity={this.state.cart} />
        <NavbarComponent />
        <Routes>
          <Route path="" element={<LazyProduct addToCart={this.addToCart} quanity={this.state.quanity} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} />} />
        </Routes>
        <div className='iconMenu' id='icon'>
          <div className='closeMenu'>
            <img onClick={() => this.iconHandler()} src={`${process.env.PUBLIC_URL}/images/Group 1440.svg`} />
          </div>
          <div className='head'>
            My Cart
          </div>
          <div className='cartSummary'>
            Cart Summary
          </div>
          <div className='cardCart'>
            {
              this.state.Cart.length > 0 ? (
                <>
                  {
                    this.getCarts()
                  }
                  <div className='totalCart'>
                    Total: 19,999 LE
                  </div>
                  <button className='ReviewCart'>Review Cart</button>
                  <button className='CompleteCheckout'>Complete Checkout</button>
                </>
              ): <div className='text-center notFound'>Not Found</div>
            }
          </div>
        </div>
        <FooterComponent />
      </div>
    )
  };
}

export default App;
