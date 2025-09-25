import Image from "next/image";
import Styles from './homeNews.module.css'

export default function HomeNews() {
  return(
    <section className={Styles.homeNews}>
    <h2>Mạng xã hội thegoididong.com</h2>
    <div className={Styles.outer}>
      <div>
        <Image
          src={"/news1.png"}
          alt={""}
          height={162}
          width={280}
          style={{ borderRadius: "8px" }}
        />
        <p>
          Realme 15 Series ra mắt tại Việt Nam: Pin Titan 7.000Ah, chỉnh sửa ảnh
          AI Edit Genie và từ giá từ 8.99 triệu đồng
        </p>
      </div>
      <div>
        <Image
          src={"/news2.jpg"}
          alt={""}
          height={162}
          width={280}
          style={{ borderRadius: "8px" }}
        />
        <p>
          Apple Watch Ultra 3 có mấy màu? Có mấy chất liệu dây đeo?
        </p>
      </div>
      <div>
        <Image
          src={"/news3.jpg"}
          alt={""}
          height={162}
          width={280}
          style={{ borderRadius: "8px" }}
        />
        <p>
          Hướng dẫn cách tạo ảnh chân dung nền đỏ bằng AI siêu đẹp bạn nên thử
        </p>
      </div>
      <div>
        <Image
          src={"/news4.jpg"}
          alt={""}
          height={162}
          width={280}
          style={{ borderRadius: "8px" }}
        />
        <p>
          So sánh iPhone 17 và iPhone 17 Pro? Có gì khác biệt? Ai nên mua
        </p>
      </div>
    </div>
  </section>
  )
}
