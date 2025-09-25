import Main from "@/app/(Home)/(Main)/Main";
import anh from "../../(Home)/(Header)/images/img1.png";
import Styles from "./product.module.css";
import React from "react";
import Image from "next/image";
import realmeC75 from "./img/realmeC75.jpg";


export default function Product({ children }: { children: React.ReactNode }) {
  return (
    <div className="main">
      <div className="main-test1">
        <Main>
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
            <div className="item">
              <div style={{ margin: "0 5px" }}>
                <div className={Styles.itemImg}>
                  <Image src={realmeC75} alt={""} height={172} width={155} />
                </div>
                <h3 className={Styles.itemH3}>realme C75 8GB/512GB</h3>
                <strong className={Styles.price}>
                  6.540.000₫
                  <span className={Styles.priceAndDiscount}>
                    <label htmlFor="">8.300.000₫</label>
                    <small>-21%</small>
                  </span>
                </strong>
                <div className={Styles.contait}>
                  <Image
                    src={"/flash-sale.png"}
                    alt={""}
                    height={22}
                    width={20}
                    className={Styles.img}
                  />
                  <span className={Styles.count}>
                    <b>Còn 6/10 suất</b>
                  </span>
                </div>
                <div className={Styles.btnBuy}>
                  <a href="#!">Mua ngay</a>
                </div>
              </div>
            </div>
            {/* <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div> */}

            <div className="item">
              <div style={{ margin: "0 5px" }}>
                <div className={Styles.itemImg}>
                  <Image src={realmeC75} alt={""} height={172} width={155} />
                </div>
                <h3 className={Styles.itemH3}>realme C75 8GB/512GB</h3>
                <strong className={Styles.price}>
                  6.540.000₫
                  <span className={Styles.priceAndDiscount}>
                    <label htmlFor="">8.300.000₫</label>
                    <small>-21%</small>
                  </span>
                </strong>
                <div className={Styles.contait}>
                  <Image
                    src={"/flash-sale.png"}
                    alt={""}
                    height={22}
                    width={20}
                    className={Styles.img}
                  />
                  <span className={Styles.count}>
                    <b>Còn 6/10 suất</b>
                  </span>
                </div>
                <div className={Styles.btnBuy}>
                  <a href="#!">Mua ngay</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div style={{ margin: "0 5px" }}>
                <div className={Styles.itemImg}>
                  <Image src={realmeC75} alt={""} height={172} width={155} />
                </div>
                <h3 className={Styles.itemH3}>realme C75 8GB/512GB</h3>
                <strong className={Styles.price}>
                  6.540.000₫
                  <span className={Styles.priceAndDiscount}>
                    <label htmlFor="">8.300.000₫</label>
                    <small>-21%</small>
                  </span>
                </strong>
                <div className={Styles.contait}>
                  <Image
                    src={"/flash-sale.png"}
                    alt={""}
                    height={22}
                    width={20}
                    className={Styles.img}
                  />
                  <span className={Styles.count}>
                    <b>Còn 6/10 suất</b>
                  </span>
                </div>
                <div className={Styles.btnBuy}>
                  <a href="#!">Mua ngay</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div style={{ margin: "0 5px" }}>
                <div className={Styles.itemImg}>
                  <Image src={realmeC75} alt={""} height={172} width={155} />
                </div>
                <h3 className={Styles.itemH3}>realme C75 8GB/512GB</h3>
                <strong className={Styles.price}>
                  6.540.000₫
                  <span className={Styles.priceAndDiscount}>
                    <label htmlFor="">8.300.000₫</label>
                    <small>-21%</small>
                  </span>
                </strong>
                <div className={Styles.contait}>
                  <Image
                    src={"/flash-sale.png"}
                    alt={""}
                    height={22}
                    width={20}
                    className={Styles.img}
                  />
                  <span className={Styles.count}>
                    <b>Còn 6/10 suất</b>
                  </span>
                </div>
                <div className={Styles.btnBuy}>
                  <a href="#!">Mua ngay</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div style={{ margin: "0 5px" }}>
                <div className={Styles.itemImg}>
                  <Image src={realmeC75} alt={""} height={172} width={155} />
                </div>
                <h3 className={Styles.itemH3}>realme C75 8GB/512GB</h3>
                <strong className={Styles.price}>
                  6.540.000₫
                  <span className={Styles.priceAndDiscount}>
                    <label htmlFor="">8.300.000₫</label>
                    <small>-21%</small>
                  </span>
                </strong>
                <div className={Styles.contait}>
                  <Image
                    src={"/flash-sale.png"}
                    alt={""}
                    height={22}
                    width={20}
                    className={Styles.img}
                  />
                  <span className={Styles.count}>
                    <b>Còn 6/10 suất</b>
                  </span>
                </div>
                <div className={Styles.btnBuy}>
                  <a href="#!">Mua ngay</a>
                </div>
              </div>
            </div>

            <div className="item">
              <div style={{ margin: "0 5px" }}>
                <div className={Styles.itemImg}>
                  <Image src={realmeC75} alt={""} height={172} width={155} />
                </div>
                <h3 className={Styles.itemH3}>realme C75 8GB/512GB</h3>
                <strong className={Styles.price}>
                  6.540.000₫
                  <span className={Styles.priceAndDiscount}>
                    <label htmlFor="">8.300.000₫</label>
                    <small>-21%</small>
                  </span>
                </strong>
                <div className={Styles.contait}>
                  <Image
                    src={"/flash-sale.png"}
                    alt={""}
                    height={22}
                    width={20}
                    className={Styles.img}
                  />
                  <span className={Styles.count}>
                    <b>Còn 6/10 suất</b>
                  </span>
                </div>
                <div className={Styles.btnBuy}>
                  <a href="#!">Mua ngay</a>
                </div>
              </div>
            </div>
            
            
          </div>
        </Main>
      </div>
    </div>
  );
}
