import { Card, CardContent, Typography } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { User } from "../interfaces";
import yodlrApi from "./yodlrApi";

const Admin: FC = () => {
    const [users, setUsers] = useState<[User]>();
    useEffect(() => {
        const getUsers = async () => {
            const users: [User] = await yodlrApi.getUsers();
            console.log(users)
            setUsers(users);
        }
        getUsers()
    }, []);

    return (
        <div>
            
            {users && (
                <>
                    {users.map(({firstName, lastName, email, id, state}) => {
                        return (
                            <Card>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                    >
                                            {firstName} {lastName}
                                        <Typography
                                            variant="caption"
                                        >
                                            ID:{id}
                                        </Typography>
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        gutterBottom
                                    >
                                        {email}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        style={{
                                            color: state === "active" ? "green" : "red",
                                            display: "block"
                                        }}
                                    >
                                        {state}
                                    </Typography>
                                </CardContent>
                            </Card>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default Admin;