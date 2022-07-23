import { StyleSheet } from 'react-native';
import Title from '~/components/Title/Title';
import HotJob from '~/modules/HotJobList/HotJobList';
import SearchBar from '~/modules/SearchBar';
import PostItem from '../components/PostItem/PostItem';

import { View } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <SearchBar />
      </View>
      <HotJob />
      <View style={styles.container}>
        <Title>HomeScreen</Title>
        <PostItem />
        <PostItem />
        <PostItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.bgColor,
    paddingHorizontal: Layout.horizontalPadding,
  },
  wrapper: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Colors.light.bgColor,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
