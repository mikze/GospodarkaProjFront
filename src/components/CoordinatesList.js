import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class CoordinatesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinates: this.props.coordinates
        }
    }

    render() {
        console.log(this.state.coordinates)

        return (
            <table>
                <tbody>
                    {this.state.coordinates.map(function (value, index) {
                        return <tr key={index}>
                            <td>X: {value[0]}</td><td> Y: {value[1]}</td></tr>
                    })}
                </tbody>
            </table >);
    }
}

export default CoordinatesList;