import React from 'react';
//import UserList from '../containers/user-list';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
require('../../scss/style.scss');

const App = () => (
  <ExtendedGrid>
      <Row>
        <Toolbar md={3}>
          This is a toolbar
        </Toolbar>
        <Col md={9}>
          This is a slides deck!
        </Col>
      </Row>
    </ExtendedGrid>
);

const ExtendedGrid = styled(Grid)`
  margin-left: 0px;
  margin-right: 0px;
`;

const Toolbar = styled(Col)`
  background-color: #292929;
  color: #eee;
`;

export default App;
