import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import CustomIcon from '~/components/CustomIcon/CustomIcon';
import Colors from '~/constants/Colors';

export default function SearchBar() {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setValue}
        value={value}
        placeholder="Search here..."
        style={[styles.input]}
        onSubmitEditing={() => console.log(value)}
      />
      <View style={styles.button}>
        <CustomIcon name="filter" color="#fff" onPress={() => console.log('press filter')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: Colors.light.black,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    shadowColor: '#D9DADF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  input: {
    height: 45,
    flex: 1,
    marginRight: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    shadowColor: '#D9DADF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
