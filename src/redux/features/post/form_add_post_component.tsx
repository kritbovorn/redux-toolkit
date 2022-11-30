import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Touchable, TouchableHighlight, View } from 'react-native';
import { postAdded } from "./post_slice";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../utils/colors/colors";
import { selectAllUsers } from "../user/user_slice";

const FormAddPostComponent = () => {

    const disPatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userID, setUserID] = useState('')

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e: string) => setTitle(e);
    const onContentChanged = (e: string) => setContent(e);

    const onAuthorChanged = (e: string) => setUserID(e);

    const onSavedPostClicked = () => {
        if (title && content) {
            disPatch(postAdded(title, content, userID));
            setTitle("");
            setContent("");
        }
    }

    
    return (
        <View style={{ padding: 20 }} >

            <View style={{ padding: 14, backgroundColor: colors.secondaryBackground, borderRadius: 100, borderWidth: 5, borderColor: colors.border }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Add a new Post</Text>
            </View>
            <View style={{ marginVertical: 12 }}>
                <Text style={{ fontSize: 20, marginBottom: 8, fontWeight: '500' }}>Post Title</Text>
                <TextInput placeholder="Title" defaultValue={title} onChangeText={(e) => onTitleChanged(e)} style={{ fontSize: 18, padding: 12, backgroundColor: colors.primaryBackground }} />
            </View>
            <View style={{ marginVertical: 12 }}>
                <Text style={{ fontSize: 20, marginBottom: 8, fontWeight: '500' }}>Post Content.....</Text>
                <TextInput placeholder="Content" defaultValue={content} onChangeText={(e) => onContentChanged(e)} style={{ fontSize: 18, padding: 12, backgroundColor: colors.primaryBackground }} />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableHighlight onPress={() => onSavedPostClicked()} style={{ padding: 14, backgroundColor: colors.thirdBlue, borderRadius: 8, borderWidth: 2, borderColor: colors.primaryBlue }} >
                    <Text style={{ fontSize: 18, fontWeight: '500', color: "red" }}>Save</Text>
                </TouchableHighlight>
            </View>

        </View>
    );
}

export default FormAddPostComponent;

const styles = StyleSheet.create({
    textfield: {
        padding: 4,
    }
});

