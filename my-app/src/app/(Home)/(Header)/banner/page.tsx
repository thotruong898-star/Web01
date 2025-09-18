import Image from 'next/image'
import anh1 from '../images/header1.png'

export default function Banner() {
  return (
    <>
    <div className='banner-media'>
      <Image src={anh1} alt={'Ảnh quảng cáo điện thoại mới nhất' } height={44} width={1200}/>
    </div>
    </>
    
  );
}
