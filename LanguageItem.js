import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ language }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.languageName}>{language.lang}</Text>
        <Text style={styles.experience}>Опыт: {language.experience} лет</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  textContainer: {
    marginLeft: 10,
  },
  languageName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 14,
    color: 'gray',
  },
});

export default LanguageItem;
