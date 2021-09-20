import { Button, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, FC, useState } from "react";
import "./RegistrationForm.css"
import yodlrApi from "./yodlrApi";

const RegistrationForm: FC = () => {
    const FORM_INITIAL_STATE = {
        email: "",
        firstName: "",
        lastName: ""
    };
    const [formData, setFormData] = useState(FORM_INITIAL_STATE);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((formData) => ({...formData, [name]: value}));
    }
    const submitForm = () => {
        console.log("SUBMITT")
        yodlrApi.register(formData)
    }
    return (
        <form onSubmit={submitForm}>
            <h3>Register</h3>
            <Typography variant="h3" gutterBottom component="label" htmlFor="email" className="label">Enter email:</Typography>
                <TextField
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                className="input" />
            <Typography variant="h3" gutterBottom component="label" htmlFor="firstName" className="label">Enter first name:</Typography>
                <TextField
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
                className="input" />
            <Typography variant="h3" gutterBottom component="label" htmlFor="lastName" className="label">Enter last name:</Typography>
                <TextField
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
                className="input" />
            <Button style={{display:"block", margin:"auto", top:"2rem", fontSize:"1em"}} variant="outlined" type="submit">Create user!</Button>
        </form>
    );
};

export default RegistrationForm;