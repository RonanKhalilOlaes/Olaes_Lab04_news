import { useState } from "react"

export default funciton News = ({ news }) {



    return (
        // <div className="feed">
        //     <div className="story">
        //         <span className="delete">x</span>
        //         <div className="story_header">
        //         <div className="image"></div>
        //         <h1 className=""></h1>
        //         </div>
        //         <p className="description"></p>
        //     </div>
        // </div>

        <div className="feed">
        <div className="story">
            <span className="delete">x</span>
            <div className="story_header">
                <div className="image" style={{ backgroundImage: `url(${news.imageUrl})` }}></div>
                <h1>{news.title}</h1>
            </div>
            <p className="description">{news.description}</p>
        </div>
    </div>

    )
}