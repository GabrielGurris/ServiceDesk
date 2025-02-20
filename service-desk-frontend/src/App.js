import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import SignIn from './screens/Sign-in';
import SignUp from './screens/Sign-up';
import ClientServices from './screens/Manage/Client/Services/index';
import ManagerServices from './screens/Manage/Manager/Services/index'; 
import ManagerEdit from './screens/Manage/Manager/Edit/index'; 
import CreateService from './screens/Create/index';
import ClientIncident from './screens/Create/Type/Incident/index';
import ClientDemand from './screens/Create/Type/Demand/index';
import ClientList from './screens/Create/Type/List/index';
import ClientMyData from './screens/Manage/Client/Services/index'; 
import ClientEdit from './screens/Manage/Client/Edit/index'; 


import Main from './screens/Main/index';

const App = () => {
    return(//BrowserRouter- Cria as rotas, Switch- Navega entre elas
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/main" component={Main}></Route>
                    <Route path="/sign-in" component={SignIn}></Route>
                    <Route path="/sign-up" component={SignUp}></Route>
                    <Route path="/client/createservice" component={CreateService}></Route>                  
                    <Route path="/client/incident" component={ClientIncident}></Route>
                    <Route path="/client/demand" component={ClientDemand}></Route>
                    <Route path="/client/list" component={ClientList}></Route>
                    <Route path="/client/services" component={ClientServices}></Route>
                    <Route path="/client/mydata" component={ClientMyData}></Route>
                    <Route path="/client/edit" component={ClientEdit}></Route>
                    <Route path="/manager/edit" component={ManagerEdit}></Route>
                    <Route path="/manager/services" component={ManagerServices}></Route>
                </Switch>
            </div>
        </BrowserRouter>      
    );
};

export default App;

