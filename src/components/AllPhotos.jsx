import React from 'react'
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import PhotoItem from "./PhotoItem";

export default function AllPhotos() {
  return (
    <MDBRow>
      <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
        <PhotoItem
          image="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <PhotoItem
          image="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />

       
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <PhotoItem
          image="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      
      </MDBCol>
    </MDBRow>
  );
}
