import React, { useState } from "react";
import { Text, TextInput, View } from 'react-native';
import FilledButtonComponent from "../../../components/buttons/buttons/filled_button_component";
import DropdownComponent from "../../../components/dropdown/dropdown_component";
import { gbs, sc } from "../../../components/import/import_options";
import Spacer from "../../../components/spacer/spacer";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { selectAllUsers } from "../users/user_slice";
import { postAdded } from "./post_slice";

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useAppDispatch();
    const users = useAppSelector(selectAllUsers);

    const savePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId));
            setTitle('');
            setContent('');
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    return (
        <View style={[{ flex: 0, justifyContent: 'space-evenly', marginBottom: sc.maxPad }]} >
            <Text style={[gbs.head3, { marginBottom: sc.midPad }]}>Add New Post</Text>

            <DropdownComponent datas={users} onPress={(id) => setUserId(id)} />

            <View style={{zIndex: -1}}>
                <TextInput
                    key={'post title'}
                    style={[gbs.head, gbs.textfieldBorder, {}]}
                    placeholder="Title"
                    defaultValue={title}
                    onChangeText={(value) => setTitle(value)} />

            </View>
            <Spacer />
            <View style={{zIndex: -1}}>
                <TextInput
                    numberOfLines={3}
                    key={'post content'}
                    style={[gbs.head, gbs.textfieldBorder, { minHeight: sc.cardListHeight * 0.7 }]}
                    placeholder="Content"
                    defaultValue={content}
                    onChangeText={(value) => setContent(value)} />
            </View>
            <Spacer />

            <View style={[{ height: sc.buttonHeight, zIndex: -1 }]}>
                <FilledButtonComponent disabled={!canSave} title="Add Post" onPress={() => savePostClicked()} />
            </View>

        </View>

    );
}

export default PostForm;




