import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import "./SimilarProducts.scss"
import axios from 'axios';
class SimilarProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    getProducts = () => {
        return this.state.products?.map((response, index) => (
            <Card key={index} sx={{ minWidth: "289px", minHeight: "498px", marginRight: "47px", marginBottom: "10px" }} className="text-center">
                <img alt="test" className='pic' key={index} src={response.image} />
                <div className='desc'>{response.descripation}</div>
                <Row style={{ margin: "0 8px" }}>
                    <Col xs={8}>
                        <div className='cost' style={{ fontSize: "20px", marginTop: "30px" }}>{response.price}</div>
                        {
                            response.sale && (
                                <div className='text-start'>
                                    <span className='sale' style={{ marginTop: "0", marginLeft: "0" }}>{response.price}</span>
                                    <span className='discount' style={{ marginTop: "0", padding: "1px 14px" }}>{response.discount}</span>
                                </div>
                            )

                        }
                    </Col>
                    <Col className='text-end' xs={4}>
                        <img alt="test" className='pic' key={index} src={response.logo} style={{ width: "60px", marginTop: "15px" }} />
                    </Col>
                </Row>
                <Row className='text-center' style={{ marginTop: 20 }}>
                    <Col xs={7} className='text-end'>
                        <Rating
                            name="simple-controlled"
                            value={response.rating}
                        />
                    </Col>
                    <Col className='rating text-start'> {response.rating} of 5</Col>
                </Row>
                <Row style={{ alignItems: "end", marginBottom: "9px", marginTop: "5px", fontSize: "10px", fontWeight: "bold" }}>
                    <Col>From: {response.form}</Col>
                    <Col>To: {response.to}</Col>
                    <Col>In: {response.in}</Col>
                </Row>
            </Card>
        ));
    }

    componentDidMount() {
        axios.get("http://localhost:3500/Produscts").then(res => {
            this.setState({
                products: res.data
            });
        });
    };

    render() {
        return (
            <Container className='similar'>
                <h2>Similar Products</h2>
                <div className='line'>You may like these products also</div>
                <Row>
                    <Col style={{
                        width: "520px",
                        display: "flex",
                        overflowX: "scroll",
                        scrollBehavior: "smooth"
                    }} className="scroll">
                        {
                            this.getProducts()
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SimilarProductComponent