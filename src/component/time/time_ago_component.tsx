import React from "react";
import { Text ,View} from 'react-native';
import { parseISO, formatDistanceToNow } from 'date-fns'

type Props = {
    timeStamp: string
}
const TimeAgoComponent = ({timeStamp}: Props) => {

    let timeAgo = "";

    if (timeStamp) {
        const date = parseISO(timeStamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`; 
    }

  return (  
     <View style={[]} > 
       <Text style= {[]}> {timeAgo} </Text>
    </View>
  );
}

export default TimeAgoComponent;



