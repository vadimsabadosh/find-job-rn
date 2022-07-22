import { StyleSheet } from 'react-native';
import SearchBar from '~/modules/SearchBar';
import PostItem from '../components/PostItem/PostItem';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.title}>HomeScreen</Text>
      <PostItem />
      <PostItem />
      <PostItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Colors.light.bgColor,
    paddingHorizontal: Layout.horizontalPadding,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
