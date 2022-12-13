import React from "react";
import { StyleSheet, Text ,View} from 'react-native';
import { colors, gbs, sc } from "../../../components/import/import_options";

type Props = {
    title: string,
    content: string
};

const Post = ({title, content}: Props) => {
  return (  
     <View style={[styles.container, {}]} > 
         <Text style= {[gbs.head3]}>{title}</Text>
          <Text style= {gbs.head1}>{content}</Text>
    </View>
  );
}

export default Post;


const styles = StyleSheet.create({
    container: {
      height: sc.navBarHeight * 2.5,
      justifyContent: 'space-evenly',
      borderRadius: sc.midPad,
      borderWidth: sc.minSpace,
      borderColor: colors.backgroundNavbar,
      padding: sc.midPad,
      marginTop: sc.maxPad
    },
  });
