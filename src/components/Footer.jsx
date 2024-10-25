import img from '../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className="mt-52 ">
            <div className=" bg-black text-gray-300  p-10 mx-auto relative ">
             
             
             <div className="w-[90%] mx-auto bg-gradient-to-r from-blue-100 to-orange-100 py-16 rounded-lg text-center absolute  -top-36 text-black outline  outline-offset-8 outline-white max-md:right-5 lg:right-14">
                 <h2 className="text-3xl font-bold my-4">Subscribe to our Newsletter</h2>
                 <p className="mb-6 text-lg">Get the latest updates and news right in your inbox!</p>
                 <div className="flex justify-center">
                     <input 
                         type="email" 
                         placeholder="Your Email" 
                         className="input input-bordered input-lg rounded-l-lg w-[40%]"
                     />
                     <button className="btn btn-lg bg-gradient-to-r from-pink-400 to-yellow-400  font-semibold rounded-lg">
                         Subscribe
                     </button>
                 </div>
             

             </div>           
  
              <img className='mx-auto max-sm:mt-20 pt-40 pb-20' src={img} alt="" />  
 
 
             <footer className="footer w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 ">                   
                     <nav>
                         <h6 className="footer-title">About us</h6>
                         <p className="md:w-[60%]">We are a passionate team dedicated to providing the best services to our customers.</p>
                     </nav>
                     <nav>
                         <h6 className="footer-title">Quick Links</h6>
                         <ul className="space-y-3 ml-8">
                             <li className="list-disc">Home</li>
                             <li className="list-disc">Service</li>
                             <li className="list-disc">About</li>
                             <li className="list-disc">Contact</li>
                         </ul>                       
                     </nav>
                     <form>
                         <h6 className="footer-title">Subscribe</h6>
                         <p className="md:w-[80%] inter">Subscribe to our newsletter for the latest updates.</p>
                         
                         <div className="join mt-6 max-sm:w-[50%]">
                             <input
                             type="text"
                             placeholder="Enter Your Email"
                             className="input input-bordered join-item" />
                             <button className="btn  join-item text-black bg-gradient-to-r from-pink-400 to-yellow-400  font-semibold">Subscribe</button>
                         </div>
                     </form>
             </footer>
 
             
             <p className="py-10"></p>
             <p  className="border border-b-2 border-gray-700"></p>
             <p className="text-center mt-5"> &copy;2024 BPL Eleven Squad - All Rights Reserved.</p>
         </div>
        </div>
    );
};

export default Footer;