import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


///////import {seedDatabase} from '../seed';

// we need to somehow seed the database

// we ned a config here 

const config = {
    apiKey: "AIzaSyDDoJR9yR6nDCJC8iGWvPPJll-FG_Ew0M4",
    authDomain: "netflix-clone-9d1c8.firebaseapp.com",
    projectId: "netflix-clone-9d1c8",
    storageBucket: "netflix-clone-9d1c8.appspot.com",
    messagingSenderId: "1022350002780",
    appId: "1:1022350002780:web:3d830708e69e588fcb7499"
};

const firebase = Firebase.initializeApp(config);

/////////seedDatabase(firebase);

export{firebase};