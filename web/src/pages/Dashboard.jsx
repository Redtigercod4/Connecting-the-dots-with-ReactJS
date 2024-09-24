import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Layout from "../components/Layout"
import React from "react";

function Dashboard() {

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
                </TableBody>
            </TableContainer>
        </Layout>
    )
}

export default Dashboard;