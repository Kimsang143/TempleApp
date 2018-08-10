import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
 
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
 
const images = [
    "http://www.appleshowroominpune.in/images/apple-showroom-pune-banner.jpg",
    "http://the-phone-spa.com/images/apple-showroom-pune-banner5.jpg",
    "https://ksassets.timeincuk.net/wp/uploads/sites/54/2017/05/macbook-pro-13-2025-1.jpg"
];
 
export default class Banner extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});