import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';



// 我的位置
const MyPositionMarker = ({ text }) => <div>{text}</div>;

const SimpleMap = (props) => {

    // 預設位置
    const [myPosition, setMyPosition] = useState({
        lat: 25.042118,
        lng: 121.541489
    });

    const [mapApiLoaded, setMapApiLoaded] = useState(false);
    const [mapInstance, setMapInstance] = useState(null);
    const [mapApi, setMapApi] = useState(null);

    // 當地圖載入完成，將地圖實體與地圖 API 傳入 state 供之後使用
    const apiHasLoaded = (map, maps) => {
        setMapInstance(map);
        setMapApi(maps);
        setMapApiLoaded(true);
    };
    const handleCenterChange = () => {
        if (mapApiLoaded) {
            setMyPosition({
                // center.lat() 與 center.lng() 會回傳正中心的經緯度
                lat: mapInstance.center.lat(),
                lng: mapInstance.center.lng()
            });
        }
    };


    // 找咖啡廳
    const [places, setPlaces] = useState([]);

    // Cafe Marker
    const CafeMarker = ({ icon, text }) => (
        <div>
            <img style={{ height: '20px', width: '20px' }} src={icon} alt="" />
            {/* <div>{text}</div> */}
        </div>
    );

    // const findCafeLocation = () => {
    //     if (mapApiLoaded) {
    //         const service = new mapApi.places.PlacesService(mapInstance);

    //         const request = {
    //             location: myPosition,
    //             radius: 1000,
    //             type: ['cafe']
    //         };

    //         service.nearbySearch(request, (results, status) => {
    //             if (status === mapApi.places.PlacesServiceStatus.OK) {
    //                 setPlaces(results); // 修改 State
    //             }
    //         });
    //     }
    // };



    // 創建一個 state
    const [searchType, setSearchType] = useState('cafe');




    //　改變搜尋類型
    const handleSearchType = e => {
        setSearchType(e.target.name);
    };

    // 搜尋
    const findLocation = () => {
        if (mapApiLoaded) {
            const service = new mapApi.places.PlacesService(mapInstance);
            const request = {
                location: myPosition,
                radius: 1000,
                type: searchType
            };

            service.nearbySearch(request, (results, status) => {
                if (status === mapApi.places.PlacesServiceStatus.OK) {
                    setPlaces(results);
                }
            });
        }
    };
    // Effect
    useEffect(
        function findLocation() { }
        , [searchType, myPosition]);

    // 切換搜尋類型按鈕
    const SearchType = ({ text, type }) => {
        return <input type="button" value={text} name={type} />;
    };

    // 創建一個 state
    const [mapType, setMapType] = useState('roadmap');

    // 改變地圖樣式
    const handleMapTypeId = e => {
        setMapType(e.target.name);
    };

    return (

        <div style={{ height: '50vh', width: '100%' }}>
            <input type="button" value="開始搜尋" onClick={findLocation} />
            <div onClick={handleSearchType}>
                <SearchType text="找餐廳" type="restaurant" />
                <SearchType text="找牙醫" type="dentist" />
                <SearchType text="找健身房" type="gym" />
                <input type="button" value="衛星" onClick={handleMapTypeId} name="hybrid" />
                <input type="button" value="路線" onClick={handleMapTypeId} name="roadmap" />
            </div>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: '請輸入googlemap的key',
                    libraries: ['places'] // 要在這邊放入我們要使用的 API
                }}
                options={{ mapTypeId: mapType }}

                // hybrid衛星圖 ， 預設值是roadmap

                onChange={handleCenterChange} // 移動地圖邊界時觸發 handleCenterChange
                defaultCenter={props.center}
                defaultZoom={props.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
            >
                <MyPositionMarker
                    lat={myPosition.lat}
                    lng={myPosition.lng}
                    text="My Position"
                />
                {/* 使用 map 方法渲染 */}
                {places.map((item, i) => (
                    <CafeMarker
                        key={i}
                        //    key={item.i}
                        icon={item.icon}
                        lat={item.geometry.location.lat()}
                        lng={item.geometry.location.lng()}
                        text={item.name}
                        placeId={item.place_id}
                    />
                ))}
            </GoogleMapReact>
        </div>
    );
};
// 由於改寫成 functional component，故另外設定 defaultProps
SimpleMap.defaultProps = {
    center: {
        lat: 25.042118,
        lng: 121.541489
    },
    zoom: 15
};

export default SimpleMap;

// lat={25.042118}
// lng={121.541489}


