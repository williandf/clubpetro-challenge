import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './components/global';
import Landing from './pages/Landing';
import EditCard from './pages/EditCard';

function Routes() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/card/:id" exact component={EditCard}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;