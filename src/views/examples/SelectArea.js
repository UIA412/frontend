/*!

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter";


class SelectArea extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
//   Get the email address from the query 

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-warning">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="3">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <h4>Area in m<sup>2</sup></h4>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <Form role="form"
                        action = "http://localhost:5000/save-area"
                        method = "POST"
                      >
                        <input type="hidden" name="useremail" value={"kashifraza08012001@gmail.com"} />
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-square-pin" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Area of the building in" name = "area" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="warning"
                            type="submit"
                          >
                            Get Area
                          </Button>
                        </div>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="warning"
                            type="button"
                            onClick = {(e) => window.open("https://www.maps.ie/distance-area-calculator.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400")}
                          >
                            Draw
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="9">
                    {/* <Maps /> */}
                    <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Gautam%20Buddha%20University,%20Noida+(UIA-412)&amp;t=k&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a>
                    </iframe>
                    {/* <iframe width="100%" height="100%" frameborder="0" src="https://www.daftlogic.com/projects-google-maps-area-calculator-tool.htm#">

                    </iframe> */}
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default SelectArea;
