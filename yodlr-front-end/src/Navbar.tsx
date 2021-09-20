import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { ChangeEvent, FormEventHandler, SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { SyntheticEventData } from "react-dom/test-utils";

const Navbar = () => {
    const [pageName, setValue] = useState("");
    const history = useHistory();

    const handleChange = (e: ChangeEvent<{}>, newPageName: string): void => {
      history.push(`/${newPageName}`);
      setValue(newPageName);
    };
    return (
        <BottomNavigation 
          showLabels 
          value=""
          style={{paddingTop: "1rem"}}
          onChange={handleChange}
        >
            <BottomNavigationAction
              label="Admin"
              value="admin"
              icon={<SupervisorAccountOutlinedIcon style={{fontSize: "3rem"}} />}
            />
            <BottomNavigationAction
              label="Register"
              value="register"
              icon={<AccountCircleOutlinedIcon style={{fontSize: "3rem"}} />}
            />
        </BottomNavigation>);
}

export default Navbar;