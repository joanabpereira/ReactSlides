import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {SLIDE_TITLE, SLIDE_BLANK, SLIDE_TEXT} from '../constants/Slide';

class Slide extends React.PureComponent{

    /* Slide with title & subtitle */
    renderMainSlide(){
        return(
            <div contentEditable="true" suppressContentEditableWarning={true}>
                <h1>{this.props.h1 || 'Click to edit'}</h1>
                <h2>{this.props.h2 || 'Click to edit'}</h2>
            </div>
        );
    }

    /* Slide with title & text */
    renderTextSlide(){
        return(
            <div contentEditable="true" suppressContentEditableWarning={true}>
                <h1>{this.props.h1 || 'Click to edit'}</h1>
                <p>{this.props.text || 'Click to edit'}</p>
            </div>
        );
    }

    /* Blank slide */
    renderBlankSlide(){
        return(
            <div contentEditable="true" suppressContentEditableWarning={true}></div>
        );
    }


    render(){
        console.log(this.props.type);
        switch(this.props.type){
            case SLIDE_TITLE:
                return this.renderMainSlide();
            case SLIDE_TEXT:
                return this.renderTextSlide();
            default:
                return this.renderBlankSlide();
        };
    }
}

Slide.PropTypes={
    type: PropTypes.string.isRequired,
    h1: PropTypes.string,
    h2: PropTypes.string,
    text: PropTypes.string,
}

export default Slide;
