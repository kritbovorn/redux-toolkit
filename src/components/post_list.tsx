import React from "react";
import { Text ,View} from 'react-native';
import { useReceivedPostQuery } from "../api/api_slice";
import PostCard from "./post_card";

const   PostList = () => {

    const { data, isLoading, isSuccess, error} = useReceivedPostQuery();
  return (  
     <View style={{  margin: 8}} > 
      {isLoading ?  <Text style= {{fontSize: 60, alignSelf: 'center', color: 'white', fontWeight: 'bold'}}>Loading...</Text> : null}
      {data?.map((post) => <PostCard key={post.id} title={post.title} subtitle={post.body} />)}
      
    </View>
    
  );
}

export default PostList;



