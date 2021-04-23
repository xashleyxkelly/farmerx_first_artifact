import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useEasybase } from 'easybase-react';
import '../resources/login.css'
import {StyleSheet, View, Button, TextInput} from 'react-native';


export default function Login() {

    const {Frame, sync} = useEasybase();

    const [userVal, setUserVal] = useState("");
    const [passVal, setPassVal] = useState("");
    const history = useHistory();
    
    const routeChange = () =>{ 
        let path = `/dashboard`; 
        history.push(path);
    }

    const clearInputs = () => {
        setUserVal("");
        setPassVal("");
      }

    const handleSignInPress = () => { 
        var found = false;
        var i;
        for (i=0;i<Frame().length;i++) {
            if (Frame(i).Password == passVal) {
                if (Frame(i).Email == userVal) {
                    found = true;
                }
            }
        }
        if (found) {
            console.log(userVal, "found");
            routeChange();
        } else {
            console.log("Not found");
        }
        sync();
        clearInputs();
    }
    return (
        <div className="Login">
        <div className="Login-body">
            <div className="container" className="Login-fields">
            <div className="Login-labelinput">
                <TextInput value={userVal} onChangeText={e => setUserVal(e)} style={styles.loginInput} placeholder="Username" />
            </div>
            <div classNamec="Login-labelinput">
                <TextInput value={passVal} onChangeText={e => setPassVal(e)} style={styles.loginInput} placeholder="Password"/>
            </div>
            <Button title='Login' color='#009900'onPress={handleSignInPress}/>
             <Button title='Cancel' color='gray'/>
            </div>
        </div>
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.548)',
      height: 40,
      width: "100%",
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