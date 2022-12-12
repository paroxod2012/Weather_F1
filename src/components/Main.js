import * as React from "react";
import "../styles/Main.css"


class Main extends React.Component {
        render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Enter the city name"/>
                <button type="submit">Get weather</button>
            </form>
        );
    }

  }

export default Main;