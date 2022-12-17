import { id } from "date-fns/locale";
import React from "react";
import { Text, TouchableHighlight, View } from 'react-native';
import { sc } from "../../../components/import/import_options";
import { useAppDispatch } from "../../app/hook";
import { PostState, reactionAdded, ReactionState } from "./post_slice";

const reactionMojis = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '🧡',
    rocket: '🚀',
    coffee: '☕️'
}

type Props = {
    post: PostState
}

const ReactionButton = ({ post }: Props) => {

    const dispatch = useAppDispatch();

    return (
        <View style={[{ flexDirection: 'row' }]} >
            {Object.entries(reactionMojis).map(([name, emoji], index) =>
                <View key={index} style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        onPress={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
                    >
                        <Text style={[{ fontWeight: 'bold', fontSize: sc.head1, marginBottom: sc.maxPad }]}>{emoji} {post.reactions[name]}</Text>

                    </TouchableHighlight>
                </View >
            )}
        </View>
    );
}

export default ReactionButton;



