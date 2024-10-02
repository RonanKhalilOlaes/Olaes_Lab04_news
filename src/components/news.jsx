import { useState } from "react"

const News = ({ news }) => {

    function handleDelete(e){ 
        // console.log('Delete Button clicked');
        if ( e.target === e.currentTarget) {
          //you clicked on the tile itself
          return;
        }
    
        if (e.target.tagName !== 'SPAN') {
          return;
        }
    
        e.currentTarget.remove(); //otherwise, remove the tile 
      }

    return (


        <div className="feed">
            <div className="story" onClick={handleDelete}>
                <span className="delete">x</span>
                <div className="story_header">
                    <div className="image" style={{ backgroundImage: `url(${news.imageUrl})` }}></div>
                    <h1>{news.title}</h1>
                </div>
                <p className="description">{news.description}</p>
            </div>
        </div>

    );
};

export default News;

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