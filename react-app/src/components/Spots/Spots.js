import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllSpots } from "../../store/spots";
import './Spots.css'


const Spots = () => {
    const dispatch = useDispatch();
    const spotsObj = useSelector(state => state?.spotReducer);
    const spots = spotsObj && Object.values(spotsObj)
    // console.log('spots?? @@@@@@@@@@@@', spotsObj)
    console.log('spots?? @@@@@@@@@@@@', spots)


    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch])

    return (
        <div className="spots_body_container">
            <div className="left_container">
                <h1>Explore Spots</h1>
                <div className="all_spots_container">
                    {spots.reverse().map((spot) => (
                        <a key={spot?.id} href={`/spots/${spot?.id}`}>
                            <div className="spot_box">
                                <div className="spot_box_left">
                                    <img
                                        className="spot_img"
                                        src={spot?.image_url}
                                        alt="spot_image"
                                    />
                                </div>

                                <div className="spot_box_right">
                                    <div className="top_half">
                                        <h3>{spot?.spot_name}</h3>
                                        <p>{spot?.city}, {spot?.state}</p>
                                        <p>Hosted by: {spot?.host}</p>
                                    </div>

                                    <div className="bottom_half">
                                        <h5>${spot?.price}/day</h5>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="right_container">
                <div id="picture_container">
                    <img src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="A-Frame-house" id="side_image" />
                </div>
            </div>
        </div>

    )
}

export default Spots
