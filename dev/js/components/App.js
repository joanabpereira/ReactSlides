import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Toolbar from './Toolbar';
import Logo from '../containers/Logo';
import Slide from '../containers/Slide';
import styled from 'styled-components';
require('../../scss/style.scss');

const App = () => (
    <ExtendedGrid>
        <Row>
            <Col md={2}>
                <Logo />
                <Toolbar />
            </Col>
            <Col md={10}>
              This is a slides deck!
              <Slide />
            </Col>
        </Row>
    </ExtendedGrid>
);

const ExtendedGrid = styled(Grid)`
    margin-left: 0px;
    margin-right: 0px;
`;

export default App;
