import React from 'react';
import logo from '../images/logo.png'
import {
  MDBInput,MDBIcon,MDBBtn
 } from 'mdb-react-ui-kit';
import Carousel from './Carousel';
  export default function Content() {
    return (
<div className="container w-50 mb-md-2 mb-lg-5">
    <div className="row">
        <div className="col-lg-6 mb-3">
        <MDBInput label='Your Name' id='form1' type='text' />
        </div>
        <div className="col-lg-6 mb-3">
        <MDBInput label='Your Email' id='form1' type='text' />
        </div>
        <div className="col-lg-12 mb-3">
        <MDBInput label='Message' id='textAreaExample' textarea rows={4} />
</div>
<div className="col-lg-12">
    
<MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
        Send
      </MDBBtn>
</div>
    </div>
</div>
    );
  }
