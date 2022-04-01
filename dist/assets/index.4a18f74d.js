const u=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}};u();const v=()=>`  <nav class=bg-white>
    <!-- ----------------1st block start------------------ -->
  <div  class=" bg-white w-full mx-auto flex flex-wrap items-center justify-between">
      <div class=" h-full flex items-center ml-4 ">
          <img onclick="window.location.href='/index.html'" class=" cursor-pointer" src ="https://www.1mg.com/images/tata_1mg_logo.svg">
          <h1 class="ml-10 font-bold text-lg text-[rgb(255,111,97)] cursor-pointer" >MEDICINES</h1>
          <div class="flex ml-4 items-center">
              <h1 class="text-lg font-semibold cursor-pointer">LAB TESTS </h1>
              <div class="bg-[rgb(255,111,97)] ml-1 h-4 w-12 text-center text-xs text-white font-semibold"><h1>SAFE</h1></div>
          </div>
          <h1 class="ml-4 font-semibold text-lg  cursor-pointer">ASK DOCTOR</h1>
          <h1 class="ml-4 font-semibold text-lg  cursor-pointer">COVID-19</h1>
          <h1 class="ml-4 font-semibold text-lg  cursor-pointer">AYURVEDA</h1>
          <div class="flex ml-4 items-center">
           <h1 class="text-lg font-semibold cursor-pointer">CARE PLAN </h1>
           <div class="bg-[rgb(255,111,97)] ml-1 h-4 w-20 text-center text-xs text-white font-semibold"><h1>SAVE MORE</h1></div>
       </div>
       </div>
      
      
      <div class="flex flex-wrap justify-around mr-10">
          <h1 id = "login" class="text-sm font- mx-5 cursor-pointer"><a href="Pages/login.html">Login | SignUp</a></h1>
          <h1 class="text-sm  mx-5 cursor-pointer">Offers</h1>
        <div class="mx-5 flex">
          <p class="cursor-pointer" id="cartGo"><i class="fa-solid fa-cart-shopping"></i></p>
         <div class="bg-[rgb(255,111,97)] rounded-lg text-center "> <p class="text-white font-semibold text-sm w-6 " id ="length"></p></div>
          </div>
   
          <h1 class="text-sm  mx-2 hover:underline cursor-pointer">Need Help?</h1>
      </div>

  </div>


  <!-- ----------------1st block end------------------ -->

  <!-- ----------------2nd block start------------------ -->


  <div class="w-full h-14 bg-white border-2 flex justify-between">
      <div class="flex w-8/12 items-center ">
          <div class="flex bg-gray-200 w-44 items-center justify-between p-2 ml-10 rounded-md ">
           <i class="fa-solid fa-location-dot"></i>
           <p class="font-semibold">NEW DELHI</p>
           <i class="fa-solid fa-location-crosshairs"></i>
          </div>
         
             <input id="searchItem" placeholder="Search For Medicines And HealthProducts" class="bg-gray-200 mx-1 h-10 rounded-md p-2 w-7/12">
            
      </div>
      <div class="flex items-center">
          <div class="flex items-center">
           <i class="fa-solid fa-bolt mx-1"></i>
              <p>QUICK BUY! Flat 25% off on medicines*</p>
          </div>
          <div class="bg-[rgb(255,111,97)] mx-6 w-32 text-center text-lg text-white font-semibold rounded-lg">UPLOAD</div>
      </div>

  </div>

   <!-- ----------------2nd block end------------------ -->

  <!-- ----------------3rd block start------------------ -->

   <div class="bg-white w-11/12 mx-auto h-10  flex items-center">
       <div class="w-32">
      <select class="text-sm hover:text-[rgb(255,111,97)] hover:font-semibold p-2 w-full">
          <option class="text-sm text-black hover:text-[rgb(255,111,97)] " value="">Health Center</option>
          <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Diseases</option>
          <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Medicines</option>
          <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">Medicines by Therapeutic Class</option>
      </select>
   </div>

   <div class="w-36">
       <select class="text-sm hover:text-[rgb(255,111,97)] hover:font-semibold p-2 w-full">
           <option class="text-sm text-black hover:text-[rgb(255,111,97)] " value="">Covid Essentials</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Diseases</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Medicines</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">Medicines by Therapeutic Class</option>
       </select>
    </div>

    <div class="w-28">
       <select class="text-sm hover:text-[rgb(255,111,97)] hover:font-semibold p-2 w-full">
           <option class="text-sm text-black hover:text-[rgb(255,111,97)] " value="">Featured</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Diseases</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Medicines</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">Medicines by Therapeutic Class</option>
       </select>
    </div>

    <div class="w-44">
       <select class="text-sm hover:text-[rgb(255,111,97)] hover:font-semibold p-2 w-full" id="select">
           <option class="text-sm text-black hover:text-[rgb(255,111,97)] " value="">Vitamins & Nutrition</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="Pages/multivitamin.html">Multivitamins</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Medicines</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">Medicines by Therapeutic Class</option>
       </select>
    </div>

    <div class="w-24">
       <select class="text-sm hover:text-[rgb(255,111,97)] hover:font-semibold p-2 w-full" id="select2">
           <option class="text-sm text-black hover:text-[rgb(255,111,97)] " value="">Diabetes</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">Diabetes</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="homeopathy">Homeopathy</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="ayurveda">Ayurveda</option>
       </select>
    </div>

    <div class="w-40">
       <select class="text-sm hover:text-[rgb(255,111,97)] hover:font-semibold p-2 w-full">
           <option class="text-sm text-black hover:text-[rgb(255,111,97)] " value="">Healthcare Devices</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Diseases</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Medicines</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">Medicines by Therapeutic Class</option>
       </select>
    </div>

    <div class="w-32">
       <select class="text-sm hover:text-[rgb(255,111,97)] hover:font-semibold p-2 w-full">
           <option class="text-sm text-black hover:text-[rgb(255,111,97)] " value="">Personal Care</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Diseases</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Medicines</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">Medicines by Therapeutic Class</option>
       </select>
    </div>

    <div class="w-40">
       <select class="text-sm hover:text-[rgb(255,111,97)] hover:font-semibold p-2 w-full">
           <option class="text-sm text-black hover:text-[rgb(255,111,97)] " value="">Health Conditions</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Diseases</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Medicines</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">Medicines by Therapeutic Class</option>
       </select>
    </div>

    <div class="w-40">
       <select class="text-sm hover:text-[rgb(255,111,97)] hover:font-semibold p-2 w-full">
           <option class="text-sm text-black hover:text-[rgb(255,111,97)] " value="">Ayurveda Products</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Diseases</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Medicines</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">Medicines by Therapeutic Class</option>
       </select>
    </div>

    <div class="w-32">
       <select class="text-sm hover:text-[rgb(255,111,97)] hover:font-semibold p-2 w-full">
           <option class="text-sm text-black hover:text-[rgb(255,111,97)] " value="">Homeopathy</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Diseases</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">All Medicines</option>
           <option class="text-sm text-black hover:text-[rgb(255,111,97)]" value="">Medicines by Therapeutic Class</option>
       </select>
    </div>


     
   </div>

    <!-- ----------------3st block end------------------ -->
</nav>
`,g=()=>`  <footer class="container bg-white w-11/12 mx-auto">
    <div class="flex flex-col  border-b-2">
        <div class="text-center py-4"><h1 class="text-2xl">INDIA\u2019S LARGEST HEALTHCARE PLATFORM</h1></div>
        <div class="flex justify-between w-8/12 mx-auto">
            <div class="flex flex-col my-8 text-center">
             <p class="text-3xl font-bold">260m+</p>
             <p>Visitors</p>
             </div>
            <div class="flex flex-col my-8 text-center">
             <p class="text-3xl font-bold"> 31m+</p>
             <p>Orderd Dilivered</p>
             </div>
            <div class="flex flex-col my-8 text-center">
              <p class="text-3xl font-bold">1800+</p>
             <p>Cities</p>
             </div>
        </div>
    </div>
    <div class="flex justify-center py-4 align-middle border-b-2 w-full">
        <p class="text-xl">Get the link to download App</p>
        <input class="bg-slate-200 mx-10 w-3/12 h-10 px-3" type="text" placeholder="Enter Phone Number">
        <button class="bg-[rgb(255,111,97)] w-24 rounded text-white" >Send Link</button>
    </div>
    <div class="flex w-11/12 flex-wrap mx-auto justify-between border-b-2">
        <div>
            <p class="mt-12 font-semibold">Know Us</p>
            <ul class="flex flex-col flex-wrap my-5 text-gray-700 text-sm">
                <li>About us</li>
                <li>Contact us</li>
                <li>Press Coverage</li>
                <li>Careers</li>
                <li>Buissness Partnership</li>
                <li>Became a Health Partner</li>
            </ul>
        </div>
        <div>
            <p class="mt-12 font-semibold">Our Policies</p>
            <ul class="flex flex-col flex-wrap my-5 text-gray-700 text-sm">
                <li>Private Policy</li>
                <li>Terms and Conditions</li>
                <li>Editorial Policy</li>
                <li>Return Policy</li>
                <li>IP Policy</li>
                <li>Grievance Redressal Policy</li>
            </ul>
        </div>
        <div>
            <p class="mt-12 font-semibold">Our Services</p>
            <ul class="flex flex-col flex-wrap my-5 text-gray-700 text-sm">
                <li>Order Medicines</li>
                <li>Book Lab Tests</li>
                <li>Consult a Doctor</li>
                <li>Ayurveda Articles</li>
                <li>Hindi Articles</li>
                <li>Care Plan</li>
            </ul>
        </div>
        <div class="">
         <p class="mt-12 font-semibold">Connect</p>
         <ul class="flex flex-col flex-wrap my-5 text-sm">
             <li class="text-gray-700 ">Social Links</li>
             <div class="flex justify-around">
                 <i class="fa-brands fa-facebook fa-2xl my-5 mx-1"></i>
                 <i class="fa-brands fa-twitter-square fa-2xl my-5 mx-1"></i>
                 <i class="fa-brands fa-youtube fa-2xl my-5 mx-1"></i>
                 <i class="fa-brands fa-linkedin fa-2xl my-5 mx-1"></i>
             </div>
            
         </ul>

        </div>
        <div >
         <p class="mt-8 font-semibold">Download App</p>
         <img class="w-10/12 my-6 h-11" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="">
         <img class="w-10/12 my-6 h-11" src="https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0" alt="">

        </div>
    </div>
   <div class="flex flex-wrap flex-col mt-4">
       <div class="flex justify-center " >
           <img class="w-28" src="https://static.legitscript.com/seals/729605.png" alt="">
           <img class="w-28" src="https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png" alt="">
       </div>
       <div class="flex justify-center mt-3 font-semibold" >India's only LegitScript and ISO/ IEC 27001 certified online healthcare platform</div>
   </div>

</footer>`;let b=document.getElementById("header");b.innerHTML=v();let h=document.getElementById("footer");h.innerHTML=g();let n="",r=JSON.parse(localStorage.getItem("product")),f=["https://onemg.gumlet.io/image/upload/w_1013,h_250,,a_ignore,q_auto,f_auto/v1648746238/itzxf7ahkklltu0gp9ef.png","https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Landing-Pages-2021/best-seller-packages/dweb.png","https://onemg.gumlet.io/image/upload/w_1013,h_250,,a_ignore,q_auto,f_auto/v1648746306/pyb1upvhuccvzum3ke87.png","https://onemg.gumlet.io/image/upload/w_1013,h_250,,a_ignore,q_auto,f_auto/v1641283756/kcdcsb5yrkpxok5bpm8y.png","https://onemg.gumlet.io/image/upload/w_1013,h_250,,a_ignore,q_auto,f_auto/v1648746273/czpazwraxkqt6eo5bjpa.png","https://onemg.gumlet.io/image/upload/w_1013,h_250,,a_ignore,q_auto,f_auto/v1648746306/pyb1upvhuccvzum3ke87.png"];localStorage.setItem("Image",JSON.stringify(f));let d=JSON.parse(localStorage.getItem("Image")),a=1,w=d[0];document.getElementById("slideshow");let x=document.createElement("img");x.src=w;document.getElementById("slideshow").append(x);setInterval(function(){a===d.length&&(a=0);let t=d[a];document.getElementById("slideshow").innerHTML="";let l=document.createElement("img");l.setAttribute("class","mainImage"),l.src=t,document.getElementById("slideshow").append(l),a++},2e3);let p=JSON.parse(localStorage.getItem("logInUser"))||[],y=p[0].name,m=document.getElementById("login");p===null?m.textContent=LOGIN|SIGNUP:m.textContent=`Hello! ${y}`;document.getElementById("select").addEventListener("click",()=>{k()});const k=()=>{window.location.href="Pages/multivitamin.html"};let A=JSON.parse(localStorage.getItem("cartItem")),I=document.getElementById("length");I.textContent=A.length;document.getElementById("searchItem").addEventListener("input",()=>{S(C,1e3)});const E=async()=>{try{return await(await fetch("http://localhost:3000/multiVitamins")).json()}catch(t){console.log(t)}},P=t=>{let l=document.createElement("div");l.setAttribute("class","showBox"),l.innerHTML="",t.map(i=>{let o=document.createElement("div");o.setAttribute("class","boxBox"),o.addEventListener("click",()=>{L(i)});let e=document.createElement("p");e.textContent=i.Title,e.setAttribute("class","boxName"),o.append(e),l.append(o)}),document.getElementById("header").append(l)},C=async()=>{try{let t=await E();if(t===void 0)return!1;P(t)}catch(t){console.log(t)}},S=(t,l)=>{n&&clearTimeout(n),n=setTimeout(function(){t()},l)},L=t=>{r.push(t),console.log(r),localStorage.setItem("product",JSON.stringify(r)),window.location.href="Pages/product.html"};document.getElementById("cartGo").addEventListener("click",()=>{M()});const M=()=>{window.location.href="/Pages/cart.html"};
