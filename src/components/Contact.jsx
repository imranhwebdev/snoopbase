import { React } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
export default function Contact(){
    return(
        <section className="contact base-padding" id='contact'>
            <Container>
                <SectionTitle title='Contact Us' des="This training is in the form of theories and workshops for those who are interested able to gain knowledge and reduce the vulnerability of information systems also the risk that may occur" />
                <Row>
                    <Col lg={6}>
                        <iframe  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=949&amp;height=575&amp;hl=en&amp;q=Haus%2035,%2099/110%20Klong%20Kua%20Pak%20Kret%20snoopbees+(SnoopBees%20co.,Ltd)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                    </Col>
                    <Col lg={6}>
                        <div className="contact-wrap">
                            <h3>SnoopBees Co., Ltd. (Head Office)</h3>
                            <form action="#">
                                <Row>
                                    <Col md="6">
                                        <div className="form-box">
                                            <label htmlFor="#" className="form-label">First Name</label>
                                            <input type="text" className="form-control" placeholder='First name' />
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="form-box">
                                            <label htmlFor="#" className="form-label">First Name</label>
                                            <input type="text" className="form-control" placeholder='First name' />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="form-box">
                                    <label htmlFor="#" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder='info@snoopbees.com' />
                                </div>
                                <div className="form-box">
                                    <label htmlFor="#" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" placeholder='(+66) 093-624-6354' />
                                </div>
                                <div className="form-box mb-0">
                                    <button type='submit'>Send Now</button>
                                </div>
                               
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}