import React, { Component } from 'react';
import { Dimensions } from 'react-native';

class SizeConfig {
    static readonly screen = Dimensions.get('window');
    static readonly screenWidth = this.screen.width;    // 424
    static readonly screenHeight = this.screen.height;  // 724
    static readonly ratio = this.screenWidth / this.screenHeight;
    static isMobile = (this.ratio < 0.57);
    static readonly head5 = this.screenHeight * 0.0359;    // 26
    static readonly head4 = this.screenHeight * 0.03315; // 24
    static readonly head3 = this.screenHeight * 0.03038; // 22
    static readonly head2 = this.screenHeight * 0.02762; // 20
    static readonly head1 = this.screenHeight * 0.02486;   // 18
    static readonly head = this.screenHeight * 0.0221;  // 16
    static readonly body = this.screenHeight * 0.01933;   // 14
    static readonly title = this.screenHeight * 0.01657 ;   //  12
    static readonly subtitle = this.screenHeight * 0.01381;  // 10
    static readonly caption = this.screenHeight * 0.0110;   // 8

    static readonly minPad = this.screenWidth * 0.025;
    static readonly midPad = this.screenWidth * 0.035;
    static readonly maxPad = this.screenWidth * 0.045;
    
    static readonly minSpace = this.screenHeight * 0.0025;
    static readonly midSpace = this.screenHeight * 0.005;
    static readonly maxSpace = this.screenHeight * 0.01;



    // Card List :  84 / 724
    static readonly cardListHeight = this.screenHeight * 0.116022;
    


    // Navigation Bar : 55 / 724
    static readonly navBarHeight = this.screenHeight * 0.0759;

    // Sub head : 46 / 724
    static readonly breadcrumbHeight = this.screenHeight * 0.063535;
    
    // Head content Height : 80 / 724
    static readonly headStepperHeight = this.screenHeight * 0.110497;
    // Head Section Height : 65 / 724
    static readonly headSectionHeight = this.screenHeight * 0.08977;



    // Footer Height : 135 / 724
    static readonly footerHeight = this.screenHeight * 0.18646;

    // Footer Space Height : 30 / 724
    static readonly footerSpaceHeight = this.screenHeight * 0.04143;

    // Button Height : 47 / 724
    static readonly buttonHeight = this.screenHeight * 0.06491;

    // CheckBox Height : 28 / 724
    static readonly checkboxHeight = this.screenHeight * 0.03867;









    
    


}

export default SizeConfig;