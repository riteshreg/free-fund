import Image from "next/image";

export default function Home() {
  return (
    <>
<section>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 my-5">
  <div className="p-4 grid grid-cols-10 gap-2 col-span-2">
<div className="grid grid-rows-5 ">
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
   <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div> <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  </div>  

  <div className="grid grid-rows-5 ">
  <div className="row-start-3 row-end-4"><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  </div>  
    <div className="grid grid-rows-5 ">
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
   <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
    <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  </div>  
  <div className="grid grid-rows-5 ">
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
   <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
    <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  
  </div>  

  <div className="grid grid-rows-5 ">
     <div className="row-start-1 row-end-2"><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
     
 
  <div className="row-start-3 row-end-3"><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  <div className="row-start-5 row-end-5"><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  </div>  
    <div className="grid grid-rows-5 ">
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
   <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
    <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  </div>  
  <div className="grid grid-rows-5 ">

  <div className="row-start-5 row-end-5"><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  
  </div>  
  <div className="grid grid-rows-5 ">
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
   <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
    <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  </div>  
  <div className="grid grid-rows-5 ">
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  <div><Image src="/images/1.jpg" width={100} height={400} alt="fund-image"/></div>
  
  
  </div>  
  </div>
  <div className="bg-gray-200 p-4"><div className="grid place-items-center min-h-full"><button className="primary-button text-4xl "> Go fund Me</button></div></div>
</div>

  </section>    </>
  );
}
