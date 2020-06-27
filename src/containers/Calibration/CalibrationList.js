import React from 'react';
import DashboardLayout from '../../Layout/DashboardLayout';
import ContentHeader from '../../components/common/ContentHeader';
import {Link} from 'react-router-dom';

const CalibrationList = (props) => {
    return(
        <DashboardLayout>
               <div className="content-wrapper">
                   
                   <ContentHeader  title="Calibration Tables" />
               
               <div className="content">
                 <div className="card">
                   <div className="card-header">
                     
                     <div className="card-tools">
                       <Link to="/calibration/create/" className="btn btn-sm btn-info">Add Calibration Table</Link>
                     </div>
                   </div>
                   {/* /.card-header */}
                   <div className="card-body">
                       <div className="row">
                           <div className="col-md-12">
                               <table id="example1" className="table table-bordered table-striped">
                       <thead>
                         <tr>
                           <th>#</th>
                           <th>Name</th>
                           <th>Total Space</th>
                           <th>Description</th>
                           <th>Created Date</th>
                           <th>Action</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr className="odd">
                           <td>1</td>
                           <td className=" sorting_1">Adil CNG</td>
                           <td>45000</td>           
                           <td>Lorem Ispum</td>
                           <td>26-10-2019</td>
                           <td>
                             <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                             <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                           </td>
                         </tr>
                         <tr className="odd">
                           <td>1</td>
                           <td className=" sorting_1">Adil CNG</td>
                           <td>45000</td>           
                           <td>Lorem Ispum</td>
                           <td>26-10-2019</td>
                           <td>
                             <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                             <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                           </td>
                         </tr>
                         <tr className="odd">
                           <td>1</td>
                           <td className=" sorting_1">Adil CNG</td>
                           <td>45000</td>           
                           <td>Lorem Ispum</td>
                           <td>26-10-2019</td>
                           <td>
                             <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                             <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                           </td>
                         </tr>
                         <tr className="odd">
                           <td>1</td>
                           <td className=" sorting_1">Adil CNG</td>
                           <td>45000</td>           
                           <td>Lorem Ispum</td>
                           <td>26-10-2019</td>
                           <td>
                             <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                             <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                           </td>
                         </tr>
                         <tr className="odd">
                           <td>1</td>
                           <td className=" sorting_1">Adil CNG</td>
                           <td>45000</td>           
                           <td>Lorem Ispum</td>
                           <td>26-10-2019</td>
                           <td>
                             <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                             <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                           </td>
                         </tr>
                         <tr className="odd">
                           <td>1</td>
                           <td className=" sorting_1">Adil CNG</td>
                           <td>45000</td>           
                           <td>Lorem Ispum</td>
                           <td>26-10-2019</td>
                           <td>
                             <a href="#" className="btn btn-warning xs"><i className="fas fa-pencil-alt" /></a>
                             <a href="#" className="btn btn-success xs"><i className="fas fa-check" /> </a>
                           </td>
                         </tr>
                       
                       </tbody>
                     </table>
                           </div>
                        </div>
                   </div>
                   {/* /.card-body */}
                 </div>
               </div>
               {/* /.content */}
             </div>
        </DashboardLayout>
    );
}

export default CalibrationList;