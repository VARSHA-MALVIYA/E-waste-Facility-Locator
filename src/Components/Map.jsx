import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';
import React, { useEffect, useState, useRef, useContext } from 'react';
import leftArrowIcon from '../assets/left_arrow_ani.gif'
import Loader from './Loader';
import { toast } from 'react-toastify';
import dataNotFoundIcon from '../assets/Data_notfound_ani.gif'
import CenterDetailCard from './CenterDetailCard';

const Map = ({NextHandler}) => {

    const mapElement = useRef(null);
    const [map, setMap] = useState({});
    
    const [loading,setLoading] = useState(false);
    const [isMyLocationClicked,setIsMyLocationClicked] = useState(false)
    const [isNearbyButtonClicked,setisNearbyButtonClicked] = useState(false)
    const [userPosition, setUserPosition] = useState(null);
    const [ewasteCenters,setEwasteCenters] = useState([]);

    function initMap(){
        
        const mapInstance = tt.map({
            key: "xg1ElbjvgJgdgL109oxZ6y1K1MntxtBS",
            container: mapElement.current,
            center: [77.216721, 28.6448],
            zoom: 15
        });

        mapInstance.addControl(new tt.NavigationControl());
        mapInstance.addControl(new tt.FullscreenControl());
        setMap(mapInstance);
    }


    useEffect(() => {
        initMap()
    }, [])


    function showUserPosition(){
        setLoading(true);
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setUserPosition([longitude, latitude]);
            map.setCenter([longitude, latitude]);
            const userMarker = new tt.Marker({ color: 'red' }).setLngLat([longitude, latitude]).addTo(map);
        });
        setLoading(false);
        toast.success("Got Position",{
            hideProgressBar:true,
            position:"top-center",
            autoClose:1000,
            closeButton:false,
            style:{ width: '300px', padding: '10px' },
        })
        setIsMyLocationClicked(true)
    }

    const showEwasteCenters = async () => {
        setisNearbyButtonClicked(true)
        try {

            if (!userPosition) return;
            const apiKey = 'xg1ElbjvgJgdgL109oxZ6y1K1MntxtBS';
            const response = await fetch(`https://api.tomtom.com/search/2/poiSearch/e-waste.json?key=${apiKey}&lat=${userPosition[1]}&lon=${userPosition[0]}`);
            const data = await response.json();
            const centerResults = data.results;

            
            
            const newMarkers = centerResults.map(center => ({
                coordinates: [center.position.lon, center.position.lat],
                name: center.poi.name,
                address: center.address.freeformAddress,
                id: center.id ,
            }));

            setEwasteCenters(newMarkers);
    
            // Create bounds object to contain all markers including user's position
            const bounds = new tt.LngLatBounds();
            bounds.extend(userPosition);
    
            newMarkers.forEach(marker => {
                bounds.extend(marker.coordinates);
                const ewasteMarker = new tt.Marker({ color: 'green' }).setLngLat(marker.coordinates).addTo(map);
                const popupContent = `<div><h3>${marker.name}</h3><p>${marker.address}</p></div>`;
                ewasteMarker.setPopup(new tt.Popup({ offset: 30 }).setHTML(popupContent));
                ewasteMarker.on('click', () => {
                    ewasteMarker.togglePopup();
                });
            });
    
            // Fit the map to the bounds with padding
            map.fitBounds(bounds, { padding: 50 });

            setisNearbyButtonClicked(true)
    
        } catch (error) {
            console.error('Error fetching e-waste centers:', error);
        }
    };
    
  return (
    <div className="w-full h-full">
        {
            loading ? <Loader/> :
            <div className='w-full px-3 flex bg-white mx-auto  min-h-[95%] '>

                {/* left */}
                <div className='w-[40%] p-5 h-full'>

                        <div>
                            <p className='text-2xl font-semibold'>Find The Best Nearby <br /> <span className='font-bold text-green-500'>E-Waste Center</span> </p>
                            
                            <p className='my-4 text-gray-500'>With this Map, you can easily find all the top and good places where you will get good services and better disposal of your E-waste.</p>
                            
                            <p className='text-xs font-semibold text-red-500 underline'>Default Position is set to New Delhi.</p>
                        </div>

                        <div className='flex my-[5vh]'>

                            <button onClick={showUserPosition}  class="px-5  mx-auto py-2.5 font-medium bg-blue-100 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-2xl text-sm">
                                My Position
                            </button>

                            <button onClick={showEwasteCenters} disabled={!isMyLocationClicked}   class="relative rounded-2xl mx-auto  px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 disabled:cursor-not-allowed">
                                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span class="relative ">Nearby Centers</span>
                            </button>

                        </div>

                </div>

                {/* right */}
                <div className='w-[60%] p-2 h-full flex flex-col items-center bg-white'>

                    {/* div for map */}
                    <div
                    ref={mapElement}
                    className='w-full h-[60vh] rounded-xl bg-red-200 mx-auto border border-black m-5'>

                    </div>

                    {
                        isNearbyButtonClicked ? 
                        
                            ewasteCenters?.length ? 
                            // show centers
                            ewasteCenters.map((centerDets)=>(
                                <CenterDetailCard centerDets={centerDets} NextHandler={NextHandler} />
                            ))
                            :
                            // error
                            <>
                                <img src={dataNotFoundIcon} />
                                <p className='font-semibold text-red-600'>OOPS!! Data not found</p>
                            </>
                        :
                        <p className='flex items-center font-semibold'>
                            <img src={leftArrowIcon} alt="" />
                            Click on <span className='bg-[#e1ecfb] p-2 rounded-md ml-1'> { isMyLocationClicked?"Nearby Centers":" My Position" } </span>
                        </p>
                    }

                </div>
            
            </div>
        }

    </div>
  )
}

export default Map