import React from 'react';
import DashboardLayout from '../Layout/DashboardLayout';

const Dashboard = (props) => {
    return (
        <DashboardLayout>
       <React.Fragment>
               {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Dashboard v3</h1>
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard v3</li>
                  </ol>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-3 col-6">
                      {/* small box */}
                      <div className="small-box bg-info">
                        <div className="inner">
                          <h3>150</h3>
                          <p>New Orders</p>
                        </div>
                        <div className="icon">
                          <i className="ion ion-bag" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                      {/* small box */}
                      <div className="small-box bg-success">
                        <div className="inner">
                          <h3>53<sup style={{fontSize: '20px'}}>%</sup></h3>
                          <p>Bounce Rate</p>
                        </div>
                        <div className="icon">
                          <i className="ion ion-stats-bars" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                      {/* small box */}
                      <div className="small-box bg-warning">
                        <div className="inner">
                          <h3>44</h3>
                          <p>User Registrations</p>
                        </div>
                        <div className="icon">
                          <i className="ion ion-person-add" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                      {/* small box */}
                      <div className="small-box bg-danger">
                        <div className="inner">
                          <h3>65</h3>
                          <p>Unique Visitors</p>
                        </div>
                        <div className="icon">
                          <i className="ion ion-pie-graph" />
                        </div>
                        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                      </div>
                    </div>
                    {/* ./col */}
                  </div>
                  <div className="card bg-gradient-info">
                    <div className="card-header border-0 ui-sortable-handle" style={{cursor: 'move'}}>
                      <h3 className="card-title">
                        <i className="fas fa-th mr-1" />
                        Sales Graph
                      </h3>
                      <div className="card-tools">
                        <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                          <i className="fas fa-minus" />
                        </button>
                        <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chartjs-size-monitor">
                        <div className="chartjs-size-monitor-expand">
                          <div className />
                        </div>
                        <div className="chartjs-size-monitor-shrink">
                          <div className />
                        </div>
                      </div>
                      <canvas className="chart chartjs-render-monitor" id="line-chart" style={{minHeight: '250px', height: '250px', maxHeight: '250px', maxWidth: '100%', display: 'block', width: '528px'}} width={528} height={250} />
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer bg-transparent">
                      <div className="row">
                        <div className="col-4 text-center">
                          <div style={{display: 'inline', width: '60px', height: '60px'}}>
                            <canvas width={60} height={60} />
                            <input type="text" className="knob" data-readonly="true" defaultValue={20} data-width={60} data-height={60} data-fgcolor="#39CCCC" readOnly="readonly" style={{width: '34px', height: '20px', position: 'absolute', verticalAlign: 'middle', marginTop: '20px', marginLeft: '-47px', border: '0px', background: 'none', font: 'bold 12px Arial', textAlign: 'center', color: 'rgb(57, 204, 204)', padding: '0px', WebkitAppearance: 'none'}} />
                          </div>
                          <div className="text-white">Mail-Orders</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                          <div style={{display: 'inline', width: '60px', height: '60px'}}>
                            <canvas width={60} height={60} />
                            <input type="text" className="knob" data-readonly="true" defaultValue={50} data-width={60} data-height={60} data-fgcolor="#39CCCC" readOnly="readonly" style={{width: '34px', height: '20px', position: 'absolute', verticalAlign: 'middle', marginTop: '20px', marginLeft: '-47px', border: '0px', background: 'none', font: 'bold 12px Arial', textAlign: 'center', color: 'rgb(57, 204, 204)', padding: '0px', WebkitAppearance: 'none'}} />
                          </div>
                          <div className="text-white">Online</div>
                        </div>
                        {/* ./col */}
                        <div className="col-4 text-center">
                          <div style={{display: 'inline', width: '60px', height: '60px'}}>
                            <canvas width={60} height={60} />
                            <input type="text" className="knob" data-readonly="true" defaultValue={30} data-width={60} data-height={60} data-fgcolor="#39CCCC" readOnly="readonly" style={{width: '34px', height: '20px', position: 'absolute', verticalAlign: 'middle', marginTop: '20px', marginLeft: '-47px', border: '0px', background: 'none', font: 'bold 12px Arial', textAlign: 'center', color: 'rgb(57, 204, 204)', padding: '0px', WebkitAppearance: 'none'}} />
                          </div>
                          <div className="text-white">In-Store</div>
                        </div>
                        {/* ./col */}
                      </div>
                      {/* /.row */}
                    </div>
                    {/* /.card-footer */}
                  </div>
                  {/* /.card */}
                  {/* /.card */}
                </div>
                {/* /.col-md-6 */}
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <h3 className="card-title">Sales</h3>
                        <a href="javascript:void(0);">View Report</a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex">
                        <p className="d-flex flex-column">
                          <span className="text-bold text-lg">$18,230.00</span>
                          <span>Sales Over Time</span>
                        </p>
                        <p className="ml-auto d-flex flex-column text-right">
                          <span className="text-success">
                            <i className="fas fa-arrow-up" /> 33.1%
                          </span>
                          <span className="text-muted">Since last month</span>
                        </p>
                      </div>
                      {/* /.d-flex */}
                      <div className="position-relative mb-4">
                        <canvas id="sales-chart" height={200} />
                      </div>
                      <div className="d-flex flex-row justify-content-end">
                        <span className="mr-2">
                          <i className="fas fa-square text-primary" /> This year
                        </span>
                        <span>
                          <i className="fas fa-square text-gray" /> Last year
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* /.card */}
                  <div className="card">
                    <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <h3 className="card-title">Online Store Visitors</h3>
                        <a href="javascript:void(0);">View Report</a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex">
                        <p className="d-flex flex-column">
                          <span className="text-bold text-lg">820</span>
                          <span>Visitors Over Time</span>
                        </p>
                        <p className="ml-auto d-flex flex-column text-right">
                          <span className="text-success">
                            <i className="fas fa-arrow-up" /> 12.5%
                          </span>
                          <span className="text-muted">Since last week</span>
                        </p>
                      </div>
                      {/* /.d-flex */}
                      <div className="position-relative mb-4">
                        <canvas id="visitors-chart" height={200} />
                      </div>
                      <div className="d-flex flex-row justify-content-end">
                        <span className="mr-2">
                          <i className="fas fa-square text-primary" /> This Week
                        </span>
                        <span>
                          <i className="fas fa-square text-gray" /> Last Week
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.col-md-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
        {/* Main Footer */}
       </React.Fragment>
       </DashboardLayout>
    )
}

export default Dashboard;