import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDr2xmdupZPyWWyt6M3r2z7IorrzaQOb68",
  authDomain: "attendancesystem-8a33a.firebaseapp.com",
  projectId: "attendancesystem-8a33a",
  storageBucket: "attendancesystem-8a33a.appspot.com",
  messagingSenderId: "279740315877",
  appId: "1:279740315877:web:0bb3ce0c8554a65e7f7c0c",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };

