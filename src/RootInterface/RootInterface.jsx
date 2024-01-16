import React from 'react'
import { Router, Routes, useParams } from 'react-router-dom';
import Nav from './components/Nav';
import UsersAdministration from './UsersAdministration/UsersAdministration';

function RootInterface(){
    const params = useParams();
    const { path } = params;
    return (
        <div>
            <Nav/>
            <UsersAdministration/>
        </div>
    )
}

export default RootInterface