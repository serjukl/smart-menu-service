import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJyh3KwRvrmaScA_tZhqyZlu91s_eiRh4",
    authDomain: "sm-smartmenu.firebaseapp.com",
    databaseURL: "https://sm-smartmenu.firebaseio.com",
    projectId: "sm-smartmenu",
    storageBucket: "sm-smartmenu.appspot.com",
    messagingSenderId: "984335128399",
    appId: "1:984335128399:web:6ab573efc674497344573a",
    measurementId: "G-C7LCM0QTX9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase