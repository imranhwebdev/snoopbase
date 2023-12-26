import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import SectionTitle from './SectionTitle';
import TabSalidOne from './TrainingSliderData1';
import TabSalidTwo from './TrainingSliderData2';
import TabSalidThree from './TrainingSliderData3';
import TrainingIcon1 from '../assets/img/training-icon1.svg';
import TrainingIcon2 from '../assets/img/training-icon2.svg';
import TrainingIcon3 from '../assets/img/training-icon3.svg';

export default function Training(){
    return(
        <section className="training base-padding" id='training'>
            <Container>
                <SectionTitle title="Training" des="This training is in the form of theories and workshops for those who are interested able to gain knowledge and reduce the vulnerability of information systems also the risk that may occur" />
                <Row>
                    <Col>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col lg={5}>
                                <Nav variant="pills" className="flex-column training-tab-navs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"> 
                                            <figure>
                                                <img src={TrainingIcon1} alt="" />
                                            </figure> 
                                            <span>Cyber Security Workshop Training</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            <figure>
                                                <img src={TrainingIcon2} alt="" />
                                            </figure> 
                                            Secure CodingTraining
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="thard">
                                            <figure>
                                                <img src={TrainingIcon3} alt="" />
                                            </figure> 
                                            Security Awareness Training
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Col>
                                <Col lg={7}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <TabSalidOne />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <TabSalidTwo />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="thard">
                                        <TabSalidThree />
                                    </Tab.Pane>
                                </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}