import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function DoctorList({ doctorList = [], heading = 'Popular Doctors', displayCount = null }) {
  let listData;


  if(displayCount) {
    listData = doctorList.slice(0, displayCount);
  }else {
    listData = doctorList;
  }
  
  
  
  
  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-xl'>{heading}</h2>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-4 lg:grid-cols-4'>
        {listData.length > 0 ? (
          listData.map((doctor) => (
            <div key={doctor.id} className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm transition-all ease-in-out'>
              <Image
                src={doctor.attributes.image.data[0].attributes.url}
                alt='doctor'
                width={500}
                height={200}
                className='h-[200px] w-full object-cover rounded-lg'
              />
              <div className='mt-3 items-baseline flex flex-col gap-1'>
                <h2 className='text-[13px] bg-blue-100 p-1 rounded-full px-2 text-primary'>{doctor.attributes.categories.data[0].attributes.Name}</h2>
                <h2 className='font-bold'>{doctor.attributes.Name}</h2>
                <h2 className='text-primary text-sm'>{doctor.attributes.year_of_experience}</h2>
                <h2 className='text-gray-500 text-sm'>{doctor.attributes?.Address}</h2>
                <Link href={'/details/' + doctor.id} className='w-full'>
                  <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[15px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>View</h2>
                </Link>
              </div>
            </div>
          ))
        ) : (
          // Skeleton Effect
          [1, 2, 3, 4, 5, 6, 7, 8].map((_item, _index) => (
            <div key={_index} className='h-[220px] bg-slate-200 w-full rounded-lg animate-pulse'></div>
          ))
        )}
      </div>
    </div>
  );
}

export default DoctorList;
