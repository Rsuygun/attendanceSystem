import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet, Image, Switch, ImageBackground, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const loadRememberedCredentials = async () => {
            try {
                const storedEmail = await AsyncStorage.getItem('email');
                const storedPassword = await AsyncStorage.getItem('password');
                const storedRememberMe = await AsyncStorage.getItem('rememberMe');

                if (storedEmail && storedPassword && storedRememberMe === 'true') {
                    setEmail(storedEmail);
                    setPassword(storedPassword);
                    setRememberMe(true);
                }
            } catch (error) {
                console.error("Hatırlanan kimlik bilgileri yüklenirken hata oluştu: ", error);
            }
        };

        loadRememberedCredentials();
    }, []);

    const handleLogin = async () => {
        if (email === '' || password === '') {
            Alert.alert("Hata", "Lütfen e-posta ve parola alanlarını doldurun.");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);

            if (rememberMe) {
                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('password', password);
                await AsyncStorage.setItem('rememberMe', 'true');
            } else {
                await AsyncStorage.removeItem('email');
                await AsyncStorage.removeItem('password');
                await AsyncStorage.removeItem('rememberMe');
            }

            const teacherEmails = ['nihat_uygun@edu.tr'];
            if (teacherEmails.includes(email)) {
                navigation.navigate('Teacher');
            } else {
                navigation.navigate('Student');
            }
        } catch (error) {
            let errorMessage = '';
            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessage = 'Geçersiz e-posta formatı.';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'Bu e-posta ile kayıtlı kullanıcı bulunamadı.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Yanlış parola. Lütfen tekrar deneyin.';
                    break;
                default:
                    errorMessage = 'Giriş başarısız. Lütfen tekrar deneyin.';
            }
            Alert.alert("Giriş Başarısız", errorMessage);
        }
    };

    return (
        <ImageBackground source={require('../assets/Construcator.png')} style={styles.background}>
            <View style={styles.container}>
                <Image source={require('../assets/university_logo.png')} style={styles.logo} />
                <View>
                    <Text style={styles.inputText}>E-POSTA:</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Text style={styles.inputText1}>PAROLA:</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                <View style={styles.switchContainer}>
                    <Text style={styles.Text}>Beni Hatırla</Text>
                    <Switch
                        style={styles.switch}
                        value={rememberMe}
                        onValueChange={setRememberMe}
                    />
                </View>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}>
                    <Text style={styles.buttonText}>GİRİŞ</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.16)',
        borderRadius: 10,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        marginLeft: 60
    },
    input: {
        width: 270,
        height: 40,
        borderColor: 'lightblue',
        borderWidth: 1,
        marginBottom: 4,
        paddingHorizontal: 10,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        opacity: 0.7
    },
    inputText: {
        color: '#154F91',
        marginBottom: 2,
        marginLeft: 2,
        fontWeight: 'bold'
    },
    inputText1: {
        color: '#154F91',
        marginTop: 10,
        marginBottom: 2,
        marginLeft: 2,
        fontWeight: 'bold'
    },
    switchContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
        backgroundColor: "#154F91",
        borderRadius: 50,
        marginTop: 0.1,
        marginRight: 130
    },
    switch: {
        marginBottom: 3,
        marginEnd: 3,
        marginStart: 3,
        marginVertical: 3
    },
    Text: {
        fontSize: 15,
        marginRight: 3,
        color: "lightgrey",
        fontWeight: 'bold',
        padding: 3
    },
    buttonText: {
        padding: 10,
        color: '#154F91',
        fontSize: 18,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 0.1,
        borderRadius: 10,
        alignItems: 'center',
        width: 250,
        margin: 3,
        marginTop: 40,
        marginLeft: 10
    }
});
