// import { useEffect, useState } from 'react';
import axios from 'axios';

function submitPlayer(event : any) {
    event.preventDefault();
    
    const url = 'http://localhost:4000/players/';

    axios.post(url, {
        firstName : event.target.firstName.value,
        lastName : event.target.lastName.value,
        phone : event.target.phone.value,
        email : event.target.email.value,
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

function PlayerForm() {
    return (
        <div className="row">
            <h1 className="center">Add a new player</h1>
            <form className="col s12" onSubmit={submitPlayer}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="firstName" name="firstName" type="text" />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastName" name="lastName" type="text" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="phone" name="phone" type="number" />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" name="email" type="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <button type='submit' className='btn waves-effect waves-light' name='action'>Add player</button>
            </form>
        </div>
    );
}
 
export default PlayerForm;