// import React from "react";
// import Styles from "./style.module.css"

// export default function bodyPage({children}:{children:React.ReactNode}){
//     return(<div className='main'>{children}</div>)
// }

import React from "react";
import anh from "../(Header)/images/img1.png";
import Image from "next/image";

export default function bodyPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="main">
      <div className="main-test1">
        <div>
          {" "}
          <Image src={anh} alt={"anh"} height={240} width={1200} />
          <div className="promotion">
            <h3>Khuyến mãi Online</h3>
            <ul>
              <li>FLAST SALE</li>
              <li>ONLINE ONLY</li>
              <li>Điện Thoại</li>
              <li>Apple</li>
              <li>Laptop</li>
              <li>Phụ Kiện</li>
              <li>Đồng Hồ</li>
              <li>PC, Máy in</li>
            </ul>
          </div>
          <div className="promotion">
            <ul>
              <li>Chỉ còn :</li>
              <li>Sắp diễn ra </li>
              <li>Ngày mai</li>
              <li>Ngày mai</li>
              <li>Ngày mai</li>
            </ul>
          </div>
          <div className="list-product">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
