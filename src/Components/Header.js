import React from 'react';
import logo from '../images/logo.png'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,

  MDBNavbarBrand,
  MDBIcon } from 'mdb-react-ui-kit';
import Carousel from './Carousel';
  export default function Header() {
    return (
      <header>
        <MDBNavbar expand='md' light bgColor='white' fixed className="fixed-top">
          <MDBContainer fluid className="w-1300" >
          <MDBNavbarBrand href='#'>
            <img
              src={logo}
              height='60'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
            <MDBNavbarToggler
              aria-controls='navbarExample01'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <MDBIcon fas icon='bars' />
            </MDBNavbarToggler>
            <div className='collapse navbar-collapse ' id='navbarExample01'>
              <MDBNavbarNav right className='mb-2 mb-lg-0'>
                <MDBNavbarItem active>
                  <MDBNavbarLink aria-current='page' href='#'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>Features</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>About</MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </div>
          </MDBContainer>
        </MDBNavbar>

        <div className=' text-center bg-light mb-5 mt-5'>
      <Carousel></Carousel>
         
        </div>

      </header>
    );
  }
