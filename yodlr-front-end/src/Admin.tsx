import { DataGrid, GridColDef, GridRowId, GridRowModel } from "@mui/x-data-grid";
import { FC, useEffect, useState } from "react";
import { User } from "../interfaces";
import yodlrApi from "./yodlrApi";
import { Button } from "@mui/material";

const columns: GridColDef[] = [
    {field: "id", headerName: "Id", width:750},
    {field: "email", headerName: "Email", width:850},
    {field: "state", headerName: "State", width:850},
    {field: "firstName", headerName: "First name", width:900},
    {field: "lastName", headerName: "Last name", width:900}
]
const Admin: FC = () => {
    const [users, setUsers] = useState<User[]>();
    const [selectedRows, setSelectedRows] = useState<GridRowId[]>();
    const handleDelete = () => selectedRows?.forEach(async id => {
        typeof id === "number" && await yodlrApi.deleteUser(id);
        setUsers((users) => users?.filter(user => user.id !== id));
    });
    useEffect(() => {
        const getUsers = async () => {
            const users: [User] = await yodlrApi.getUsers();
            setUsers(users);
        }
        getUsers();
    }, []);
    return (
        <div style={{ width: '75%', marginLeft: "auto", marginRight:"auto", marginTop:"5vh"}}>  
            {users && (
                <>
                    <DataGrid
                        checkboxSelection
                        autoPageSize
                        autoHeight
                        columns={columns}
                        rows={users as GridRowModel[]}
                        onSelectionModelChange={(selection) => setSelectedRows(selection)}
                    />
                    {selectedRows && (
                        <Button 
                            style={{display:"block", margin:"auto", top:"2rem", width:"30vh"}} 
                            variant="outlined" 
                            type="submit" 
                            onClick={handleDelete}
                        >
                            {selectedRows?.length > 1 ? "Delete users!": "Delete user!"}
                        </Button>)}
                </>
            )}
        </div>
    );
};

export default Admin;