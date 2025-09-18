import Image from "next/image";
import anh1 from "./images/header1.png";
import Styles from "./header.module.css";

export default function Menu() {
  return (
    <>
      <div className="menu-media">
        <ul>
          <li>Trang chủ</li>
          <li>Điện thoại</li>
          <li>Laptop</li>
          <li>Phu kiện</li>
          <li>Smartwatch</li>
          <li>Đồng hồ</li>
          <li>Tablet</li>
          <li>Máy cũ, Thu cũ</li>
          <li>Màn hình, Máy in</li>
          <li>Sim, Thẻ cào</li>
          <li>Dịch vụ tiện ích</li>
        </ul>
      </div>
    </>
  );
}
