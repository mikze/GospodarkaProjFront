import * as types from '../consts/ActionConsts'

//const DemoFile = [{"filename":"test.txt","cities":[{"name":"dziad","latitude":41.6752686,"longitude":-83.5953912}],"countries":[{"name":"Polska","centerLatitude":51.919438,"centerLongitude":19.145136,"northEastLatitude":54.9054761,"northEastLongitude":24.1458931,"southWestLatitude":49.002025,"southWestLongitude":14.1228641},{"name":"Litwa","centerLatitude":55.169438,"centerLongitude":23.881275,"northEastLatitude":56.45032089999999,"northEastLongitude":26.8355914,"southWestLatitude":53.89687869999999,"southWestLongitude":20.931}]},{"filename":"test2.txt","cities":[{"name":"Lwów","latitude":49.839683,"longitude":24.029717},{"name":"Lew","latitude":51.753257,"longitude":-1.534244},{"name":"Lew","latitude":51.753257,"longitude":-1.534244}],"countries":[]},{"filename":"test3.txt","cities":[],"countries":[{"name":"Polska","centerLatitude":51.919438,"centerLongitude":19.145136,"northEastLatitude":54.9054761,"northEastLongitude":24.1458931,"southWestLatitude":49.002025,"southWestLongitude":14.1228641},{"name":"Czech","centerLatitude":49.81749199999999,"centerLongitude":15.472962,"northEastLatitude":51.0557185,"northEastLongitude":18.8592361,"southWestLatitude":48.5518081,"southWestLongitude":12.090589},{"name":"Niemcy","centerLatitude":51.165691,"centerLongitude":10.451526,"northEastLatitude":55.0815,"northEastLongitude":15.0418962,"southWestLatitude":47.2701115,"southWestLongitude":5.8663425},{"name":"Polska","centerLatitude":51.919438,"centerLongitude":19.145136,"northEastLatitude":54.9054761,"northEastLongitude":24.1458931,"southWestLatitude":49.002025,"southWestLongitude":14.1228641},{"name":"Polska","centerLatitude":51.919438,"centerLongitude":19.145136,"northEastLatitude":54.9054761,"northEastLongitude":24.1458931,"southWestLatitude":49.002025,"southWestLongitude":14.1228641},{"name":"Dania","centerLatitude":26.052311,"centerLongitude":-80.1439343,"northEastLatitude":26.091565,"northEastLongitude":-80.106366,"southWestLatitude":26.0334668,"southWestLongitude":-80.2077669},{"name":"Szwecja","centerLatitude":60.12816100000001,"centerLongitude":18.643501,"northEastLatitude":69.0599709,"northEastLongitude":24.1773101,"southWestLatitude":55.0059799,"southWestLongitude":10.5798}]}]

export const FileResult = (state = [], action) =>
{
    switch(action.type)
    {
        case types.SET_REC_JSON:
            return Object.assign([], action.RecJSON);

        default:
        return state;
    }
}

