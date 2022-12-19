import React from "react";
import { Text, View } from 'react-native';
import { parseISO, formatDistanceToNow } from 'date-fns'
import { colors, sc } from "../../components/import/import_options";

type Props = {
  timeStamp: string
}
const TimeAgoComponent = ({ timeStamp }: Props) => {

  let timeAgo = "";

  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <View style={[]} >
      <Text style={[{ fontSize: sc.head, fontWeight: '500', color: colors.secondary }]}> {timeAgo} </Text>
    </View>
  );
}

export default TimeAgoComponent;



