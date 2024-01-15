import React from 'react'
import { useParams } from 'react-router-dom';
import './hoja-de-estilos/CreateUser.css'
function CreateUser() {
    const params = useParams();
    const { path } = params;

    const goBack = ()=>window.location = '/rootInterface';

    return (
        <main className="d-flex align-items-center justify-content-center create-user">
            <form className='col-7 rounded pb-3'>
                <h2 className='ms-3 align-items-center mt-3'><i className="bi bi-chevron-left me-3" onClick={goBack}></i> Create user</h2>
                <div className='col-12 d-flex flex-column align-items-center mt-3'>
                    <input type="text" placeholder="User name*" className='rounded col-8 create-user' name='input-user-name'/>
                    <div className='col-12 d-flex justify-content-center mt-2'>
                        <input type="text" placeholder='Name*' className='rounded col-3 create-user' name='input-name'/>
                        <div className="col-1"></div>
                        <input type="text" placeholder='Last name*' className='rounded col-4 create-user' name='input-last-name'/>
                    </div>
                    <div className='col-12 d-flex justify-content-center mt-2'>
                        <input type="password" placeholder='Password*' className='rounded-left col-5 create-user' name='input-password' />
                        <button className='col-3 rounded-right button-generate-random'>Generate random</  button>
                    </div>
                    <input type="email" placeholder='Email*' className='rounded mt-2 col-8 create-user' name='input-email'/>
                    <button className='col-3 mt-3 rounded button-add-user' id='addUser'>Add user</button>
                    <div className='col-4 mt-3' id='container-messaje'></div>
                </div>

            </form>
        </main>
    )
}

export default CreateUser