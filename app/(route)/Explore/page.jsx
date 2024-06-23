"use client"
import React, { useEffect, useState } from 'react';
import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi';

function Explore() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    fetchDoctorList();
  }, []);

  const fetchDoctorList = async () => {
    try {
      const response = await GlobalApi.getDoctorList();
      setDoctorList(response.data.data);
    } catch (error) {
      console.error('Error fetching doctor list:', error);
    }
  };

  return (
    <div>
      <DoctorList doctorList={doctorList} heading='Explore Doctors' />
    </div>
  );
}

export default Explore;
