import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { colors } from '../../utils/colors';
import SizeConfig from '../../utils/size_config';

interface Props {
  caption: string;
  onPress(): void;
}

const FilledRoundedButton: React.FC<Props> = ({ caption, onPress }) => {
  return (
    <TouchableHighlight
      style={[styles.button]}
      onPress={() => onPress()}
      underlayColor={colors.background}>
      <Text style={[styles.text, { fontSize: SizeConfig.title, }]}>{caption}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderRadius: SizeConfig.midBorder,
    justifyContent: 'center'
  },
  text: {
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default FilledRoundedButton;
