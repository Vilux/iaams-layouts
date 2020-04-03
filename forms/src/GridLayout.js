import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row, Table } from 'react-bootstrap'



const GridLayout = () => {
    return (
        <>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>head</th>
                        <th>head</th>
                        <th>head</th>
                        <th>head</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>body</td>
                        <td>body</td>
                        <td>body</td>
                        <td>body</td>
                    </tr>
                    <tr>
                        <td>body</td>
                        <td>body</td>
                        <td>body</td>
                        <td>body</td>
                    </tr>
                    <tr>
                        <td>body</td>
                        <td>body</td>
                        <td>body</td>
                        <td>body</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default GridLayout