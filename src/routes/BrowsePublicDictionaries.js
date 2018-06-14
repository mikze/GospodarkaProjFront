import React, { Component } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import treeTableHOC from "react-table/lib/hoc/treeTable";
import 'react-table/react-table.css';
import { fetchPublicDictionaries, addOpinion } from '../actions/actions';
import CoordinatesList from '../components/CoordinatesList';
import { ClipLoader } from 'react-spinners';

const TreeTable = treeTableHOC(ReactTable);

class BrowsePublicDictionaries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.dictionaries,
            currentPage: 0
        };
    }

    componentDidMount() {
        localStorage.setItem("user_details", "test@gmail.com|Jan|Nowak")
        this.props.fetchPublicDictionaries();
    }

    changePage = (page) => {
        this.setState({ currentPage: page })
    };

    render() {
        const { currentPage } = this.state;
        const data = this.props.dictionaries
        return data !== null ?
            <div className='container'>
                <h1 style={{ textAlign: 'center' }}>Public Dictionary: {data[currentPage].name}</h1>

                <h3>Cities:</h3>
                <TreeTable
                    data={data[currentPage].cities}
                    pivotBy={['name']}
                    columns={[{
                        Header: `Cities`,
                        accessor: 'name'
                    }, {
                        Header: 'Longitude',
                        accessor: 'longitude'
                    }, {
                        Header: 'Latitude',
                        accessor: 'latitude'
                    }]}
                    SubComponent={row => {
                        console.log(row.original);
                        const city = row.original;
                        console.log(city);
                        return <div style={{ padding: 12, margin: 'aut auto auto 0' }}><table>
                            <tbody>
                                <tr>Positive opinions: {city.positiveOpinions}
                                    <button
                                        onClick={() => {
                                            this.props.addOpinion('city', city.name, data[currentPage].name, true)
                                            this.props.fetchPublicDictionaries();
                                        }
                                        }
                                        type="button"
                                        className="mb-4 mr-4 btn btn-success">Vote up</button>
                                </tr>
                                <tr>Negative opinions: {city.negativeOpinions}
                                    <button
                                        onClick={() => {
                                            this.props.addOpinion('city', city.name, data[currentPage].name, false)
                                            this.props.fetchPublicDictionaries()
                                        }}
                                        type="button"
                                        className="mb-4 mr-4 btn btn-success">Vote down</button>
                                </tr>
                            </tbody>
                        </table >
                        </div>
                    }}
                    pageSize={data[currentPage].cities.length}
                    showPagination={false}
                />

                <h3>Countries:</h3>
                <TreeTable
                    data={data[currentPage].countries}
                    pivotBy={[]}
                    columns={[{
                        Header: `Countries`,
                        accessor: 'name',
                    }
                    ]}
                    SubComponent={row => {
                        console.log(row.original);
                        const country = row.original;
                        console.log(country);
                        return <div style={{ padding: 12, margin: 'aut auto auto 0' }}><table>
                            <tbody>
                                <tr>Positive opinions: {country.positiveOpinions}
                                    <button
                                        onClick={() => {
                                            this.props.addOpinion('country', country.name, data[currentPage].name, true)
                                        }
                                        }
                                        type="button"
                                        className="mb-4 mr-4 btn btn-success">Vote up</button>
                                </tr>
                                <tr>Negative opinions: {country.negativeOpinions}
                                    <button
                                        onClick={() => {
                                            this.props.addOpinion('country', country.name, data[currentPage].name, false)
                                        }}
                                        type="button"
                                        className="mb-4 mr-4 btn btn-success">Vote down</button>
                                </tr>
                                <tr>
                                    {country.coordinates.map(function (value, index) {
                                        return <td>Area nr: {index}<CoordinatesList coordinates={value} /></td>
                                    })}
                                </tr>
                            </tbody>
                        </table >
                        </div>
                    }}
                    pageSize={data[currentPage].countries.length}
                    showPagination={false}
                />
                <ReactTable
                    data={data}
                    columns={[{}]}
                    pageSize={1}
                    noDataText=""
                    NoDataComponent={"Component"}
                    showPageSizeOptions={false}
                    onPageChange={(index) => { this.changePage(index) }}
                    pageText='Dictionary'
                />
            </div>
            :
            <div className="loading">
                <ClipLoader
                    size={300}
                    color={'#028dd1'}
                    loading={this.props.loading}
                />
            </div>;
    }
}

const mapStateToProps = ({ Dictionaries, Loading }) => {
    const dictionaries = Dictionaries.publicDictionaries;
    return { dictionaries, loading: Loading };
};

const ConnectedBrowsePublicDictionaries = connect(mapStateToProps, { fetchPublicDictionaries, addOpinion })(BrowsePublicDictionaries);
export { ConnectedBrowsePublicDictionaries as BrowsePublicDictionaries };