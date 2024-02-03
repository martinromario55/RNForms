import { StatusBar as Status } from 'expo-status-bar'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  Switch,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'

export default function App() {
  // useState
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  // Validate form
  const validateForm = () => {
    const errors = {}
    if (!username) errors.username = 'Username is required'
    if (!password) errors.password = 'Password is required'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}
      style={styles.container}
    >
      <Status style="auto" />
      <View style={styles.form}>
        <Image
          source={require('./assets/adaptive-icon.png')}
          style={styles.image}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        {errors.username && (
          <Text style={styles.errorText}>{errors.username}</Text>
        )}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
        <Button title="Login" onPress={() => {}} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: 'center',
    marginBottom: 50,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
})
