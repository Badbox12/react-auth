import React from 'react'
// import { Switch, Route} from 'react-router-dom'
// import AuthComponent from './AuthComponent'
// import FreeComponent from './FreeComponent'
import Register from './Register'
import Login from './Login'
import { Container, Col, Row } from "react-bootstrap";
const Account = () => {
  return (
    <>
    <Container>
    <Row>
      <Col xs={12} sm={12} md={6} lg={6} >
        <Register/>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} >
        <Login/>
      </Col>
    </Row>
  </Container>
  {/* <Switch>
        <Route exact path="/" component={Account} />
        <Route exact path="/free" component={FreeComponent} />
        <Route exact path="/auth" component={AuthComponent} />
      </Switch> */}
    </>
  )
}

export default Account