import Head from 'next/head'
// import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/Link'
import Image from 'next/image'
import startEasyStartArrow_svg from '../styles/assets/img/dashboard/EasyStartPage/startEasyStartArrow.svg'
import moshak_svg from '../styles/assets/img/dashboard/EasyStartPage/moshak.svg'
import easystart_svg from '../styles/assets/img/dashboard/EasyStartPage/easystart.svg'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className=" flex items-center justify-between my-9 mx-7 border  text-sm rounded-lg border-lightGray px-7 py-11">
        <span className="text-primaryV1">
          اگر سوالی دارید، با همکاران ما در واحد پشتیبانی تماس بگیرید.{" "}
        </span>
        <a href="https://segmento.ir/support"><button className="btn-style"> برقراری تماس</button></a>
      </div>
      <div className="flex flex-col relative mt-9 mx-7 mb-7 ">
        <div className="flex items-center justify-center text-title bg-gold text-base py-5 absolute w-full -top-5  rounded-t-lg z-10 ">
          شروع آسان
        </div>
        <div className="rounded-lg border border-lightGray EasyStartBoxContent flex flex-col  px-7">
          <div className="flex flex-col gap-1 text-sm mx-7 mt-20">
            <span className="text-primaryV1">
              چند گام کوچک از تمام قدرت سگمنتو فاصله دارید،
            </span>
            <span className="text-primaryV1">
              {" "}
              آدرس وب‌سایت و کلمات کلیدی خودتان را آماده کنید تا شروع کنیم.
            </span>
            <span className="text-primaryV1">
              پس از انتخاب اشتراک و انجام فرایند شروع آسان به داده‌های تمیز و
              ساده دسترسی دارید که قابل استفاده و مطمئن هستند.{" "}
            </span>
          </div>
          <div className="flex justify-between items-center mt-16 ">
            {/* <Link
            href={"/dashboard"}
              // href="dashboard"
              // state={{ background: location }}
              className="btn-style w-40 mb-5  bottom-0 flex justify-between"
              // onClick={()=>ReplaceClass({
              //   elementClass:"easyToStartRocket",
              //   oldClass:"easyToStartRocket_animation",
              //   newClass:"easyToStartRocket_animation_fire",
              //   replaceClass:true
              // })}
            >
              {" "}
              شروع کنیم{" "}
              <img
                src={startEasyStartArrow_svg}
                alt="EasyStartPage"
                className=" mr-3"
              />
            </Link> */}
            <div className="w-[209px]  flex justify-end relative ">
              <span className="bg-lightYellow w-11 h-4 absolute rounded-[40px] text-[5px] flex items-center justify-center bottom-[125px] left-9">
                {" "}
                صفحات تجاری
              </span>
              <span className="bg-lightYellow w-11 h-4 absolute rounded-[40px] text-[5px] flex items-center justify-center bottom-[60px] left-9">
                {" "}
                آدرس وب سایت
              </span>

              <span className="bg-lightYellow w-11 h-4 absolute rounded-[40px] text-[5px] flex items-center justify-center bottom-[80px] -right-8">
                {" "}
                کلمات کلیدی{" "}
              </span>

              <img
                src={moshak_svg}
                alt="EasyStartPage"
                // className="w-[209px] animate-pulse pb-1 ml-8 absolute -bottom-24 -right-10  z-10"
                // className="w-[209px] animate-bounce easyToStartRocket pb-1 ml-8 absolute -bottom-24 -right-10  z-10"
                className="w-[209px] easyToStartRocket easyToStartRocket_animation pb-1 ml-8 absolute -bottom-24 -right-10  z-10"
              />
              <Image
                // src={easystart_svg}
                src='/../styles/assets/img/dashboard/EasyStartPage/easystart.svg'
                alt="EasyStartPage"
                className="w-[209px] pb-1 ml-8 absolute -bottom-4 z-1"
                width={"209px"}
                height={"209px"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <SetTitleTabBrowser nameSection={"شروع آسان"} /> */}
    </>
  )
}
