import React from 'react'
import { DateObject } from 'react-multi-date-picker';
import { useSelector } from 'react-redux';
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
import Skeleton from 'react-loading-skeleton';

export default function TitleLastUpdateInfo() {
  const {workSpacePeriodData} = useSelector((state) => state.rankTrakingState);

  const getLastDate=()=>{
    return new DateObject(Object.keys(workSpacePeriodData)[0]).convert(persian, persian_en).format("YYYY/MM/DD")
  }
  return (
    <div className=' absolute top-5 left-0'>
    <div className='relative w-52 leading-6'>
        <p className='flex justify-center w-full mb-1'>
            <span className=' w-1/2 text-left text-gray text-sm '>آخرین بروزرسانی:</span>
            <span className=' w-1/2  text-gray text-sm pr-2'>{workSpacePeriodData.length!=0?getLastDate():<Skeleton width={80} />}</span>
        </p>
        <p className='flex justify-center w-full'>
            <span className=' w-1/2 text-left  text-gray text-sm'>دوره بروزرسانی:</span>
            <span className=' w-1/2  text-gray text-sm pr-2'>{workSpacePeriodData.length!=0?"هر 48 ساعت":<Skeleton width={80} />}</span>
        </p>
    </div>
    </div>
  )
}
