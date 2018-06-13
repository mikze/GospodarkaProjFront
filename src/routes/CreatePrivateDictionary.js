import React, { Component } from 'react';
import { Form, Text, NestedField } from 'react-form';
import axios from 'axios';

const City = () => (
    <div>
        <label>
            Name: <Text field="name" defaultValue='' />
        </label>
        <label>
            Latitude: <Text type='number' field="latitude" defaultValue={0} />
        </label>
        <label>
            Longitude: <Text type='number' field="longitude" defaultValue={0} />
        </label>
    </div>
)

const Country = () => (
    <div>
        <div>
            <label>
                Name: <Text field="name" defaultValue='' />
            </label>
        </div>
        <div>
            <label>
                Area: <Text field="coordinates" defaultValue='' placeholder='[1,2],[2,3],[3,1]' />
            </label>
        </div>
    </div>
)


class CreatePrivateDictionary extends Component {

    createDictionary = () => {
        axios({
            method: 'POST',
            url: `http://kacperkluka.me/private/new`,
            data: this.state.dictionary
        }).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        localStorage.setItem("user_details", "test@gmail.com|Jan|Nowak")
    }

    prepareDictionary() {
        let newDictionary = this.state.dictionary;
        newDictionary.countries.forEach(country => {
            country.type = "Polygon"
            let newCoordinates = JSON.parse("[[" + country.coordinates + "]]");
            country.coordinates = newCoordinates;
        });
        this.setState({ dictionary: newDictionary })
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Create Private Dictionary</h1>

                <Form onSubmit={submittedValues => {
                    this.setState({ dictionary: submittedValues });
                    this.prepareDictionary();
                    this.createDictionary();
                    console.log(this.state.dictionary);
                }}>
                    {formApi => (
                        <div style={{ flex: 1 }}>
                            <form onSubmit={formApi.submitForm} id="dynamic-form">
                                <label htmlFor="name">Dictionary Name: </label>
                                <Text field="name" id="name" defaultValue='' />
                                <h3>Cities:</h3>
                                {formApi.values.cities && formApi.values.cities.map((city, i) => (
                                    <div key={`city${i}`}>
                                        <NestedField field={['cities', i]} component={City} />
                                        <button
                                            onClick={() => formApi.removeValue('cities', i)}
                                            type="button"
                                            className="mb-4 btn btn-danger">Remove</button>
                                    </div>
                                ))}
                                <h3>Countries:</h3>
                                {formApi.values.countries && formApi.values.countries.map((country, i) => (
                                    <div key={`country${i}`} style={{ flex: 1 }}>
                                        <NestedField field={['countries', i]} component={Country} />
                                        <button
                                            onClick={() => formApi.removeValue('countries', i)}
                                            type="button"
                                        >Remove Country</button>
                                    </div>
                                ))}

                                <button
                                    onClick={() => formApi.addValue('cities', '')}
                                    type="button"
                                    className="mb-4 mr-4 btn btn-success">Add city</button>
                                <button
                                    onClick={() => formApi.addValue('countries', '')}
                                    type="button"
                                    className="mb-4 mr-4 btn btn-success">Add country</button>
                                <button type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    )}
                </Form>

            </div >
        );
    }
}

export { CreatePrivateDictionary };