import { Typography } from "@material-ui/core";
import './Welcome.css';

const Welcome = () => {
    
    return (
        <div style={{marginTop:"25vh", marginBottom:"25vh", marginLeft: "15vw"}}>
            <Typography variant="h1" style={{fontSize:"8vw"}}>
                Welcome
            </Typography>
            <Typography>
                You are now an admin. Go ahead, create an account, or see a list of accounts created.
            </Typography>
        </div>
    );
}

export default Welcome;