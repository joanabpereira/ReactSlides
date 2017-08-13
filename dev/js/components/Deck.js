import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Slide from '../containers/Slide';

export class Deck extends React.PureComponent {
    renderSlides(){
        const slides = this.props.deck;
        if(!slides)
            return;

        const deck = slides.map((slide, index) => {
            return (
                <Slide key={index} type={slide.type} h1={slide.h1} h2={slide.h2} text={slide.text}/>
            );
        });

        return deck;
    }

    render(){
        return(
            <Row>
                <Col md={11}>
                    {this.renderSlides()}
                </Col>
                <Col md={1}></Col>
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        deck: state.deck,
    };
}

export default connect(mapStateToProps) (Deck);
