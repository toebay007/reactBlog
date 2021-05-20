import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title = 'Welcome to the New Blog';
  // const likes = 50;
  // you can add links to site via making them a variable. then calling them via using the curly braces.
 // const link = 'http://www.google.com';
  // you cannot output an object
  return (
    <Router>
      <div className="App">
      {/* including navbar form the import...like the format of navbar below. you can either make it an open tag or a self closing tag */}
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/*  */}
        {/* <h1>{title}</h1> */}
        {/* <p>liked { likes } times</p>

        <p>{ 10 }</p>
        <p>{ "hello, singles" }</p>
        <p>{ [1,2,3,4,6] }</p>
        <p>{ Math.random() * 10}</p>

        <a href={ link }>Google site</a> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
