"use client"
import React, { useState, useEffect } from 'react';
import DoctorList from '../../app/_component/DoctorList';
import globalApi from '../../utils/globalapi';

function Explore() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    // Fetch list of doctors when component mounts
    const fetchDoctorList = async () => {
      try {
        const response = await globalApi.getDoctorList();
        setDoctorList(response.data); // Assuming API response is an array of doctors
      } catch (error) {
        console.error('Error fetching doctor list:', error);
      }
    };

    fetchDoctorList();

    // Clean up function if necessary
    return () => {
      // Any cleanup code here
    };
  }, []); // Empty dependency array means this effect runs only once on component mount

  return (
    <div>
      <h1>Explore Doctors</h1>
      <DoctorList doctorList={doctorList} heading="Explore Doctors" />
    </div>
  );
}

export default Explore;
