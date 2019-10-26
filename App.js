import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  Alert } from 'react-native';

export default class App extends Component {

  render() {

    return (

      <View style={styles.container}> 
        <View style={styles.view}>
          <Text style={styles.text}>
            1688
          </Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>
            1588
          </Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>
            1488
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 30,
    backgroundColor: '#A2A19E',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  view: {
    width: '70%',
    height: 'auto',
    backgroundColor: '#FDCB43',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 7,
  },
  text: {
    padding: 20,
    fontSize: 20,

  }
});
