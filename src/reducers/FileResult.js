import * as types from '../consts/ActionConsts'

const DemoFile = [

    {
  
      "filename": "tekst1.txt",
  
      "cities": [
  
        {
  
          "name": "Wrocław",
  
          "latitude": 51.1078852,
  
          "longitude": 17.0385376
  
        },
  
        {
  
          "name": "Legnica",
  
          "latitude": 51.2070067,
  
          "longitude": 16.1553231
  
        }
  
      ],
  
      "countries": [
  
        {
          "name": "Poland",
        },
  
        {
          "name": "Croatia",
        }
  
      ]
  
    },
  
    {
  
      "filename": "tekst2.txt",
  
      "cities": [
  
        {
  
          "name": "Poznań",
  
          "latitude": 52.406374,
  
          "longitude": 16.9251681
  
        },
  
        {
  
          "name": "Konin",
  
          "latitude": 52.2230334,
  
          "longitude": 18.251073
  
        }
  
      ],
  
      "countries": [
  
        {  
          "name": "Germany",
        },
        {  
          "name": "Spain"
        }
  
      ]
  
    },
  
    {
  
      "filename": "tekst3.txt",
  
      "cities": [
  
        {
  
          "name": "Opole",
  
          "latitude": 50.6751067,
  
          "longitude": 17.9212976
  
        },
  
        {
  
          "name": "Brzeg",
  
          "latitude": 50.8608509,
  
          "longitude": 17.466831
  
        }
  
      ],
  
      "countries": [
  
        {
  
          "name": "Czech Republic",
  
          "centerLatitude": 49.81749199999999,
  
          "centerLongitude": 15.472962,
  
          "northEastLatitude": 51.0557185,
  
          "northEastLongitude": 18.8592361,
  
          "southWestLatitude": 48.5518081,
  
          "southWestLongitude": 12.090589
  
        }
  
      ]
  
    }
  
  ]
export const FileResult = (state = DemoFile, action) =>
{
    switch(action.type)
    {
        case types.SET_REC_JSON:
            return Object.assign({}, [{RecJSON: action.RecJSON}]);

        default:
        return state;
    }
}

