import React, { useState, useEffect } from 'react';

import Register from './Register';
import RegisterFields from './RegisterFields';
import Login from './Login';
import Profile from './Profile';
import EditDetails from './EditDetails';
import SystemAdmin from './SystemAdmin';
import { Routes, Route} from 'react-router-dom';

export default function Main() {

    const [usersList, setUsersList] = useState([]);

    //gets user from child and adds it to the list
    const getUserFromChild = (user) => {
        let newUsers = [...usersList, user];
        // console.log('Main- updated user list', newUsers);

        //add to list
        setUsersList(newUsers);
    }

    const getLoginUserDetails = (email, password) => {

    }

    //Check local storage on component mount- only when the page loaded
    useEffect(() => {
        const usersFromLocalStorage = localStorage.getItem('usersList');
        //debugger
        if (usersFromLocalStorage) {
            setUsersList(JSON.parse(usersFromLocalStorage));
        }
    }, []);

    //runs foreach update in the usersList
    useEffect(() => {
        localStorage.setItem('usersList', JSON.stringify(usersList));
    }, [usersList]);



    //func for admin login 
    //  function login(username, pass){
    //     if(is admin)
    //   }

    console.log('Main-return userslist:', usersList);

    return (

        <Routes>
            <Route path='/' element={<Login users={usersList}/>}/> 
            <Route path='/RegisterFields' element={<RegisterFields send2Parent={getUserFromChild}/>}/>
            <Route path='/Profile' element={<Profile/>}/> 
            <Route path='/EditDetails' element={<EditDetails/>}/>
            <Route path='/SystemAdmin' element={<SystemAdmin/>}/> 
            {/* <Route path='/Register'/> */}



            {/* <Register usersList={usersList} /> */}
        
            {/* <Profile /> */}

            {/* <EditDetails/> */}

            {/* <SystemAdmin/> */}

        </Routes>
    )
}
