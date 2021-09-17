import { ChangeEvent, FC, useState } from "react";
import "./RegistrationForm.css"

const RegistrationForm: FC = () => {
    const FORM_INITIAL_STATE = {
        email: "",
        firstName: "",
        lastName: ""
    };
    const [formData, setFormData] = useState(FORM_INITIAL_STATE);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        console.log(name, value)
        setFormData((formData) => ({...formData, [name]: value}));
    }
    return (
        <form>
            <h3>Register</h3>
            <label htmlFor="email">Enter email:</label>
                <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange} />
            <label htmlFor="firstName">Enter first name:</label>
                <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange} />
            <label htmlFor="lastName">Enter email:</label>
                <input
                type="text"
                name="lastname"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange} />
            <button>Create user!</button>
        </form>
    );
};

export default RegistrationForm;