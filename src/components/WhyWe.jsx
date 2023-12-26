import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle';
import SnoopbaseChart from '../assets/img/what-we-haci-chart.svg'
export default function WhyWe(){
    const counter = [
        {
            count: '100%',
            title:'SUCCESS RATE'
        },
        {
            count:'180',
            title:'SNO. OF OUR CLIENTS'
        },
        {
            count:'20',
            title:'CYBER DRILLS "NOT PHISHING'
        },
        {
            count:'08',
            title:'CYEARS OF APPEARANCE'
        },
        {
            count:'00',
            title:'BLANK PENTEST REPORT'
        },
    ]
    return(
        <section className="WhyWe base-padding">
            <div className="WhyWeIncognito-wraper">
                <Container>
                    <SectionTitle title="Why SnoopBees" des="As a vendor-neutral company with no external investment, we could apply our team's years of solid experience and diverse skills to provide security know-ho on technical and non-technical subjects. We did not just test but we believe that a strong cyber security drives our client's business growth and innovation; this is our goal." />
                    <Row className='justify-content-center -mb-30'>
                        {counter.map((item,index) => (
                            <Col lg={2} md={3} sm={4} key={index}>
                                <div className="counter-item text-center">
                                    <h3 className="text-primary">
                                        {item.count}
                                    </h3>
                                    <p>
                                        {item.title}
                                    </p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    
                    <Row className="position-relative mb-5 mb-md-0">
                        <Col  sm={{span: 8, offset: 2 }}  md={{span: 6, offset: 3 }} className='text-center'>
                            <div className="snoopbase-chart-img mt-5 pt-5">
                                <figure className='snoopbase'>
                                    <img src={SnoopbaseChart} alt="" />
                                </figure>
                            </div>
                        </Col>
                        <Col XS={12}>
                            <div className="snoopbase content">
                                <div className="content-left">
                                    <div className="snoopbase-single-item other">
                                        <h3>10% OTHER</h3>
                                        <ul>
                                            <li>CloudWireless, Thick Client Apps. KES </li>
                                            <li>SCADA,Physicalvol</li>
                                        </ul>
                                    </div>
                                    <div className="snoopbase-single-item INFRASTRUCTURE">
                                        <h3>28%</h3>
                                        <span>INFRASTRUCTURE</span>
                                        <ul>
                                            <li>luding AD</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="snoopbase-chart-middle-content">
                                    <div className="snoopbase-single-item text-center mt-4">
                                        <h3>34%</h3>
                                        <span>WEBAPPS</span>
                                    </div>
                                </div>
                                <div className="content-righ">
                                    <div className="snoopbase-single-item mobileApp">
                                        <h3>18%</h3>
                                        <span>MOBILE APPS</span>
                                    </div>
                                    <div className="snoopbase-single-item KIOSK">
                                        <h3>10%</h3>
                                        <span>1OT/KIOSK APIS</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}