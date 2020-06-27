import React from 'react';
import DashboardLayout from '../../Layout/DashboardLayout';
import ContentHeader from '../../components/common/ContentHeader';

const CalibrationCreate = (props) => {
    return(
        <DashboardLayout>
         <div className="content-wrapper">
       <ContentHeader title="Add Calibration Table" />
   
        <div className="content">
        <div className="card">
        <div class="card-header clearfix">
                <button type="button" class="btn btn-info float-right"><i class="fas fa-plus"></i> Add item</button>
              </div>
          <div className="card-body">
            
          <div className="container-fluid">
        
            <div className="row">
              {/* left column */}
              <div className="col-md-12">
                {/* general form elements */}
                <div className="card card-default">
                  
                
                  <form role="form">
                    <div className="card-body">
                    <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control col-sm-7" placeholder="Enter ..." />
                          </div>
                      <div className="row">
                        <div className="col-sm-6">
                          {/* text input */}
                          <div className="form-group">
                            <label>Total Space</label>
                            <input type="text" className="form-control" placeholder="Enter ..." />
                          </div>
                        </div>
                        <div className="col-sm-1">
                          <div className="form-group">
                            <label>Unit</label>
                            <div className="input-group">
                             
                        
                              <input type="text" placeholder="Ltr" className="form-control float-right" id="reservation" />
                            </div>
                            {/* /.input group */}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        {/* textarea */}
                        <div className="form-group">
                          <label>Description</label>
                          <textarea className="form-control col-sm-7" rows={3} placeholder="Enter ..." defaultValue={""} />
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
            
            </div>
            <div className="row">
              {/* left column */}
            
            </div>
          </div>
          </div>
          <div class="card-footer clearfix">
                <button type="button" class="btn btn-info float-right"><i class="fas fa-plus"></i> Submit</button>
              </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
        </DashboardLayout>
    );
}

export default CalibrationCreate;