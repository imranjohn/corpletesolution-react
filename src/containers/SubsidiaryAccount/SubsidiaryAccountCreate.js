import React from 'react';
import DashboardLayout from '../../Layout/DashboardLayout';
import {Link} from 'react-router-dom';

const SubsidiaryAccountCreate = () => {
    return (
        <DashboardLayout>
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
        <div className="card">
        <div class="card-header clearfix">
                <button type="button" class="btn btn-info float-right"><i class="fas fa-plus"></i> Add item</button>
              </div>
          <div className="card-body">
            
          <div className="container-fluid">
        
            <div className="row">
              {/* left column */}
              <div className="col-md-3">
                {/* general form elements */}
                <div className="card card-default">
                  <div className="card-header">
                    <h3 className="card-title">Account Information</h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <form role="form">
                    <div className="card-body">
                      <div className="form-group">
                        <label>Control Accounts</label>
                        <select className="custom-select">
                          <option>option 1</option>
                          <option>option 2</option>
                          <option>option 3</option>
                          <option>option 4</option>
                          <option>option 5</option>
                        </select>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          {/* text input */}
                          <div className="form-group">
                            <label>Account Title</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                            <small className={'text-danger'}>This is error message </small>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Opening Date</label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="far fa-calendar-alt" />
                                </span>
                              </div>
                              <input type="text" className="form-control float-right" id="reservation" />
                            </div>
                            {/* /.input group */}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        {/* textarea */}
                        <div className="form-group">
                          <label>Note For Account</label>
                          <textarea className="form-control" rows={3} placeholder="Enter ..." defaultValue={""} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <label htmlFor="exampleInputFile">Opening Balance</label>
                          <div className="form-group">
                            <label>Debit</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="exampleInputFile">&nbsp;</label>
                          <div className="form-group">
                            <label>Credit</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                          </div>
                        </div>
                      </div>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">CNG Account</label>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </form>
                </div>
              </div>
              {/* /.card */}
              <div className="col-md-3">
                {/* general form elements */}
                <div className="card card-default ">
                  <div className="card-header">
                    <h3 className="card-title">Personal Information</h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <form role="form">
                    <div className="card-body">
                      <div className="form-group">
                        <label>Contact Person</label>
                        <input type="text" className="form-control" placeholder="Enter ..." />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Enter ..." />
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          {/* text input */}
                          <div className="form-group">
                            <label>Phone</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          {/* text input */}
                          <div className="form-group">
                            <label>Mobile</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          {/* text input */}
                          <div className="form-group">
                            <label>Fax</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </form>
                </div>
                <div className="card card-default">
                  <div className="card-header">
                    <h3 className="card-title">Credit Card Companies Charges</h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <form role="form">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-6">
                          {/* text input */}
                          <div className="form-group">
                            <label>Percent</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          {/* text input */}
                          <div className="form-group">
                            <label>Per Transaction</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </form>
                </div>
              </div>
              <div className="col-md-3">
                {/* general form elements */}
                <div className="card card-default">
                  <div className="card-header">
                    <h3 className="card-title">Credit Customers Only</h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <form role="form">
                    <div className="card-body">
                      <div className="form-group">
                        <label>Approved By:</label>
                        <input type="text" className="form-control" placeholder="Enter ..." />
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          {/* text input */}
                          <div className="form-group">
                            <label>Bill Charges (Pump) (%)</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label>Bill Charges (CNG) ( % )</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          {/* text input */}
                          <div className="form-group">
                            <label>Credit Limit</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Credit Days</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Account Is Active</label>
                        <select className="custom-select">
                          <option>Enable</option>
                          <option>Disable</option>
                        </select>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </form>
                </div>
              </div>
              {/* /.card */}
              <div className="col-md-3">
                <div className="card card-default">
                  <div className="card-header">
                    <h3 className="card-title">Vehicles Information</h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-4">
                        {/* text input */}
                        <div className="form-group">
                          <label>Regn No</label>
                          <input type="text" className="form-control" placeholder="Enter ..." />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Product</label>
                          <input type="text" className="form-control" placeholder="Enter ..." />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        {/* text input */}
                        <div className="form-group">
                          <label>Deptt</label>
                          <input type="text" className="form-control" placeholder="Enter ..." />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea className="form-control" rows={3} placeholder="Enter ..." defaultValue={""} />
                    </div>
                    <div className=" float-right btn-toolbar">
                      <button type="button" className="btn btn-success btn-xs mr-1"><i className="fas fa-plus" /> </button>
                      
                      <button type="button" className="btn btn-danger btn-xs"><i className="fas fa-trash" /></button>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
            </div>
            <div className="row">
              {/* left column */}
            
            </div>
          </div>
          </div>
          <div class="card-footer clearfix">
                <button type="button" class="btn btn-info float-right"><i class="fas fa-plus"></i> Add item</button>
              </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
        </DashboardLayout>
    );
}

export default SubsidiaryAccountCreate