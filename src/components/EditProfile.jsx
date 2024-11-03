import { useState } from "react";
import changeFirstName from "../api/changeFirstName";
import changeLastName from "../api/changeLastName";

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (firstName !== '' && lastName !== '') {
            const confirm = window.confirm(`do you really want to change your first name to ${firstName} and your last name to ${lastName}`);
            if (confirm) {
                await Promise.all([
                    changeFirstName(firstName),
                    changeLastName(lastName)
                ]);
            }
        } else if (firstName !== '') {
            const confirm = window.confirm(`are you sure you want to change your first name to ${firstName}`);
            if (confirm) {
                await changeFirstName(firstName);
            }
        } else if (lastName !== '') {
            const confirm = window.confirm(`are you sure you want to change your last name to ${lastName}`);
            if (confirm) {
                await changeLastName(lastName);
            }
        }

        window.location.reload();   
    };

    return (
        <form className="bg-light" onSubmit={handleSubmit}>
            <div className="m-2">
                <label htmlFor="firstNameInput">enter your new ffndfngdmf first name</label>
                <input type="text" className="form-control" id="firstNameInput"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="m-2">
                <label htmlFor="lastNameInput">enter your new last name</label>
                <input type="text" className="form-control" id="lastNameInput"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <button className="btn btn-dark m-2" disabled={firstName === '' && lastName === ''}>edit</button>
        </form>
    );
};

export default EditProfile;