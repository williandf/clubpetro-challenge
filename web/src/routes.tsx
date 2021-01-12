import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './components/global';
import Landing from './pages/Landing';

function Routes() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;