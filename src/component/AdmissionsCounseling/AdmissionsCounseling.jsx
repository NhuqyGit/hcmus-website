import React from "react";
import Graduate from "../Academics/Graduate";
import UndergraduateInfo from "./UndergraduateInfo";
import InforForm from "./InforForm";
import GraduateInfo from "./GraduateInfo";

function AdmissionsCounseling() {
  return (
    <div style={{paddingTop: '150px'}}>
      <UndergraduateInfo />
      <GraduateInfo />
      <InforForm />
    </div>
  );
}
export default AdmissionsCounseling;
