import './App.css';
import Map, { useMap, MapProvider } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import { useState } from 'react';
import { Sidebar, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const sourceOne = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 101,
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [2.2919046878814697, 48.85770582708133],
            [2.293460369110107, 48.85676699291116],
            [2.29689359664917, 48.85901169495529],
            [2.2952628135681152, 48.860091657242556],
            [2.2919046878814697, 48.85770582708133]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": 102,
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [2.295616865158081, 48.854776323867306],
            [2.299962043762207, 48.85766347403937],
            [2.2930634021759033, 48.859195219601766],
            [2.295616865158081, 48.854776323867306]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": 103,
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [2.2956061363220215, 48.854783383117244],
            [2.2960352897644043, 48.854557486625396],
            [2.298835515975952, 48.85495280481723],
            [2.2995758056640625, 48.85545400732256],
            [2.3002195358276367, 48.857402296155435],
            [2.2999727725982666, 48.85766347403937],
            [2.2967326641082764, 48.85712699907286],
            [2.296217679977417, 48.85673875702427],
            [2.2956061363220215, 48.854783383117244]
          ]
        ]
      }
    }
  ]
}

const sourceTwo = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 201,
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [2.3013031482696533, 48.85227022723685],
            [2.301689386367798, 48.85253849146323],
            [2.3020541667938232, 48.852347882818634],
            [2.303706407546997, 48.85345622663062],
            [2.3034167289733887, 48.853703306301384],
            [2.3037922382354736, 48.85392214727714],
            [2.2998225688934326, 48.85644933826542],
            [2.299565076828003, 48.85541871153572],
            [2.2990500926971436, 48.85506575229865],
            [2.29738712310791, 48.8547480868576],
            [2.3013031482696533, 48.85227022723685]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": 202,
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [2.2954773902893066, 48.85463513865943],
            [2.297945022583008, 48.85306795611288],
            [2.3024833202362056, 48.85619521309753],
            [2.300165891647339, 48.85765641519554],
            [2.2954773902893066, 48.85463513865943]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": 203,
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [2.2945010662078857, 48.85822111955489],
            [2.295970916748047, 48.85458572374262],
            [2.297601699829101, 48.85410569058372],
            [2.30088472366333, 48.85637168904543],
            [2.300090789794922, 48.85738111951053],
            [2.2945010662078857, 48.85822111955489]
          ]
        ]
      }
    }
  ]
}


function TaskMap() {
  const [clickedFeatures, setClickedFeatures] = useState({});
  const maps = useMap();

  const onClickHandler = (event) => {  
    const mapRef = maps["spacemaker-task-map"];
    const thisMap = mapRef.getMap()
    const thisFeature = event.features[0]

    if (thisFeature != undefined ) {
      const isClicked = thisFeature.state.clicked || false

      if (isClicked) {
        thisMap.setFeatureState(thisFeature, {clicked: false})
      }
      else {
        thisMap.setFeatureState(thisFeature, {clicked: true})
      }
      
    }
      
  };

  return (
    <Map
    id='spacemaker-task-map'
    reuseMaps
    onClick={onClickHandler}
    initialViewState={{
      bounds:[[2.28893280029296,48.8503148697354],[2.30676412582397,48.8620470147439]]
    }}
    interactiveLayerIds={['SE_State_Management_Polygons_1', 'SE_State_Management_Polygons_2']}
    style={
      {
        height: '100vh'
      }
    }
    scrollZoom={false}
    boxZoom={false}
    doubleClickZoom={false}
    dragPan={false}
    mapStyle={{
      "name": "spacemaker-task-map",
      "zoom": 1,
      "pitch": 0,
      "center": [
          0,
          0
      ],
      "layers": [
          {
              "id": "background",
              "type": "background",
              "paint": {
                  "background-color": "#cccccc "
              },
              "filter": [
                  "all"
              ],
              "layout": {
                  "visibility": "visible"
              },
              "maxzoom": 24
          },
          {
            "id": "SE_State_Management_Polygons_1",
            "type": "fill",
            "paint": {
              'fill-opacity': 0.5,
              'fill-color': [
                'case',
                ['boolean',['feature-state', 'clicked'], false],
                '#64bdbb', // if selected true, paint in green
                '#5bc854' // else paint in blue
            ],
            },
            "layout": {
                "visibility": "visible"
            },
            "source": "SE_State_Management_Polygons_1"

          },
          {
            "id": "SE_State_Management_Polygons_2",
            "type": "fill",
            "paint": {
              'fill-opacity': 0.5,
              'fill-color': [
                'case',
                ['boolean',['feature-state', 'clicked'], false],
                '#64bdbb', // if selected true, paint in green
                '#5bc854' // else paint in blue
            ],
            },
            "layout": {
                "visibility": "none"
            },
            "source": "SE_State_Management_Polygons_2",

          },

      ],
      "bearing": 0,
      "sources": {
        "SE_State_Management_Polygons_1": {
          "type": "geojson",
          "data": sourceOne
        },
        "SE_State_Management_Polygons_2": {
          "type": "geojson",
          "data": sourceTwo
        }
      },
      "version": 8
    }}
    mapLib={maplibregl}
    >
    </Map>
  );
}


function SolutionsMenu() {
  const [activeItem, setActiveItem] = useState("Solution 1");
  const maps = useMap();
  const mapRef = maps["spacemaker-task-map"];
  
  const handleItemClick = (e, { name }) => {
    const thisMap = mapRef.getMap()

    if ( name == 'Solution 1') {
      thisMap.setLayoutProperty('SE_State_Management_Polygons_1', 'visibility', 'visible')
      thisMap.setLayoutProperty('SE_State_Management_Polygons_2', 'visibility', 'none')  
    } else {
      thisMap.setLayoutProperty('SE_State_Management_Polygons_2', 'visibility', 'visible')  
      thisMap.setLayoutProperty('SE_State_Management_Polygons_1', 'visibility', 'none')
    }
    
    setActiveItem(name)

  };

  return (
    <div>
      <Sidebar
        as={Menu}
        animation='push'
        vertical
        visible
        width='thin'
        direction='left'
      >
        <Menu.Item header>Solutions</Menu.Item>
        <Menu.Item
          name='Solution 1'
          active={activeItem === 'Solution 1'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Solution 2'
          active={activeItem === 'Solution 2'}
          onClick={handleItemClick}
        />
      </Sidebar>
    </div>
  );
}

function ControlMenu() {
  const [activeItem, setActiveItem] = useState("Union");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name)
  };

  return (
    <div>
      <Sidebar
        as={Menu}
        animation='push'
        vertical
        visible
        width='thin'
        direction='right'
      >
        <Menu.Item header>Operations</Menu.Item>
        <Menu.Item
          name='Union'
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Intersect'
          onClick={handleItemClick}
        />
      </Sidebar>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <MapProvider>
        <SolutionsMenu></SolutionsMenu>
        <TaskMap></TaskMap>
        <ControlMenu></ControlMenu>
      </MapProvider>
    </div>
  );
}

export default App;
