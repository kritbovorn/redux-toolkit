import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import SizeConfig from '../../utils/size_config';

import { colors } from '../../utils/colors';

interface Props {
  caption: string;
  onPress(): void;
}

const OutlinedRoundedButton: React.FC<Props> = ({caption, onPress}) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => onPress()}
      underlayColor={colors.primaryBlue}>
        <Text style={[styles.text, {fontSize: SizeConfig.title}]}>{caption}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: SizeConfig.midBorder,
    borderColor: colors.secondary,
    borderWidth: SizeConfig.minBorder
  },
  text: {
    color: colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default OutlinedRoundedButton;
