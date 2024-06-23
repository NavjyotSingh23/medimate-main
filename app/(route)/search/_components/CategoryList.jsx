"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
function CategoryList() {
    const [categoryList,setCategoryList]=useState([]);
    const params=usePathname();
    const category=params.split('/')[2];
    console.log({ category, categoryList });
  useEffect(()=>{
    getCategoryList();      
  },[])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    })
  }
  return (
    <div className='h-screen mt-5 flex flex-col'>
  
  
  <Command >
  <Command.Input placeholder="Type a command or search..." />
  <Command.List className="overflow-visible">
    <Command.Empty>No results found.</Command.Empty>
    <Command.Group heading="Suggestions" >
        {categoryList&&categoryList.map((item,index)=>(
            <Command.Item key={index}>
                <Link href={'/search/'+item?.attributes?.Name}
                className={`p-2 flex gap-2
                text-[16px]
                text-blue-600
                items-center
                rounded-md cursor-pointer w-full
                ${category==item.attributes.Name&&'bg-blue-100'}
                `}>
                    <Image src={item.attributes?.Icon?.data.attributes?.url}
                    alt='icon'
                    width={25}
                    height={25}/>
                    <label>{item.attributes.Name}</label>
                </Link>
            </Command.Item>
        ))}
      
     
    </Command.Group>
   
  </Command.List>
</Command>
    </div>
  )
}

export default CategoryList