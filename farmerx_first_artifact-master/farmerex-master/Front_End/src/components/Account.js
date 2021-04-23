import { useEasybase } from 'easybase-react';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { withRouter } from 'react-router';

export default function Account() {
  const [userVal, setUserVal] = useState("");
  const [passVal, setPassVal] = useState("");

  const clearInputs = () => {
    setUserVal("");
    setPassVal("");
  }
  const {Frame, sync} = useEasybase();

  const handleSignUpPress = () => { 
    Frame().push( {
      Email : userVal,
      Password : passVal
    })
    console.log(userVal, "added");
    sync();
    clearInputs();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput value={userVal} onChangeText={e => setUserVal(e)} style={styles.accountInput} placeholder="Username" />
      <TextInput value={passVal} onChangeText={e => setPassVal(e)} style={styles.accountInput} placeholder="Password"/>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
        <Button color='gray' title="Register" onPress={handleSignUpPress}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.548)',
    height: 40,
    width: "75%",
    margin: 10,
    fontSize: 22,
    textAlign: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    fontStyle: "bold",
    marginBottom: 30
  }
});