import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, View } from 'native-base';

const backgroundColor = '#e97600';

export default class SettingsComponent extends Component {    
 
    
    render() {           
        return (
        <View style={{
            flex: 1,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                This is Settings Screen
        </Text>            
        </View>);
    }
}