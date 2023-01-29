import React, { Component } from 'react'
import "./Header.scss"
import { Container, Row, Col } from 'react-bootstrap';

class HeaderComponent extends Component {
    links = [
        { icon: `${process.env.PUBLIC_URL}/images/phone-icon.png`, name: "Conatact US" },
        { icon: `${process.env.PUBLIC_URL}/images/order-icon.png`, name: "Track Order" },
        { icon: `${process.env.PUBLIC_URL}/images/location-icon.png`, name: "Find A Store" },
    ];
    userProperties = [
        { icon: `${process.env.PUBLIC_URL}/images/cart-icon.png`, name: "Cart", function: this.props.iconHandler },
        { icon: `${process.env.PUBLIC_URL}/images/heart-icon.png`, name: "Wishlist", function: "" },
        { icon: `${process.env.PUBLIC_URL}/images/user-icon.png`, name: "Login", function: "" },
    ];
    // getLinks = () => {
    //     return this.links.map((link, index) => (
    //         <Col key={index}>
    //             <img alt="test" src={link.icon} style={{ marginRight: "10px" }} />
    //             {link.name}
    //         </Col>
    //     ));
    // };

    getUserProperties = () => {
        return this.userProperties.map((property, index) => (
            <Col key={index} onClick={() => property.function()} style={{cursor: "pointer", position: "relative" }}>
                <img alt="test" src={property.icon} style={{ marginRight: "10px" }} />
                {
                    property.function && <span className='cartNotification'>{this.props.quanity}</span>
                }
                {property.name}
            </Col>
        ));
    }

    getLinks = () => {
        return this.links.map((link, index) => (
            <Col key={index} onClick={() => link.function}>
                <img alt="test" src={link.icon} style={{ marginRight: "10px" }} />
                {link.name}
            </Col>
        ));
    };
    render() {
        return (
            <>
                <div className='info'>
                    <Container>
                        <Row>
                            <Col>
                                <img alt="test" src={`${process.env.PUBLIC_URL}/images/menu.svg`} />
                                <img alt="test" style={{ marginLeft: "32px" }} src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
                            </Col>
                            <Col>
                                Valentine’s Day Offers! Buy Two Get One Free <a href='' className='link'>Shop Now</a>
                            </Col>
                            <Col>
                                <Row>
                                    {
                                        this.getLinks()
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div style={{ margin: "18px 0" }}>
                    <Container>
                        <Row style={{ alignItems: "center" }}>
                            <Col style={{ position: "relative" }}>
                                <img alt="test" className='search' src={`${process.env.PUBLIC_URL}/images/search-icon.png`} />
                                <input type='search' placeholder='Search' />
                            </Col>
                            <Col className="text-center">
                                <img alt="test" src={`${process.env.PUBLIC_URL}/images/adidas1.png`} />
                            </Col>
                            <Col>
                                <Row className='properties'>
                                    {
                                        this.getUserProperties()
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default HeaderComponent