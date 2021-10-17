import './App.css';
import Navbar from './Components/Navbar';
import Blogs from './Components/Blogs';
import Home from './Pages/Home';
import NewBlog from './Pages/NewBlog';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error'
import Footer from './Components/Footer';
import Single from './Pages/Single';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.log(`Graphql error ${message}`);
    })
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);

//Connecting to graphql using Apollo Client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <Blogs />
          </Route>
          <Route path="/newblog">
            <NewBlog />
          </Route>
          <Route path="/singleblog">
            <Single />
          </Route>
        </Switch>
       
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
