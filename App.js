import React, {useState, Component} from 'react';
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
  ScrollView
} from 'react-native';

import Location from './Components/Location';
import Geolocation from '@react-native-community/geolocation';
import UsersMap from './Components/UsersMap'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      p: true,
    };
  }

  getUserLocationHandler = () => {
    //Geolocation.getCurrentPosition(info => console.log(info));
    navigator.geolocation = require('@react-native-community/geolocation');
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
    },error => console.log(error));
  };

  upload() {
    const {username, password} = this.state;
    fetch('https://datawrap-test.nue.com.mx/api/datawrap/users/getToken', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {username, password} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <ScrollView>
        <View>
         
          <Image
            style={styles.imageWrap}
            source={require('./images/datawrapLogo.png')}
          />
          <Text
            style={styles.dataWrap}>
            DataWrap
          </Text>
          <Text
            style={styles.Sesion}>
            Inicia Sesión
          </Text>
        </View>
        <View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={{flex: 1}}
              placeholder="Email or username"
              underlineColorAndroid="transparent"
              onChangeText={(value) => this.setState({username: value})}
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
              secureTextEntry={this.state.p}
              onChangeText={(value) => this.setState({password: value})}
            />
            <TouchableOpacity
              onPress={() => {
                this.setState({p: !this.state.p});
              }}>
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

        <View>
          <Location onGetLocation={this.getUserLocationHandler} />
          <UsersMap/>
        </View>
        <View style={styles.footer}>
          <Text>2020 Nue Technologies</Text>
          <Text>Made with ❤</Text>
        </View>
        </ScrollView>
      </View>
    );
  }
}

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
    backgroundColor: 'black',
    marginBottom: 10,
    marginLeft: win.width * 0.05,
    marginRight: win.width * 0.05,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    bottom: 0,
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
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
  dataWrap:{
    fontSize: 24,
              color: 'cadetblue',
              alignContent: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              marginLeft: win.width * 0.1,
              marginRight: win.width * 0.1,
  },
  Sesion:{
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Roboto',
    marginLeft: win.width * 0.1,
    marginRight: win.width * 0.1,
  }
});
