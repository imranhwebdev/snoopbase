import { React, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll} from 'react-scroll'
import logo from '../assets/img/logo.png'

export default function Header(){ 
    const [fix, setFix] = useState(false)
    function setFixed(){
        if(window.scrollY >= 392){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    return(
        <header className={fix ? 'heading fixed' : 'heading'}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="services" spy={true} smooth={true} offset={50} duration={500}>Services</Link>
                        <Link to="training" spy={true} smooth={true} offset={50} duration={500}>Training</Link>
                        <Link to="certificates" spy={true} smooth={true} offset={50} duration={500}>Certificates</Link>
                        <Link to="advisories" spy={true} smooth={true} offset={50} duration={500}>Advisories</Link>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                    </Nav>
                    <Nav className='pe-5'>
                        <a href="/" className='base-btn bg-transparent'>Launch App</a>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}