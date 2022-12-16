import React from "react";
import { StyleSheet, Text ,View} from 'react-native';
import { colors, gbs, sc } from "../../../components/import/import_options";
import { useAppSelector } from "../../app/hook";
import { selectAllUsers } from "../users/user_slice";
import PostAuthor from "./post_author";

type Props = {
    title: string,
    content: string,
    userId: string
};

const Post = ({title, content, userId}: Props) => {
  const users = useAppSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId)
  return (  
     <View style={[styles.container, {flex: 0}]} > 
         <Text style= {[gbs.head3]}>{title}</Text>
          <Text style= {gbs.head1}>{content}</Text>
           <PostAuthor userId={userId} />
    </View>
  );
}

export default Post;


const styles = StyleSheet.create({
    container: {
      // height: sc.navBarHeight * 2.5,
      justifyContent: 'space-evenly',
      borderRadius: sc.midPad,
      borderWidth: sc.minSpace,
      borderColor: colors.backgroundNavbar,
      padding: sc.midPad,
      marginTop: sc.maxPad
    },
  });
