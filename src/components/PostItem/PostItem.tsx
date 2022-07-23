import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

const PostItem = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'data:image/png;base64,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',
        }}
      />
      <View>
        <Text style={styles.title}>UX/UI Designer</Text>
        <Text style={styles.subtitle}>Full Time</Text>
      </View>
      <Text style={styles.salary}>$4500/m</Text>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 16,
    shadowColor: '#D9DADF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  image: {
    borderRadius: 10,
    width: 40,
    height: 40,
    resizeMode: 'cover',
    marginRight: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 5,
  },
  subtitle: {
    color: Colors.dark.darkGrey,
  },
  salary: {
    marginRight: 0,
    marginLeft: 'auto',
    color: Colors.dark.darkGrey,
  },
});
