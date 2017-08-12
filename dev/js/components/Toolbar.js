import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Tool from '../containers/Tool';
import Button from '../containers/Button';
import {newSlide} from '../actions/index';

export class Toolbar extends React.PureComponent {

    render(){
        return(
            <Toolcol>
                <Row>
                    <Col sm={6}>
                    </Col>
                    <Col sm={6}>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Button text="new slide" />
                        <div onClick={() => this.props.newSlide('blank')}>Click here, please</div>
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

function mapStateToProps(state) {
    return {};
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({newSlide: newSlide}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Toolbar);
