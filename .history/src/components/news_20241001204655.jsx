import { useState } from "react"

export default funciton News({ news }) {

//     import React, { useEffect, useState } from 'react';

// const NewsCard = () => {
//     const [news, setNews] = useState([]);

//     useEffect(() => {
//         fetch('path/to/your/data.json')
//             .then(response => response.json())
//             .then(data => setNews(data.results));
//     }, []);

    return (
        <div className="feed">
            <div className="story">
                <span className="delete">x</span>
                <div className="story_header">
                <div className="image"></div>
                <h1 className=""></h1>
                </div>
                <p className="description"></p>
            </div>
        </div>

    )
}