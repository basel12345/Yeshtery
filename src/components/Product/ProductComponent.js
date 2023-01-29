import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import "./Product.scss"
import { Divider } from '@mui/material';
import SimilarProductComponent from "../SimilarProduct/SimilarProductComponent"
import axios from 'axios';

class ProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            length: 0,
            rating: 3,
            indexActiveColor: 0,
            indexActiveSize: 0,
            products: [],
        }
    }
    getProducts = () => {
        return this.state.products[0]?.['Product']?.map((response, index) => (
            <img onClick={() => this.changeHandler(index)} alt="test" key={index} style={{ width: "120px", marginTop: "10px", marginRight: "10px" }} src={response.image} />
        ));
    }

    colorHandler(e) {
        this.setState({
            indexActiveColor: e
        })
    }

    changeHandler(index) {
        this.setState({
            length: index
        })
        document.getElementById('scroll').scrollLeft = 120 * index;
    }

    sizeHandler(e) {
        this.setState({
            indexActiveSize: e
        })
    }

    getColors = () => {
        return this.state.products[0]?.['Color']?.map((color, index) => (
            <img alt="test" key={index} onClick={() => this.colorHandler(index)} className={this.state.indexActiveColor === index ? "activeColor" : null} style={{ width: "80px", marginTop: "10px", marginRight: "10px" }} src={color.image} />
        ));
    }

    getSizes = () => {
        return this.state.products[0]?.['Sizes']?.map((size, index) => (
            <div key={index} onClick={() => this.sizeHandler(index)} className={this.state.indexActiveSize === index ? "size active" : "size"}>{size.name}</div>
        ));
    }

    scrollHandler(Type) {
        if (Type === "Next" && this.state.length < this.state.products?.[0]?.["Product"].length - 1) {
            this.setState((prevValue) => ({
                length: prevValue.length + 1
            }))
            document.getElementById('scroll').scrollLeft += 120;
        }
        else if (Type === "previous" && this.state.length > 0) {
            this.setState((prevValue) => ({
                length: prevValue.length - 1
            }))
            document.getElementById('scroll').scrollLeft -= 120;
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3500/Product").then(res => {
            this.setState({
                products: res.data
            });
        });
    };
    render() {
        return (
            <>
                <Container className='products'>
                    <Row>
                        <Col>
                            <Row style={{ justifyContent: "center" }}>
                                <img alt="test" src={`${this.state.products[0]?.['Product']?.[this.state.length]?.image}`} style={{ width: "586px", height: "586px" }} />
                            </Row>
                            <Row style={{ alignItems: "center", marginTop: "11.5px" }}>
                                <Col>
                                    <a onClick={() => this.scrollHandler("previous")}>
                                        <img alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/images/arrow-left.png`} />
                                    </a>
                                </Col>
                                <Col>
                                    <span id='scroll' style={{
                                        width: "520px",
                                        display: "flex",
                                        overflowX: "scroll",
                                        scrollBehavior: "smooth"
                                    }} className="list">
                                        {
                                            this.getProducts()
                                        }
                                    </span>
                                </Col>
                                <Col xs={1}>
                                    <a onClick={() => this.scrollHandler("Next")}>
                                        <img alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/images/arrow-right.png`} />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <img alt="test" src={`${process.env.PUBLIC_URL}/images/adidas1.png`} style={{ width: "60px" }} />
                            <div className='details'>
                                Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </div>
                            <div className='type'>
                                Men
                            </div>
                            <Row>
                                <Col xs={3}>
                                    <Rating
                                        name="simple-controlled"
                                        value={this.state.rating}
                                        onChange={(event, newValue) => {
                                            this.setState(prevValue => ({
                                                rating: newValue
                                            }))
                                        }}
                                    />
                                </Col>
                                <Col className='rating'>{this.state.rating} of 5</Col>
                            </Row>
                            <div style={{ display: "flex" }}>
                                <div><span className='cost'>{this.state.products[0]?.["price"]}</span> <span className='currency'>{this.state.products[0]?.["currency"]}</span></div>
                                <div className='sale'>{this.state.products[0]?.["price"]}{this.state.products[0]?.["currency"]}</div>
                                <div className='discount'>{this.state.products[0]?.["discount"]}</div>
                            </div>
                            <Divider className='divid' />
                            <Row>
                                <div className='details'>
                                    Size
                                </div>
                                <div className='sizes'>
                                    {
                                        this.getSizes()
                                    }
                                </div>
                            </Row>
                            <Divider className='divid' />
                            <Row>
                                <div className='details'>
                                    Color
                                </div>
                                <div className='sizes'>
                                    {
                                        this.getColors()
                                    }
                                </div>
                            </Row>
                            <Divider className='divid' />
                            <Row>
                                <div className='details'>
                                    Quantity
                                </div>
                                <div className='count'>
                                    <button onClick={() => this.props.decreaseQuantity()}>-</button>
                                    {
                                        this.props.quanity
                                    }
                                    <button onClick={() => this.props.increaseQuantity()}>+</button>
                                </div>
                            </Row>
                            <Row>
                                <Col xs={5}>
                                    <button onClick={() => this.props.addToCart(this.state.products[0])} className='addToCart'>Aadd To Cart</button>
                                </Col>
                                <Col xs={5}>
                                    <button className='Pickup'>Pickup From Store</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <SimilarProductComponent />
            </>
        )
    }
}

export default ProductComponent