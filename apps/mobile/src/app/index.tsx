import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';


export const Home = () => {
    console.log('hi')
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
     <Text>Hi</Text>
    </View>
  );
};



export default Home;
