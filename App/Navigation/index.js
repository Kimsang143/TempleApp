import React from 'react';
import { 
    createStackNavigator, 
    createDrawerNavigator, 
} from 'react-navigation';
import {
    createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';
// import App from './App';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

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


// export default createBottomTabNavigator({
//     Home: {
//         screen: HomeScreen,
//             navigationOptions: {
//                 title: 'Home',
//             },
//     },
//     Info: {
//         screen: InfoScreen,
//                 navigationOptions: {
//                 title: 'Info',
//             },
//     },
//     Settings: {
//         screen: SettingsScreen,
//                     navigationOptions: {
                
//             },
//     },
//     Cloud: {
//         screen: CloudScreen,
                
//                     navigationOptions: {
                
//             },
//         },       
// }, {
      
            
// });


const HomeStackNavigator = createStackNavigator({
     Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTintColor: '#ffff',
            headerStyle:{
                backgroundColor:'#1d2831',
                elevation: 0,
                showdowOpacity:0,
            }   
        }
    }
})
const InfoStackNavigator = createStackNavigator({
     Info: {
        screen: InfoScreen,
        navigationOptions: {
            headerTintColor: '#ffff',
            headerStyle:{
                backgroundColor:'#1d2831',
                elevation: 0,
                showdowOpacity:0,
            }   
        }
    }
})
const SettingsStackNavigator = createStackNavigator({
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            headerTintColor: '#ffff',
            headerStyle:{
                backgroundColor:'#1d2831',
                elevation: 0,
                showdowOpacity:0,
            }   
        }
    }
})

const CloudStackNavigator = createStackNavigator({
        Cloud: {
        screen: CloudScreen,
        navigationOptions: {
            headerTintColor: '#ffff',
            headerStyle:{
                backgroundColor:'#1d2831',
                elevation: 0,
                showdowOpacity:0,
            }   
        }
    },
   
});


export default createMaterialBottomTabNavigator(
    {
        Home: HomeStackNavigator,
        Info: InfoStackNavigator,
        Settings: SettingsStackNavigator,
        Cloud: CloudStackNavigator
    },
    {
        initialRouteName: 'Home',
        shifting: true,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;

                let iconName = 'home';
                if (routeName === 'Home') {
                    iconName = 'home';
                } else if (routeName === 'Noti') {
                    iconName = 'notifications';
                } else if (routeName === 'Menu') {
                    iconName = 'menu';
                }else if (routeName === 'Category') {
                    iconName = 'menu';
                }

                return <MaterialIcon name={iconName} size={25} color={tintColor} />;
            },
        }),
    }
)


// export default createDrawerNavigator(
//     {
//         Home: BottomNavigator
//     },
//     {
//         contentComponent: MenuScreen
//     }
// );

