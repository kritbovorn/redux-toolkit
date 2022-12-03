import React, { Component } from 'react';
import { Dimensions } from 'react-native';

class SizeConfig {
    static readonly screen = Dimensions.get('window');
    static readonly screenWidth = this.screen.width;
    static readonly screenHeight = this.screen.height;  // 597
    static readonly ratio = this.screenWidth / this.screenHeight;
    static isMobile = (this.ratio < 0.57);
    static readonly headline5 = this.screenHeight * 0.04355;    // 26
    static readonly headline4 = this.screenHeight * 0.0402; // 24
    static readonly headline3 = this.screenHeight * 0.0368; // 22
    static readonly headline2 = this.screenHeight * 0.0335; // 20
    static readonly headline1 = this.screenHeight * 0.03;   // 18
    static readonly headline = this.screenHeight * 0.0268;  // 16
    static readonly body = this.screenHeight * 0.02345;   // 14
    static readonly title = this.screenHeight * 0.02 ;   //  12
    static readonly subtitle = this.screenHeight * 0.0167;  // 10
    static readonly caption = this.screenHeight * 0.0134;   // 8
    
    static readonly minBorder = this.screenHeight * 0.002;
    static readonly midBorder = this.screenHeight * 0.005;
    static readonly maxBorder = this.screenHeight * 0.01;

    // Navigation Bar : 62 / 597
    static readonly navBarHeight = this.screenHeight * 0.1038
    // Bottom Bar Height : 56 / 597
    static readonly bottomBarHeight = this.screenHeight * 0.098;

    // Card in Auth : 120 : / 597
    static readonly widthCardAuth = this.screenWidth * 0.34;
    // Padding Left : 38 /  597
    static readonly paddingCardLeft = this.screenWidth * 0.1055;
     // Padding Left : 30 / 597
     static readonly paddingCardTop = this.screenHeight * 0.050;



    // Occupied Section : 55 / 597  :   320 / 360
    static readonly sectionOccupiedHeight = this.screenHeight * 0.09212;
    static readonly containerIconWidth = this.screenWidth * 0.2;    // 80

    // Card Result :  116 / 597   ,  140 / 360
    static readonly sectionCardResultHeight = this.screenHeight * 0.1943;
    static readonly sectionCardResultWidth = this.screenWidth * 0.3889;
    


}

export default SizeConfig;