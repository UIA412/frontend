/*!

*/
import React from "react";
import Iframe from "react-iframe";

// reactstrap components
import {
  Button,
  Label,
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
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Maps from "components/Maps/Maps.js";

class Survey extends React.Component {
  // fetch the url param 
//  const {area} = useParams();
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
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
            <Form role="form"
                action = "http://localhost:5000/save-data?area="
                method = "GET"
            >
              <Row className="justify-content-center">
                <Col lg="6">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <h4>Quick Question(s)</h4>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                        <FormGroup>
                         <Label className="form-control-label" for="exampleFormControlSelect1">When's your rooftop is built?</Label>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Year of Building rooftop / Renovation" name = "age" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                         <Label className="form-control-label" for="exampleFormControlSelect1">How many ACs / Coolers you have?</Label>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-check-bold" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="No. of ACs (Sum Up the total Cooling Capacity TRs)" name = "appliances" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                         <Label className="form-control-label" for="usage">How many hours they get used?</Label>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-square-pin" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <select name="usage" class="form-control" >
                                <option value="1">0-5 Hours</option>
                                <option value="2">5-10 Hours</option>
                                <option value="3">10-15 Hours</option>
                                <option value="4">15-20 Hours</option>
                                <option value="5">&gt;20 Hours</option>
                            </select>
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                           <br />
                           <br />
                           <br />
                        </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <h4>Relevant for Analysis</h4>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                        <FormGroup>
                            <Label className="form-control-label" for="exampleFormControlSelect1">What's the approximate area range of your building?</Label>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-compass-04" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <select name="areaRange" class="form-control">
                                <option value="1">300-5000 Sq. Ft.</option>
                                <option value="2">5000-20000 Sq. Ft.</option>
                                <option value="3">20000-10000 Sq. Ft.</option>
                                <option value="4"> &gt; 100000 Sq. Ft.</option>
                            </select>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                         <Label className="form-control-label" for="exampleFormControlSelect1">How many floors do you have?</Label>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="No. of floors in the building" name = "numFloors" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Label className="form-control-label" for="exampleFormControlSelect1">Is the building having a cool roof?</Label>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-compass-04" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <select className="form-control" name= "coolRoof" >
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                          </InputGroup>
                        </FormGroup>
                        {/* Submit Button */}
                        <div className="text-center">
                            <Button className="mt-4" color="warning" type="submit">
                                Submit
                            </Button>
                        </div>

                    </CardBody>
                  </Card>
                </Col>
              </Row>
              </Form>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Survey;
