import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { portkey } from '@portkey/react-native-sdk';

export default function App() {
  const onPress = async () => {
    console.log('aaa');
    try {
      const res = await portkey.login();
      console.log('bbb');
    } catch (error) {
      console.log('err', error);
    }
  };

  const getWalletInfo = async () => {
    console.log('aaa');
    try {
      const res = await portkey.getWalletInfo();
      console.log('bbb', res);
    } catch (error) {
      console.log('err', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text>Login</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={getWalletInfo}>
        <Text>Get Wallet Info</Text>
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
