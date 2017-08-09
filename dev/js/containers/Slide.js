import React from 'react';
import styled from 'styled-components';
import {SLIDE_TITLE, SLIDE_BLANK, SLIDE_TEXT} from '../constants/Slide';

class Slide extends React.PureComponent{

    /* Slide with title & subtitle */
    renderMainSlide(){
        return(
            <div contentEditable="true" suppressContentEditableWarning={true}>
                <h1>Click here to edit the title</h1>
                <h2>Click here to edit the subtitle</h2>
            </div>
        );
    }

    /* Slide with title & text */
    renderTextSlide(){
        return(
            <div contentEditable="true" suppressContentEditableWarning={true}>
                <h1>Click here to edit the title</h1>
                <h2>Click here to edit the text</h2>
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
        switch(this.props.slideType){
            case SLIDE_TITLE:
                return this.renderMainSlide();
            case SLIDE_TEXT:
                return this.renderTextSlide();
            default:
                return this.renderBlankSlide();
        };
    }
}

export default Slide;
