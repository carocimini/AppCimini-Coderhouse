import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30, marginTop: 50}}>
      <View style= {styles.itemContainer} >
        <TextInput placeholder='Agregar Item a la lista' style={styles.inputItem} />
        <Button title='Agregar' style={styles.buttonItem} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 50
  },
  itemContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  inputItem: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    width: 200,
    marginRight: 10
  },
  buttonItem: {
    marginTop: 30
  },
});
