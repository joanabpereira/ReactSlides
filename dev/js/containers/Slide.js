import React from 'react';
import styled from 'styled-components';

class Slide extends React.PureComponent{
        render(){
            return(
                <div contentEditable="true">
                    Hello, world!
                </div>
            );
        }
}

export default Slide;
