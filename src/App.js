import { Container, Col, Row } from 'react-bootstrap';
import './App.css';
import {  Route, Switch } from "react-router-dom";
import Account from "./components/Account";
import FreeComponent from './components/FreeComponent'
import AuthComponent from './components/AuthComponent';
import ProtectedRoutes from "./ProtectRoutes/ProtectedRoutes";
function App() {
  return (
    <Container>
    <Row>
      <Col className="text-center">
        <h1>React Authentication Tutorial</h1>

        <section id="navigation">
          <a href="/">Home</a>
          <a href="/free">Free Component</a>
          <a href="/auth">Auth Component</a>
        </section>
      </Col>
    </Row>

    {/* create routes here */}
    <Switch>
        <Route exact path="/" component={Account} />
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/auth" component={AuthComponent} />
      </Switch>
  </Container>
  );
}

export default App;
