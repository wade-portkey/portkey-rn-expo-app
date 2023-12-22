import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import '@portkey/react-native-sdk';

export default function App() {
  const onPress = () => {
    console.log('aaa');
    console.log('bbb');
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text>Click Me</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 44,
    backgroundColor: '#ccc',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
