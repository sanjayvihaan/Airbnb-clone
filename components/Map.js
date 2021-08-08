import { useState } from "react"
import ReactMapGL from 'react-map-gl';
import getCenter from "geolib/es/getCenter";


function Map({ searchResults }) {

    

    // transform the search results object into the 
    // { latitude: 52.5216272, longitube: 13.377722} 
    // object

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));
    
    const center = getCenter;(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });
    

    return<ReactMapGL
        mapStyle='mapbox://styles/vsanjay/cks0n36nu0yph17q6pd22xjpf'
        mapboxApiAccessToken="pk.eyJ1IjoidnNhbmpheSIsImEiOiJja3MwbWJtYXMxbGM2Mm9uOGt6MXc2Y3hmIn0.Ds8ggew6RZPd741DbmUd4w"
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}

    >
        
    </ReactMapGL>;

}

export default Map;
