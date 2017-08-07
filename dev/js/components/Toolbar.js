import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Tool from '../containers/Tool';

export class Toolbar extends React.PureComponent {
    render(){
        return(
            <Toolcol>
                <Row>
                    <Col sm={6}>
                        <Tool name='bold' />
                    </Col>
                    <Col sm={6}>
                    </Col>
                </Row>
            </Toolcol>
        );
    }
}

const Toolcol = styled.div`
    background-color: #292929;
    color: #eee;
    height: 90vh;
`;

export default Toolbar;
