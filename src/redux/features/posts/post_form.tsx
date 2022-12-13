import React, { useState } from "react";
import { Text, TextInput, View } from 'react-native';
import FilledButtonComponent from "../../../components/buttons/buttons/filled_button_component";
import { gbs, sc } from "../../../components/import/import_options";
import Spacer from "../../../components/spacer/spacer";
import { useAppDispatch } from "../../app/hook";
import { postAdded } from "./post_slice";
import { nanoid } from '@reduxjs/toolkit';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useAppDispatch();

    const savePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content));
            setTitle('');
            setContent('');
        }
    };

    return (
        <View style={[{ height: sc.cardListHeight * 2.5, justifyContent: 'space-evenly', marginBottom: sc.maxPad }]} >
            <Text style={[gbs.head3, {marginBottom: sc.midPad}]}>Add New Post</Text>
            
            <View style={{ flex: 1 }}>
                <TextInput
                    key={'post title'}
                    style={[gbs.head, gbs.textfieldBorder, {}]}
                    placeholder="Title"
                    defaultValue={title}
                    onChangeText={(value) => setTitle(value)} />

            </View>
            <View style={{}}>
                <TextInput
                    numberOfLines={3}
                    key={'post content'}
                    style={[gbs.head, gbs.textfieldBorder, { minHeight: sc.cardListHeight * 0.7 }]}
                    placeholder="Content"
                    defaultValue={content}
                    onChangeText={(value) => setContent(value)} />
            </View>
            <Spacer />
            
            <View style={[{height: sc.buttonHeight}]}>
            <FilledButtonComponent  title="Add Post" onPress={() => savePostClicked()} />
            </View>
            
        </View>

    );
}

export default PostForm;




