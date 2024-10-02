import news_feed from './sample_news_stories.json';
import News from './components/news.jsx';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

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
    <div className="App">
      <h1>Today's News</h1>

      {/* the component way */}

      {stories.map((story, index) => (
        <News key={index} news={story} />
      ))}

    </div>
  );
}

export default App;


 // const storyList = news.map(news => <News key={news.name} news={news} />);


{/* <ul>
        {stories.map((story, index) => (
          <li key={index}>
            <h2>{story.title}</h2>
            <p>{story.description}</p>
            <a href={story.url} target="" rel="">Read more</a>
          </li>
        ))}
      </ul> */}