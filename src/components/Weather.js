import * as React from "react";
import Table from "react-bootstrap/Table";
import "../styles/Weather.css"

class Weather extends React.Component {
        render() {
        return (
        <>
        <Table>
        { this.props.city &&
        <>
       <thead>{this.props.city} ({this.props.country})</thead>
        <tbody>
            <tr>
                <td>Temperature: {Math.round(this.props.temp)} °С</td>
            </tr>
            <tr>
                <td>Feels like: {Math.round(this.props.feels_like)} °С</td>
            </tr>
            <tr>
                <td>Wind speed: {this.props.wind} m/s</td>
            </tr>
        </tbody>
        </>
         }
        </Table>

        </>
        );
    }
}

export default Weather;