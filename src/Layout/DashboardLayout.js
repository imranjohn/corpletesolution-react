import React, { useEffect } from 'react';
import Header from '../components/common/Header';


const DashboardLayout = (props) => {
  useEffect(()=>{
    document.getElementById('body').className='layout-top-nav'
  });
  
    return (
        <React.Fragment>
          <Header />
            {props.children}
          {/* <Footer /> */}
        </React.Fragment>
    );
}

export default DashboardLayout;