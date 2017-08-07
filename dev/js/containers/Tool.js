import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

class Tool extends React.PureComponent{
    render(){
        return(
            <FontAwesome
                name={this.props.name}
                size='2x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
        );
    }
}

export default Tool;
