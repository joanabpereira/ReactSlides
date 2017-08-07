import React from 'react';
import styled from 'styled-components';

class Logo extends React.PureComponent{
    render(){
        return(
            <Wrapper>
                <h1>ReactSlides</h1>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    background-color: #292929;
    color: #eee;
    height: 10vh;
    padding: 5px 10px;
`;

export default Logo;
