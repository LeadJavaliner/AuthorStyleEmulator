import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import EventCreator from './components/EventCreator';
import EventCreatorWizard from './components/EventCreatorWizard';
import EventReporter from './components/EventReporter';
import TicketSales from './components/TicketSales';
import VenueSeatMapper from './components/VenueSeatMaper';
import QuestionWizard from './components/QuestionWizard';
import TicketSalesTest from './components/TicketSalesTest';
import EventReporterTest from './components/EventReporterTest';
import NftEventTickets  from './components/NftEventTickets';
import UseCases from './components/UseCases';
import AssetSecurityUseCases from './components/AssetSecurityUseCases';

const generateClassName = createGenerateClassName({
  productionPrefix: 'sales',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/assetsecurityusecases" component={AssetSecurityUseCases} />
            <Route exact path="/nfteventtickets" component={NftEventTickets} />
            <Route exact path="/eventcreator" component={EventCreator} />
            <Route exact path="/eventcreatorwizard" component={EventCreatorWizard} />
            <Route exact path="/eventreporter" component={EventReporter} />
            <Route exact path="/eventreportertest" component={EventReporterTest} />
            <Route exact path="/ticketsales" component={TicketSales} />
            <Route exact path="/venueseatmapper" component={VenueSeatMapper} />
            <Route exact path="/questionwizard" component={QuestionWizard} />
            <Route exact path="/ticketsalestest" component={TicketSalesTest} />
            <Route exact path="/usecases" component={UseCases} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
