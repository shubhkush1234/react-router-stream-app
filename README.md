App challenges:

1. Need to be able to navigate around to separate pages in our app.
2. Need to allow user to login/logout.
3. Need to handle forms in redux.
4. Need to master CRUD operations in React/Redux.
5. Errors handling.


React Router packages:

1. react-router
2. react-router-dom
3. react-router-native
4. react-router-redux


Steps:

1. In the app.js, import BrowserRouter, Route from 'react-router-dom' and create 2 functions "PageOne" and "PageTwo". These will return some dummy text.

2. In the app component, write jsx for BrowserRouter and Route. Pass the path, exact and component prop to Route.

```javaScript

import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne= () => {
  return <div>Page One</div>
}

const PageTwo= () => {
  return <div>Page Two</div>
}
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/PageTwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
}

export default App;

```

## About BrowserROuter ##

- React Router cares about the relative URL not the DOMAIN. Eg: if the URL is airbnb.com/listings/spain , then react-router will only care about "listings/spain". 

- The BrowserRouter internally creates an object of it's own called the "history" object. This "history" object is going to look at the url inside the "address bar" and it's going to extract 
the part of url it cares about. 

- Different Routes can be matched with the same URL. 

```javaScript

        <Route path="/" exact component={PageOne} />
        <Route path="/" exact component={PageTwo} />
        // it will show both the component.

```

This is absolutely by design because there are some cases where we'll define different route components deeply nested inside of different components inside of application. So, by deeply nesting routes, we can customize how some part of our app looks, depending upon the URL. We don't need to pass down some deep configuration through Redux or props or something like that to configure how a very deeply nested child component renders itself.

The exact prop:

- When we pass "exact" prop directly in the Route component, it means exact={true}  

- If we remove that "exact" prop: 

```javaScript
        <Route path="/" component={PageOne} />
        <Route path="/pageTwo" component={PageTwo} />
```

In this example, if we go from "localhost:3000/" to "localhost:3000/pageTwo", it will show both "PageOne" and "PageTwo". This surprising behaviour is because it finds in the URL whether that "path" is present or not. In this case "/" is present in the "localhost:3000/pageTwo" as well, so it rendered both components.

### Navigating through React Router ###

- Don't use <a href="/SomePath">Navigate</a> as it refreshes the whole page and voilates SPA guidelines.

- use "Link" component/Tag :

```javaScript

<Link to="/pageTwo">Navigate to Page Two</Link>

```

On clicking on this link, it will take to Page Two.  


How it works:

1. User wants to navigate to another page.
2. User clicks a "Link" tag.
3. React Router prevents the browser from navigating to the new page and fetching new index.html file!!
4. URL still changes.
5. "History" sees updated URL, takes URL and sends it to BrowserRouter.
6. BrowserRouter communicates the URL to Route components.
7. Route components re-renders to show new set of components.

Coming back to our application, we are setting path to show different components. I'm writing in the format: path => Component.

1. / => StreamList
2. /streams/new => StramCreate
3. /streams/edit => StreamEdit
4. /streams/delete => StreamsDelete
5. /streams/show => StreamShow



























