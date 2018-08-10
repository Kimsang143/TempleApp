
import {AppRegistry} from 'react-native';
import React, { Component } from 'react'

import { createBottomTabNavigator } from 'react-navigation';
// import App from './App';

import HomeScreen from './HomeScreen';
import InfoScreen from './InfoScreen';
import SettingsScreen from './SettingsScreen';
import CloudScreen from './CloudScreen';



// const categoryStack = StackNavigator({
//     Home: {
//         screen: HomeComponent,
//     },
//     Info: {
//         screen: InfoComponent,
//     },
// }, {
//   // mode: 'modal',
//   // navigationOptions: {
//   //   headerTintColor: '#333',
//   // }
// })
  
  

// export default createMaterialBottomTabNavigator({
//     Home: {
//         screen: HomeComponent,
//     },
//     Info: {
//         screen: InfoComponent,
//     },
//     Settings: {
//         screen: SettingsComponent,
//     },
//     Cloud: {
//         screen: CloudComponent,
//     },
//     },
//   { initialRouteName: 'Album',
//     tabBarPosition: 'bottom',
//     animationEnabled: true,
//     swipeEnabled: true,
//     tabBarOptions: {
//         activeTintColor: 'blue',
//         labelStyle: {
//             fontSize: 13,
//         },
//         style: {
//             backgroundColor: 'lightgray',
//             padding: -10
//         },    
//         // showLabel: false    
//     },    
//     // order: [Settings, Home, Cloud, Info],
//    })

// export default createMaterialBottomTabNavigator({
//     Home: {
//         screen: HomeComponent,
//             navigationOptions: {
                
//             },
//     },
//     Info: {
//         screen: InfoComponent,
//                 navigationOptions: {
                
//             },
//     },
//     Settings: {
//         screen: SettingsComponent,
//                     navigationOptions: {
                
//             },
//     },
//     Cloud: {
//         screen: CloudComponent,
//                 screen: SettingsComponent,
//                     navigationOptions: {
                
//             },

//     },
// }, {
//   initialRouteName: 'Home',
//   activeTintColor: '#F44336',
//   tabBarPosition: 'bottom',
//   animationEnabled: true,
//   swipeEnabled: true,
//       tabBarOptions: {
       
//         labelStyle: {
//             fontSize: 13,
//         },
//         style: {
//             backgroundColor: '#fff',
//             padding: -10
//         },    
//         // showLabel: false    
//     },  
// });


export default createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
            navigationOptions: {
                title: 'Home',
            },
    },
    Info: {
        screen: InfoScreen,
                navigationOptions: {
                title: 'Info',
            },
    },
    Settings: {
        screen: SettingsScreen,
                    navigationOptions: {
                
            },
    },
    Cloud: {
        screen: CloudScreen,
                
                    navigationOptions: {
                
            },
        },       
}, {
      
            
});
