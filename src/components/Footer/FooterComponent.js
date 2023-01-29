import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./FooterComponent.scss"
export class FooterComponent extends Component {
    render() {
        return (
            <div className='footer'>
                <Container>
                    <Row>
                        <Col>
                            <img src={`${process.env.PUBLIC_URL}/images/Group 1436.png`} />
                            <div className='lorem'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                <br />
                                <br />
                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia
                                <br />
                                <br />
                                m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                            </div>
                        </Col>
                        <Col>
                            <div className='subscribeTitle'>Subscribe to our newsletter</div>
                            <div style={{ position: "relative", marginTop: "18px", marginBottom: "18px" }}>
                                <input type="email" placeholder='Enter Your Mail' />
                                <button className='buttonFooter'>Subscribe <img src={`${process.env.PUBLIC_URL}/images/Group 1431.png`} /></button>
                            </div>
                            <Row>
                                <Col className='linkFooter'>
                                    <a>About Us</a>
                                    <a>Contact Us</a>
                                    <a>Track Order</a>
                                    <a>Terms & Conditions</a>
                                    <a>Privacy Policy</a>
                                    <a>Sell With Us</a>
                                    <a>Shipping And Returns</a>
                                </Col>
                                <Col className='linkFooter'>
                                    <a>
                                        <img alt="test" src={`${process.env.PUBLIC_URL}/images/Group 1435.svg`} />/YESHTERY
                                    </a>
                                    <a>
                                        <img alt="test" src={`${process.env.PUBLIC_URL}/images/Group 1432.svg`} />/YESHTERY
                                    </a>
                                    <a>
                                        <img alt="test" src={`${process.env.PUBLIC_URL}/images/Group 1433.svg`} />/YESHTERY
                                    </a>
                                    <a>
                                        <img alt="test" src={`${process.env.PUBLIC_URL}/images/Group 1434.svg`} />/YESHTERY
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop: "30px", color: "white"}}>
                        <Col xs={5}>© 2021 yeshtery, all rights reserved.</Col>
                        <Col className='payment text-end'>
                            <img alt="test" src={`${process.env.PUBLIC_URL}/images/Rectangle 586.png`} />
                            <img alt="test" src={`${process.env.PUBLIC_URL}/images/Group 1437.png`} />
                            <img alt="test" src={`${process.env.PUBLIC_URL}/images/Group 1438.png`} />
                        </Col>
                        <Col className='text-end'>
                            Powered By
                            <img alt="test" src={`${process.env.PUBLIC_URL}/images/Group 1439.png`} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default FooterComponent