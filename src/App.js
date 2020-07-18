import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import DashboardLayout from './Layout/DashboardLayout';
import LoginLayout from './Layout/LoginLayout';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import SubsidiaryAccountList  from './containers/SubsidiaryAccount/SubsidiaryAccountList' ;
import SubsidiaryAccountCreate from './containers/SubsidiaryAccount/SubsidiaryAccountCreate';
import ProductInfoList from './containers/ProductInfo/ProductInfoList';
import ProductInfoCreate from './containers/ProductInfo/ProductInfoCreate';
import Tank from './containers/Tank/Tank';
import CalibrationList from './containers/Calibration/CalibrationList';
import CalibrationCreate from './containers/Calibration/CalibrationCreate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from "./shared/ProtectedRoutes";
import NonProtectedRoutes from "./shared/NonProtectedRoutes";

function App() {
  
  
  return (
    
      <BrowserRouter>
        {/*<Route exact path="/login" component={Login} />*/}

          {/*  Non Protected routes  */}
            <NonProtectedRoutes exact path={'/login'} component={Login} />
          {/*  Non Protected routes  */}


          {/* Protected routes  */}
        <ProtectedRoutes exact path="/dashboard" component={Dashboard} />
          {/* Protected routes  */}
        <Route exact path="/subsidiary/accounts/" component={SubsidiaryAccountList} />
        <Route exact path="/subsidiary/accounts/create/" component={SubsidiaryAccountCreate} />


        <Route exact path="/productinfo/" component={ProductInfoList} />
        <Route exact path="/productinfo/create" component={ProductInfoCreate} />


        <Route exact path="/tank" component={Tank} />


        <Route exact path="/calibrations" component={CalibrationList} />
        <Route exact path="/calibration/create" component={CalibrationCreate} />

        
        {/* <Route exact path="/subsidiary/accounts/create" component={Dashboard} /> */}
        <Route exact path="/" component={Dashboard} />


        <ToastContainer />
      </BrowserRouter>
  );
}

export default App;
