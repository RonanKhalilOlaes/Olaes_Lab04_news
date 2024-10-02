import news_feed from './sample_news_stories.json';
import News from './components/news.jsx';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  // const storyList = news.map(news => <News key={news.name} news={news} />);

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

{/* <ul>
        {stories.map((story, index) => (
          <li key={index}>
            <h2>{story.title}</h2>
            <p>{story.description}</p>
            <a href={story.url} target="" rel="">Read more</a>
          </li>
        ))}
      </ul> */}