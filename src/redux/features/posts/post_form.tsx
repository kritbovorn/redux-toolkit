import React, { useState } from "react";
import { Text, TextInput, View } from 'react-native';
import FilledButtonComponent from "../../../components/buttons/buttons/filled_button_component";
import DropdownComponent from "../../../components/dropdown/dropdown_component";
import { gbs, sc } from "../../../components/import/import_options";
import Spacer from "../../../components/spacer/spacer";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { selectAllUsers } from "../users/user_slice";
import { postAdded, addNewPost } from "./post_slice";

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const dispatch = useAppDispatch();
    const users = useAppSelector(selectAllUsers);

    // const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const savePostClicked = () => {
       
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch(addNewPost({title, body: content, userId})).unwrap()

                setTitle('');
                setContent('');
                setUserId('');
            } catch (err) {
                console.error("38: Failed to save the Post", err)
            } finally {
                setAddRequestStatus("idle");
            }
        }
        
    };

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




