import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Layout from "../components/layout"
import Tile from "../components/tile";
import React from "react";

function Dashboard() {
    const [data, setData] = React.useState();

    React.useEffect(() => {
        fetch("https://api.aetherion.workers.dev/")
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <Layout>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tail Number</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Previous Location</TableCell>
                            <TableCell>Next Location</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
                <TableBody>
                    <Tile props={data} />
                </TableBody>
            </TableContainer>
        </Layout>
    )
}

export default Dashboard;