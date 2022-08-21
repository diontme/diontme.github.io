import { Container, Row, Col } from "react-bootstrap";

export default function Experience() {
    return (
        <div className="content">
            <h3>Work Timeline</h3>
            <hr></hr>
            <Container className="m-0 p-0">
                <Row className='mb-5'>
                    <Col md="5">
                        <h5>Defence Science and Technology Agency (DSTA)</h5>
                        Software Developer
                    </Col>
                    <Col md="7">
                        Here, I'm expected to collaborate closely with product managers, UX designers, developers and other stakeholders to design, develop and deliver valuable and impactful software that combat evolving threats. 
                    </Col>
                </Row>

                <Row className='mb-5'>
                    <Col md="5" className='my-auto'>
                        <h5>Analytix Labs</h5>
                        Product Development (Part Time Intern)
                    </Col>                    
                    <Col md="7">
                        This was probably the internship that I had the most fun in! It was a role where I get to experiment and play around with different technologies so as to explore and provide the team with ideas and ways that we could develop for the product.
                    </Col>
                </Row>

                <Row className='mb-5'>
                    <Col md="5">
                        <h5>Accenture</h5>
                        Test Analyst (Intern)
                    </Col>
                    <Col md="7">
                        I was involved in one of their SIT and UAT cycles, where I created test cases and executed tests for functional validation of the application that they have developed for the client.
                    </Col>
                </Row>

                <Row className='mb-5'>
                    <Col md="5">
                        <h5>CrescoData</h5>
                        Data Science (Intern)
                    </Col>
                    <Col md="7">
                        I helped produce actionable insights and related reports, by converting JSON/XML payloads into CSV/XSLX files so that information can be easily visualized and consumed for the other team members. 
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}