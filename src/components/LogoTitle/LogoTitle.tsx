import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

export default function LogoTitle(props: any) {
  console.log('LogoTitle ~ props', props);
  return (
    <View style={styles.bg}>
      <Text>LogoTitle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.light.bgColor,
  },
});
