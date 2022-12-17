import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import TimeAgoComponent from "../../../component/time/time_ago_component";
import { colors, gbs, sc } from "../../../components/import/import_options";
import PostAuthor from "./post_author";
import { PostState } from "./post_slice";
import ReactionButton from "./reaction_button";

type Props = {
  title: string,
  content: string,
  userId: string,
  date: string,
  post: PostState
};

const Post = ({ title, content, date, userId, post }: Props) => {

  return (
    <View style={[styles.container, { flex: 0 }]} >
      <Text style={[gbs.head3]}>{title}</Text>
      <Text style={gbs.head1}>{content}</Text>
      <PostAuthor userId={userId} />

      <ReactionButton post={post} />

      <TimeAgoComponent timeStamp={date} />
    </View>
  );
}

export default Post;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    borderRadius: sc.midPad,
    borderWidth: sc.minSpace,
    borderColor: colors.backgroundNavbar,
    padding: sc.midPad,
    marginTop: sc.maxPad
  },
});
