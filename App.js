/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <View style={styles.caption}>
        <View style={styles.login}>
          <View style={styles.logo}>
            <Text>Logo</Text>
          </View>
          <View style={styles.loginArea}>
            <Text style={styles.loginHeader}>Life Code'e hoş geldiniz!</Text>
            <Text style={styles.loginDescription}>
              İşletmenizin ofis yönetimine ve detaylı finansal raporlarınıza
              buradan erişebilirsiniz.
            </Text>
            <View style={styles.form}>
              <Text style={styles.emailHeader}>E-posta Adresi</Text>
              <TextInput
                style={styles.input}
                placeholder="test@worqcompany.com"
              />
              <Text style={styles.passwordHeader}>Şifre</Text>
              <TextInput style={styles.input} placeholder="Şifreniz" />
              <View style={styles.button}>
                <Button
                  style={styles.loginButton}
                  color="#005c64"
                  title="Giriş Yap"
                />
              </View>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.loginFooter}>
            <View>
              <Text>Şifremi unuttum</Text>
            </View>
            <View>
              <Text>S.S.S</Text>
            </View>
            <View>
              <Text>İletişim</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  caption: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '20%',
    zIndex: 1,
    shadowColor: '#000',
    marginTop: '-12.5%',
    marginLeft: '10%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginArea: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  login: {
    backgroundColor: 'white',
    width: '80%',
    marginTop: '10%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginHeader: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  loginDescription: {
    marginBottom: 15,
    lineHeight: 23,
  },
  form: {},
  emailHeader: {
    marginBottom: 5,
  },
  passwordHeader: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
    height: 45,
    padding: 12,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    marginTop: 15,
    backgroundColor: 'red',
  },
  separator: {
    borderWidth: 0.3,
    marginTop: 15,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  loginFooter: {
    flex: 1,
    flexDirection: 'row',
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default App;
