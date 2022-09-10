import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPackageInfO } from "../service/packages";
import { usetLimit } from "../service/userLimit";

export default function BadgeLimitKeyWords({ numFont, api }) {
  const userState = useSelector((state) => state.userState);
  const {checkLimit} = useSelector((state) => state.workSpaceState);

  const [allWords, setAllWords] = useState([]);
  var moment = require("jalali-moment");
  var nowDate = new Date();
  const [datas, setDatas] = useState([]);
  var startDate =
    userState.userData.package != undefined &&
    new Date(moment(userState.userData.package.start).format("YYYY/M/D"));
  var expiryDate =
    userState.userData.package != undefined &&
    new Date(moment(userState.userData.package.end).format("YYYY/M/D"));
  var timeSecDaysLeft = Math.abs(expiryDate - nowDate);
  var timeSecDays = Math.abs(expiryDate - startDate);

  var numberOfDaysLeft = Math.ceil(timeSecDaysLeft / (1000 * 60 * 60 * 24));
  var numberOfDays = Math.ceil(timeSecDays / (1000 * 60 * 60 * 24));
  useEffect(() => {
    const setPackagesInformation = async () => {
      let package_uuid = "";

      if (userState.userData.package != undefined) {
        package_uuid = userState.userData.package.uuid;
        try {
          const { data, status } = await getPackageInfO(package_uuid);
          setAllWords(data.data.features);
   
        } catch (error) {
         
        }
      }
    };

    if (allWords.length == 0) setPackagesInformation();
  }, [userState.userData.package]);

  const { resultSetWorkSpace } = useSelector((state) => state.workSpaceState);

  useEffect(() => {
    if (datas.length == 0) pastSelexboxData();
  }, [resultSetWorkSpace.reportStatus]);

  useEffect(() => {
    pastSelexboxData()
  }, [checkLimit])
  
  const pastSelexboxData = async () => {
    try {
      const { data, status } = await usetLimit();
      setDatas(data.data);
      
    } catch (error) {
      
    }
  };

  const numStyle = `text-[#7D7D7D] text-[${
    numFont != undefined ? numFont : "14px"
  }] pt-[5px] pb-[2px]`;
  var a = 0;

  switch (api) {
    case "isContentProduction":
      a = {
        allWords: allWords.length != 0 && allWords[20].count,
        rest: datas.length > 0 ? datas[20].count : "",
      };
      break;

    case "isKeyword":
      a = {
        allWords: allWords.length != 0 && allWords[6].count,
        rest: datas.length > 0 ? datas[6].count : "",
      };
      break;
    //   data of workSpace
    case 1:
      a = {
        allWords: allWords.length != 0 && allWords[2].count,
        rest: datas.length > 0 ? datas[2].count : "",
      };
      break;
    case 2:
      a = {
        allWords: allWords.length != 0 && allWords[3].count,
        rest: datas.length > 0 ? datas[3].count : "",
      };
      break;
    case 3:
      a = {
        allWords: allWords.length != 0 && allWords[19].count,
        rest: datas.length > 0 ? datas[19].count : "",
      };
      break;
    case 4:
      a = {
        allWords: allWords.length != 0 && allWords[18].count,
        rest: datas.length > 0 ? datas[18].count : "",
      };
      break;
    case 5:
      a = {
        allWords: allWords.length != 0 && allWords[1].count,
        rest: datas.length > 0 ? datas[1].count : "",
      };

      break;
    default:
      break;
  }
  return (
    <div className="flex items-center text-[#7D7D7D] bg-[#D9D9D9] rounded  px-2 w-full h-full">
      <span className={numStyle}>{a.allWords}</span>
      <hr className="w-4 bg-gray text-[#7D7D7D] rotate-90" />
      <span
        className={numStyle}
        style={{
          color:
            a.allWords && a.rest >= Math.round((a.allWords * 70) / 100)
              ? "#10CCAE"
              : a.rest && a.rest >= Math.round((a.allWords * 1) / 100)
              ? "#F35242"
              : "#F35242",
        }}
      >
        {a.rest}
      </span>
    </div>
  );
}