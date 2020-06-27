import DashboardLayout from "../../Layout/DashboardLayout"
import React from 'react';
import {Link} from 'react-router-dom';

const SubsidiaryAccountList = () => {
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
            <div className="card-header">
              <h3 className="card-title">Account List</h3>
              <div className="card-tools">
                <Link to="/subsidiary/accounts/create/" className="btn btn-sm btn-info">Create Account</Link>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Accout Type</th>
                    <th>Contact Person</th>
                    <th>Mobile #</th>
                    <th>Debit</th>
                    <th>Credit</th>
                    <th>Join Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd">
                    <td>1</td>
                    <td className=" sorting_1">Adil CNG</td>
                    <td>CREDIT CUSTOMERS</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>26-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>2</td>
                    <td className=" sorting_1">Asim</td>
                    <td>CREDIT CUSTOMERS</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>03-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-default xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>3</td>
                    <td className=" sorting_1">Awais Jawaid Salary</td>
                    <td>SITE EXPENSES</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>04-11-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>4</td>
                    <td className=" sorting_1">Bank Charges</td>
                    <td>SITE EXPENSES</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>08-01-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>5</td>
                    <td className=" sorting_1">Billing Charges - CC</td>
                    <td>OTHER INCOME</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>24-06-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>6</td>
                    <td className=" sorting_1">Billing Charges - CC - CNG</td>
                    <td>OTHER INCOME</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>21-09-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>7</td>
                    <td className=" sorting_1">Boom Cartons</td>
                    <td>OPENING STOCK OTHERS</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>18-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>8</td>
                    <td className=" sorting_1">Carriage Income</td>
                    <td>OTHER INCOME</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>10-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>9</td>
                    <td className=" sorting_1">Cash Acc - CNG</td>
                    <td>CASH BOOK</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>24-08-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>10</td>
                    <td className=" sorting_1">Cash Acc - Pump</td>
                    <td>CASH BOOK</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>08-04-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>1</td>
                    <td className=" sorting_1">Adil CNG</td>
                    <td>CREDIT CUSTOMERS</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>26-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>2</td>
                    <td className=" sorting_1">Asim</td>
                    <td>CREDIT CUSTOMERS</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>03-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-default xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>3</td>
                    <td className=" sorting_1">Awais Jawaid Salary</td>
                    <td>SITE EXPENSES</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>04-11-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>4</td>
                    <td className=" sorting_1">Bank Charges</td>
                    <td>SITE EXPENSES</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>08-01-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>5</td>
                    <td className=" sorting_1">Billing Charges - CC</td>
                    <td>OTHER INCOME</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>24-06-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>6</td>
                    <td className=" sorting_1">Billing Charges - CC - CNG</td>
                    <td>OTHER INCOME</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>21-09-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>7</td>
                    <td className=" sorting_1">Boom Cartons</td>
                    <td>OPENING STOCK OTHERS</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>18-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>8</td>
                    <td className=" sorting_1">Carriage Income</td>
                    <td>OTHER INCOME</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>10-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>9</td>
                    <td className=" sorting_1">Cash Acc - CNG</td>
                    <td>CASH BOOK</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>24-08-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>10</td>
                    <td className=" sorting_1">Cash Acc - Pump</td>
                    <td>CASH BOOK</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>08-04-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>1</td>
                    <td className=" sorting_1">Adil CNG</td>
                    <td>CREDIT CUSTOMERS</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>26-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>2</td>
                    <td className=" sorting_1">Asim</td>
                    <td>CREDIT CUSTOMERS</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>03-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-default xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>3</td>
                    <td className=" sorting_1">Awais Jawaid Salary</td>
                    <td>SITE EXPENSES</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>04-11-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>4</td>
                    <td className=" sorting_1">Bank Charges</td>
                    <td>SITE EXPENSES</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>08-01-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>5</td>
                    <td className=" sorting_1">Billing Charges - CC</td>
                    <td>OTHER INCOME</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>24-06-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>6</td>
                    <td className=" sorting_1">Billing Charges - CC - CNG</td>
                    <td>OTHER INCOME</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>21-09-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>7</td>
                    <td className=" sorting_1">Boom Cartons</td>
                    <td>OPENING STOCK OTHERS</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>18-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>8</td>
                    <td className=" sorting_1">Carriage Income</td>
                    <td>OTHER INCOME</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>10-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>9</td>
                    <td className=" sorting_1">Cash Acc - CNG</td>
                    <td>CASH BOOK</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>24-08-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>10</td>
                    <td className=" sorting_1">Cash Acc - Pump</td>
                    <td>CASH BOOK</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>08-04-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>1</td>
                    <td className=" sorting_1">Adil CNG</td>
                    <td>CREDIT CUSTOMERS</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>26-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>2</td>
                    <td className=" sorting_1">Asim</td>
                    <td>CREDIT CUSTOMERS</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>03-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-default xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>3</td>
                    <td className=" sorting_1">Awais Jawaid Salary</td>
                    <td>SITE EXPENSES</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>04-11-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>4</td>
                    <td className=" sorting_1">Bank Charges</td>
                    <td>SITE EXPENSES</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>08-01-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>5</td>
                    <td className=" sorting_1">Billing Charges - CC</td>
                    <td>OTHER INCOME</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>24-06-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>6</td>
                    <td className=" sorting_1">Billing Charges - CC - CNG</td>
                    <td>OTHER INCOME</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>21-09-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>7</td>
                    <td className=" sorting_1">Boom Cartons</td>
                    <td>OPENING STOCK OTHERS</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>18-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>8</td>
                    <td className=" sorting_1">Carriage Income</td>
                    <td>OTHER INCOME</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>10-10-2019</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="odd">
                    <td>9</td>
                    <td className=" sorting_1">Cash Acc - CNG</td>
                    <td>CASH BOOK</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>24-08-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                  <tr className="even">
                    <td>10</td>
                    <td className=" sorting_1">Cash Acc - Pump</td>
                    <td>CASH BOOK</td>
                    <td />
                    <td />
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>08-04-2017</td>
                    <td>
                      <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                      <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        {/* /.content */}
      </div>

        </DashboardLayout>
    )
}

export default SubsidiaryAccountList;