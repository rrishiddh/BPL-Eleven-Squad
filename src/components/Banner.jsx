import background from '../assets/bg-shadow.png'
import img1 from '../assets/banner-main.png'

const Banner = ({increaseCoin}) => {
    

    return (
        <div className="w-[90%] mx-auto mt-6">
            <div className="h-[40rem]  bg-cover bg-no-repeat rounded-3xl bg-slate-950 mx-auto text-center flex items-center justify-center "
                style={{
                    backgroundImage: `url(${background})`,                    
                }}>
                    <span className='space-y-6'>
                          <img className='mx-auto' src={img1} alt="" />  
                        <h2 className='text-white text-3xl font-bold' >Assemble Your Ultimate Dream 11 Cricket Team</h2>    
                        <p className='text-gray-400 pb-4'>Beyond Boundaries Beyond Limits</p>
                        <button onClick={()=>increaseCoin(700000)} className='btn bg-yellow-300 font-bold text-xl px-4 outline  outline-offset-8 outline-yellow-300'>Claim Free Credit</button>
                        
                    </span>                
            </div>
        </div>
    );
};

export default Banner;