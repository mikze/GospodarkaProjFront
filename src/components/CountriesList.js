import React, { Component } from 'react'

class CountriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: this.props.countries
        }
    }

    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }

    render() {
        return (
            <form method="POST" enctype="multipart/form-data" onSubmit={this.onFormSubmit}>
               
                <input placeholder="" type="file" name="file" accept='.zip' onChange={this.onChange}/>
                <input type="submit" />
            </form>
        )
    }
}

export default CountriesList;