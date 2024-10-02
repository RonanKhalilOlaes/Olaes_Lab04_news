import news_feed from './sample_news_stories.json';

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  const storyList = news.map(news => <News key={news.name} news={news} />);

  return (
    <div className="App">
      <h1>Today's News</h1>


    </div>
  );
}

export default App;
