import React from 'react';
import DashboardLayout from '../../Layout/DashboardLayout';
import {Link} from 'react-router-dom';
import ContentHeader from '../../components/common/ContentHeader';

const ProductInfoList = () => {
    return (
        <DashboardLayout>
          
          <div className="content-wrapper">
            <ContentHeader  title="Product Info" />
        
        <div className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">List</h3>
              <div className="card-tools">
                <Link to="/productinfo/create/" className="btn btn-sm btn-info">Add New Product</Link>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Unit</th>
                    <th>Fuel Type</th>
                    <th>Indent Price</th>
                    <th>Retail Price</th>
                    <th>Commission</th>
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
                
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
        {/* /.content */}
      </div>
        </DashboardLayout>
    );
}

export default ProductInfoList;