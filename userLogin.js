import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';


const upload = (username, password) => {

fetch('https://datawrap-test.nue.com.mx/api/datawrap/users/getToken', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "username": username ,
    "password":password
  })
}).then((response) => response.json())
.then((json) => {
  console.log(json)
  return json.movies;
})
.catch((error) => {
  console.error(error);
});


};


const Cat = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [p, setP] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View>
        <Image
          style={styles.imageWrap}
          source={require('./images/datawrapLogo.png')}
        />
        <Text
          style={{
            fontSize: 24,
            color: 'cadetblue',
            alignContent: 'center',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            marginLeft: win.width * 0.1,
            marginRight: win.width * 0.1,
          }}>
          DataWrap
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontFamily: 'Roboto',
            marginLeft: win.width * 0.1,
            marginRight: win.width * 0.1,
          }}>
          Inicia Sesión
        </Text>
      </View>
      <View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Email or username"
            underlineColorAndroid="transparent"
            onChangeText={(value) => setUsername(value)}
          />
          <Image
            source={require('./images/user.png')} //Change your icon image here
            style={styles.ImageStyle}
            
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your Name Here"
            underlineColorAndroid="transparent"
            secureTextEntry={p}
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity onPress={()=> {setP(!p)}}>
          <Image
            source={require('./images/password.png')} //Change your icon image here
            style={styles.ImageStyle}
            
          />
          </TouchableOpacity>
          
        </View>
      </View>
      <View style={styles.rstPassword}>
        <Button
          title="Olvidaste tu contraseña?"
          onPress={() => {
            alert('se activara otra pantalla');
          }}></Button>
      </View>
      <View style={styles.login}>
        <Button
        buttonStyle={styles.login}
          title="LOGIN"
          onPress={() => {
            alert(username + ' ' + password);
            upload(username, password);
          }}></Button>
      </View>
      <View style={styles.footer}>
        <Text>2020 Nue Technologies</Text>
        <Text>Made with ❤</Text>
      </View>
    </View>
  );
};

const win = Dimensions.get('window');
const ratio = win.width / 541;
const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    color: 'black',
  },
  textInput: {
    fontSize: 20,
    color: 'black',
    alignContent: 'flex-start',
  },
  imageWrap: {
    width: win.width,
    height: 362 * ratio,
    marginTop: 0,
  },
  rstPassword: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: win.width * 0.05,
    marginRight: win.width * 0.05,
  },  
  login: {
    backgroundColor:'black',
    marginBottom: 10,
    marginLeft: win.width * 0.05,
    marginRight: win.width * 0.05,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    bottom:0,
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    
},
});

export default Cat;
