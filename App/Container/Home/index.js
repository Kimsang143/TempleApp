import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import {Banner, Mansory} from '@components';
export default class Home extends Component {
  render() {
    return (
      <Container>
       
        <Content>
       
        <Banner />
   
        </Content>
      </Container>
    );
  }
}