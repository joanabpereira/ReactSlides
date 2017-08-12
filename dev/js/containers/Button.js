import React from 'react';
import styled from 'styled-components';

class Button extends React.PureComponent{
        render(){
            return(
                <Wrapper>
                    <a href="#">
                        {this.props.text}
                    </a>
                </Wrapper>
            );
        }
}

const Wrapper = styled.div`
    margin: 15px;
    position: relative;
    z-index:1;

    a:link,
    a:visited {
        border: 2px solid #30af2e;
        border-radius: 0;
        color: #fff;
        display: block;
        font-size:14px;
        font-weight: bold;
        letter-spacing: .08em;
        overflow: hidden;
        padding: 14px 15px;
        position: relative;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
        transition: all 1s ease;
        z-index:1;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -webkit-transition: all 1s ease;
    }
    a:link:after,
    a:visited:after {
        content: "";
        height: 0%;
        left: 50%;
        position: absolute;
        top: 50%;
        transition: all 0.75s ease 0s;
        width: 150%;
        z-index: -1;
        -moz-transition: all 0.75s ease 0s;
        -o-transition: all 0.75s ease 0s;
        -webkit-transition: all 0.75s ease 0s;
    }
    a:link:hover,
    a:visited:hover {
        color: #FFF;
        text-shadow: none;
    }
    a:link:hover:after,
    a:visited:hover:after {
        height: 450%;
    }
    a:after {
        background: #30af2e;
        opacity: .5;
        transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
    }
    a:hover:after {
        height: 140%;
        opacity: 1;
    }
`;

export default Button;
