import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'
import logo1 from '../assets/img/brands/1.jpg'
import logo2 from '../assets/img/brands/2.jpg'
import logo3 from '../assets/img/brands/3.jpg'
import logo4 from '../assets/img/brands/4.jpg'
import logo5 from '../assets/img/brands/5.jpg'
import logo6 from '../assets/img/brands/6.jpg'
import logo7 from '../assets/img/brands/7.jpg'
import logo8 from '../assets/img/brands/8.jpg'


export default function Certificates(){
    const brand =[
        logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,
    ]

    return(
        <section className="brands base-padding" id='certificates'>
            <Container>
                <SectionTitle title='Certificates' des='This training is in the form of theories and workshops for those who are interested able to gain knowledge and reduce the vulnerability of information systems also the risk that may occur' />
                <Row>
                    <Col>
                        <div className="brands-wrapper d-flex">
                            {brand.map((item,index) => (
                                <div className="brands-item" key={index}>
                                    <img src={item} alt={index} />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}