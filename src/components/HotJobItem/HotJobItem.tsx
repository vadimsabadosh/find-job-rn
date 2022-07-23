import { StyleSheet, View, Image, Text, Button } from 'react-native';
import React from 'react';
import Colors from '~/constants/Colors';

type TJobItem = {
  id: string;
  companyName: string;
  companyIcon: string;
  position: string;
  city: string;
  country: string;
  salary: string;
  margin: boolean;
};

export default function HotJobItem({
  companyIcon,
  companyName,
  position,
  salary,
  margin,
  country,
  city,
}: TJobItem) {
  return (
    <View style={[styles.container, margin && styles.first]}>
      <View style={styles.top}>
        <View>
          <Image source={{ uri: companyIcon }} style={styles.icon} />
          <Text style={styles.subtitle}>{companyName}</Text>
        </View>
        <Button title="like" color="black" />
      </View>
      <Text style={styles.position}>{position}</Text>
      <View style={styles.salaryBlock}>
        <Text style={styles.salary}>${salary}/m</Text>
        <Text style={styles.subtitle}>
          {city}, {country}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  first: {
    marginLeft: 20,
  },
  icon: {
    width: 36,
    height: 36,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 6,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#D9DADF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    width: 250,
    height: 140,
    marginBottom: 20,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  subtitle: {
    color: Colors.light.darkGrey,
  },
  position: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  salaryBlock: {
    flexDirection: 'row',
  },
  salary: {
    fontWeight: 'bold',
    marginRight: 10,
  },
});
