import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Feed from './Feed'
import '../../styles/art.css'

// Base Code: https://github.com/MingSheng92/react_isntafeed

const InstaFeeds = ({token, ...props}) => {

    const containerRef = useRef(null);

    const handleScroll = (event) => {
        const container = containerRef.current
        if (container) {
            container.scrollLeft += event.deltaY
            // event.preventDefault()
        }
    }

    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
            try{
                axios
                    .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp,username&limit=${props.limit}&access_token=${tokenProp.current}`)
                    .then((resp) => {
                        setFeedsData(resp.data.data)
                    })
            } catch (err) {
                console.log('error', err)
            }  
            try{
                axios
                    .get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${tokenProp.current}`)
                    .then(() => {
                        console.log("Long-lived token refreshed! 30 Days Time")
                    })
            } catch (err) {
                console.log('Long-lived token refresh error, check token validity', err)
            }
        }
        
        // manually call the fetch function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className="container" onWheel={handleScroll} ref={containerRef}>
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default InstaFeeds;