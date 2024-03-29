import React, { useState } from 'react';
import './hoja-de-estilos/UsersAdministration.css'
function UsersAdministration() {
    const goCreateUsers = ()=> window.location = '/createUser';
    const [users,setUsers] = useState([]);
    
    return (
        <main className='user-administration'>
            <div className='col-12 d-flex justify-content-between'>
                <h1 className='ms-3 mt-2 title col-3'>Users</h1>
                <div className='me-3 mt-2 d-flex justify-content-between col-5'>
                    <div className='d-flex align-items-center'>
                        <input type="radio" name="radio"/><label for="radio" className='ms-2 mb-1'>Select</label>
                    </div>
                    <button className='mt-2 rounded-pill boton-anyadir-users' onClick={goCreateUsers}><i className="bi bi-person-plus-fill"></i> Add Users</button>
                    <form className='col-6 d-flex align-items-center position-relative ms-5'>
                        <i className="bi bi-search lupa"></i>
                        <input type="text"  name="user-search" className="rounded-left searcher p-1 ps-4" placeholder="Search user"/>
                    
                        <button className="rounded-right button-searcher p-1 pe-2">Search</button>
                    </form>
                </div>
            </div>
            <div className="container-users mt-4 d-flex flex-column align-items-center" >
                {

                }
            </div>
        <br/>
    </main>
    )
}

export default UsersAdministration