import React from 'react';
import {useState, useContext, useEffect} from 'react';
import Header from '../Components/Header';
import logo from '../logo.png';
import * as ROUTES from '../Constants/routes';
import SelectProfileContainer from './profiles';
import { FirebaseContext } from '../context/firebase';

export default function BrowseContainer({slides}){
    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    return(
        <>
            <SelectProfileContainer user={user} />
        </>
    );
}