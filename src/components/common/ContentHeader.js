import React from 'react';

const ContentHeader = (props) => {
    return (
        <React.Fragment>
             <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">{props.title}</h1>
              </div>
              {/* /.col */}
              {/* <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard v3</li>
                </ol>
              </div> */}
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        </React.Fragment>
    );
}

export default ContentHeader; 