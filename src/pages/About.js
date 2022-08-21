import { Container, Row, Col, ProgressBar } from "react-bootstrap";

export default function About() {
    return (
        <div className="content">
            <h3>a bit more about myself</h3>
            <hr></hr>
            <section>
                I graduated from Singapore Management University, where I pursued a BSc (Information Systems) with majors in both Smart-City Management &amp; Technology as well as in Technology for Business (Solutions). I'm thrilled to learn how technology can be leveraged for creative problem solving. 
            </section>
            
            <h3>skills</h3>
            <hr></hr>
            <section>
                <Container className="m-0 p-0">
                    <Row className='mb-4'>
                        <Col md="4">
                            <h5>Python</h5>
                        </Col>
                        <Col md="8">
                            <ProgressionBar value={70} />
                        </Col>
                    </Row>

                    <Row className='mb-4'>
                        <Col md="4">
                            <h5>SQL</h5>
                        </Col>
                        <Col md="8">
                            <ProgressionBar value={60} />
                        </Col>
                    </Row>

                    <Row className='mb-4'>
                        <Col md="4">
                            <h5>HTML, CSS, JavaScript</h5>
                        </Col>
                        <Col md="8">
                            <ProgressionBar value={60} />
                        </Col>
                    </Row>

                    <Row className='mb-5'>
                        <Col md="4">
                            <h5>Java</h5>
                        </Col>
                        <Col md="8">
                            <ProgressionBar value={40} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

function ProgressionBar({value}) {
    return (
        <>
            <span className="label" style={{left: `${value-2}%`}}>{value+'%'}</span>
            <ProgressBar now={value} />
        </>
    )
}