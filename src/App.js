// Import data

// Import components
import "./App.css";
import Gallery from "./components/gallery";
import Sidebar from "./components/sidebar";
import Search from "./components/search";
import Directory from "./components/directory";
const postings = require("./postings");

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <div>
          <Sidebar className="sidebar" />
        </div>
        <div>
          <Search className="search" />
          <Directory className="directory" />
          <Gallery className="gallery clearfix" data={postings} />
        </div>
      </div>
    </div>
  );
}

export default App;
