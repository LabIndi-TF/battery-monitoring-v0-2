/************************** Import library/fungsi ****************************/
import React from 'react'

//terkait routing,
import { Switch, Route, Redirect } from 'react-router-dom'
import MainWindow from '../MainWindow'

//Header yang ada di semua layout di dalam Halaman Admin
import Header from '../ui/Header'

//Page-page di dalam layout
import LogoutPage from '../pages/LogoutPage'
import AdminHome from '../pages/AdminHome'
import AdminBatmon from '../pages/AdminBatmon'

//modul-modul Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PrimaryLayout = ({ match,history }) => (
  //<div className="primary-layout">
    <div>
    <main>
      <Container className="p-1">
        <Jumbotron>
          <Row><Col className="col-centered"><Header /></Col></Row>
        </Jumbotron>
      </Container>
      <Container>
          <Jumbotron>
            <Switch>
              <Route path={`${match.path}`} exact component={AdminHome} />
              <Route path={`${match.path}/batmon`} component={AdminBatmon} />
              <Route path={`${match.path}/mainwindow`} component={MainWindow} />
              <Route path={`${match.path}/logout`} component={LogoutPage} />
              <Redirect to={`${match.url}`} />
            </Switch>
          </Jumbotron>
       </Container>
    </main>
  </div>
)

export default PrimaryLayout