import React, { Component } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import treeTableHOC from "react-table/lib/hoc/treeTable";
import 'react-table/react-table.css';
import { demoDictionaries } from '../assets/demoDictionaries';
import { fetchPublicDictionaries } from '../actions/actions';

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
        this.props.fetchPublicDictionaries();
    }

    changePage = (page) => {
        this.setState({ currentPage: page })
    };

    render() {
        const { data, currentPage } = this.state;

        return (
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
                    pageSize={data[currentPage].cities.length}
                    showPagination={false}
                />

                <h3>Countries:</h3>
                <TreeTable
                    data={data[currentPage].countries}
                    pivotBy={['name']}
                    columns={[{
                        Header: `Countries`,
                        accessor: 'name',
                    }, {
                        Header: `Center Latitude`,
                        accessor: 'centerLatitude',
                    }, {
                        Header: `Center Longitude`,
                        accessor: 'centerLongitude',
                    }, {
                        Header: `North-East Latitude`,
                        accessor: 'northEastLatitude',
                    }, {
                        Header: `North-East Longitude`,
                        accessor: 'northEastLongitude',
                    }, {
                        Header: `South-West Latitude`,
                        accessor: 'southWestLatitude',
                    }, {
                        Header: `South-West Longitude`,
                        accessor: 'southWestLongitude',
                    }]}
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
        );
    }
}

const mapStateToProps = ({ Dictionaries }) => {
    const dictionaries = Dictionaries.publicDictionaries;
    return { dictionaries };
};

const ConnectedBrowsePublicDictionaries = connect(mapStateToProps, { fetchPublicDictionaries })(BrowsePublicDictionaries);
export { ConnectedBrowsePublicDictionaries as BrowsePublicDictionaries };