import React, { Component, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

  
    return (
      <div className="wrapper">
      <nav className="main-header navbar navbar-expand navbar-white navbar-light" >
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
        
          <Link to={'/'} className="navbar-brand" >
            <img src="/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
            <span className="brand-text font-weight-light">Business Name</span>
          </Link>
        
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item dropdown">
          <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Setup</a>
          <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
            <li><Link to={'/subsidiary/accounts/'} className={'dropdown-item'} ><span>Subsidiary Accounts</span></Link></li>
            <li><Link className="dropdown-item" to="/productinfo/"><span>Products Info</span></Link></li>
            <li className="dropdown-submenu dropdown-hover">
              <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">OPENING BALANCES</a>
              <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
                <li>
                  <Link to="/tank" className="dropdown-item">Products Opening</Link>
                </li>
                <li>
                  <Link to="/tank" className="dropdown-item">Subsidiary Accounts</Link>
                </li>
              </ul>
            </li>
            <li><Link className="dropdown-item" to="/calibrations"><span>Calibration Tables</span></Link></li>
            <li><a className="dropdown-item" href="fuelTypes.html" ><span>Fuel
                  Types</span></a></li>
            <li><a className="dropdown-item" href="controlAccounts.html"><span>Control Accounts</span></a></li>
            <li className="dropdown-submenu dropdown-hover">
              <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Nozzles &amp; Tanks</a>
              <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
                <li>
                  <Link to="/tank" className="dropdown-item">Tanks</Link>
                </li>
                <li>
                  <Link to="/tank" className="dropdown-item">Nozzles</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Prices</a>
          <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
            <li><a className="dropdown-item" href="priceRevisions.html"><span>Products - Fuel - Non Fuel</span></a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Meter Reading</a>
          <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
            <li><a className="dropdown-item" href="meterReadingAdjustment.html" ><span>Meter Reading Adjustment ( FUEL  )</span></a>
            </li>
            <li><a className="dropdown-item" href="meterReadingStocks.html" ><span>Meter Reading / Stocks</span></a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Users</a>
          <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
            <li><a className="dropdown-item" href="creditCustomers.html" ><span>Credit Customers</span></a>
            </li>
            <li><a className="dropdown-item" href="pumpUsers.html" ><span>Pump Users</span></a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Credit Customers</a>
          <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
            <li><a className="dropdown-item" href="billingChargesRevision.html" ><span>Billing Charges Revision</span></a>
            </li>
            <li><a className="dropdown-item" href="creditSlips.html" ><span>Credit Slips</span></a>
            </li>
          </ul>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="testingFuel.html" className="nav-link">Testing Fuel</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="debitCreditCards.html" className="nav-link">Debit / Credit Cards</a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="far fa-user" /> Login as Admin
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" className="dropdown-item">
              <i className="fas fa-lock mr-2" /> Change Password
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-cog mr-2" /> Settings
            </a>
            <div className="dropdown-divider" />
            <Link to={'/login'} className="dropdown-item" >
              <i className="fas fa-sign-out-alt mr-2" /> Logout
            
            </Link>
            <div className="dropdown-divider" />
          </div>
        </li>
      </ul>
    </nav>
    </div>
    );
}

export default Header;