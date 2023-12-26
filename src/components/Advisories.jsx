import {React} from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import SectionTitle from './SectionTitle'

export default function Advisories(){
    const list = [
        {
            cve:'CVE-2019-6191',
            des:'CLenovoPaper Discontinuation Local Privilege Escalation',
            serverity:'Medium',
        },
        {
            cve:'CVE-2019-14737',
            des:'Ubisoft Uplay 92.0.0.6280 has Insecure Permissions',
            serverity:'High',
        },
        {
            cve:'CVE-2019-13605',
            des:'CentOS Control Web Panel 0.9.8.836 Authentication Bypass',
            serverity:'Critical',
        },
        {
            cve:'CVE-2019-13387',
            des:'CentOS Control Web Panel 0.9.8.846 Cross-Site Scripting',
            serverity:'High',
        },
        {
            cve:'CVE-2019-13386',
            des:'CentOS Control Web Panel 0.9.8.846 Command Execution',
            serverity:'Critical',
        },
        {
            cve:'CVE-2019-13360',
            des:'CentOS Control Web Panel 0.9.8.836 Authentication Bypass',
            serverity:'High',
        },
        {
            cve:'CVE-2019-13359',
            des:'CentOS Control Web Panel 0.9.8.836 Privilege Escalation',
            serverity:'Medium',
        },
    ]
    return(
        <section className='advisorie base-padding' id='advisories'>
            <Container>
                <SectionTitle title="Public Advisories" des="Before you can publish a security advisory or request a CVE identification number, you must create a draft security advisory and provide information about the versions of your project affected by the security vulnerability. For more information," />
                <Row className='justify-content-center'>
                    <Col lg={8}>
                        <div className="table-data">
                            <table className="table w-100 mb-0">
                                <thead>
                                    <tr>
                                        <th>CVE Number</th>
                                        <th>Description</th>
                                        <th>Serverity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map((item,index) => (
                                        <tr key={index}>
                                            <td>
                                                {item.cve}
                                            </td>
                                            <td>
                                                {item.des}
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className={`dot ${item.serverity == 'Medium' ? 'medium': '' || item.serverity == 'High' ? 'high': '' || item.serverity == 'Critical' ? 'critical' : '' }`}></div>
                                                    {item.serverity}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col lg="12 text-center">
                        <div className="seemore">
                            <a href="#" className="base-btn">Read More</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}