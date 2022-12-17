import React from "react";
import { Text ,View} from 'react-native';
import { colors, sc } from "../../../components/import/import_options";
import { useAppSelector } from "../../app/hook";
import { selectAllUsers } from "../users/user_slice";

type Props = {
    userId: string
}
const PostAuthor = ({userId}: Props) => {
    const users = useAppSelector(selectAllUsers);
    const author = users.find((user) => user.id === userId);
  return (  
     <View style={[{height: sc.headStepperHeight * 0.7, marginTop: sc.maxPad}]} > 
       <Text style= {[{fontSize: sc.head, color: colors.primaryBlue, fontWeight: 'bold'}]}>By : {author ? author.name : "Unknow Author"}</Text>
    </View>
  );
}

export default PostAuthor;



