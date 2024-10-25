import { useEffect, useState } from "react";

const AvailablePlayers = ({handleAvailablePlayer,availablePlayer, addedPlayerDetails, singlePlayerDetails}) => { 
    const [availablePlayers, setavailablePlayer] = useState([]);

    useEffect(()=>{
        fetch("../../public/players.json")
        .then(res => res.json())
        .then(data => setavailablePlayer(data))
    },[])

    return (
        <div className="w-[90%] mx-auto my-16">
            {/* btn toggle  */}
            <div className="flex justify-between mb-10">
                <h2 className={`${availablePlayer === "available" ? "text-2xl font-bold": "hidden"}`}>Available Players</h2>
                <h2 className={`${availablePlayer === "selected" ? "text-2xl font-bold": "hidden"}`}>Selected Players ({singlePlayerDetails.length})</h2>
                <span className="space-x-0">
                    
                    <button onClick={() => handleAvailablePlayer("available")} className={`${availablePlayer === "available"?"bg-yellow-300 font-bold text-black":"bg-transparent text-gray-500 border border-gray-300"} py-2 px-4 rounded-l-lg `}> Available </button>                

                    <button onClick={() => handleAvailablePlayer("selected")} className={`${availablePlayer === "selected" ? "bg-yellow-300 font-bold text-black": "bg-transparent text-gray-500 border border-gray-300"}font-bold py-2 px-4 rounded-r-lg`}> Selected({singlePlayerDetails.length})  </button>

                </span>
            </div>     

            {/* availablePlayer */}
            <div className={`${availablePlayer === "available" ? "": "hidden"}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    availablePlayers.map(availablePlayer=> (

                    <div key={availablePlayer.id} className="card bg-base-100 border-2 border-gray">
                    <figure className="w-full p-4 mx-auto" >
                    <img className="rounded-xl h-full "
                        src={availablePlayer.image} />
                    </figure>
                    <div className="card-body">
                        <span className="flex gap-3 align-middle">
                            <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=23265&format=png&color=000000"  />
                        <h2 className="text-2xl font-bold">{availablePlayer.name}</h2>
                        </span>
                        <div className="flex justify-between">
                            <span className="flex gap-3 items-center align-middle">
                            <img className="w-7 h-7"  src="https://img.icons8.com/?size=100&id=94712&format=png&color=000000" alt="" />
                            <h2 className="text-gray-500 ">{availablePlayer.country}</h2>
                            </span>
                            <span>
                            <button className="btn uppercase">{availablePlayer.role}</button>
                            </span>
                        </div>
                        <hr className="my-3"/>
                        <div>
                            <h2 className=" text-xl font-bold">Rating:</h2>
                            <span className="flex justify-between   ">
                                <p className="font-bold">Left/Right Bat:</p>
                                <p>{availablePlayer.right_left_hand}</p>
                            </span>
                            <span className="flex justify-between ">
                                <p className="font-bold ">Speciality: </p>
                                <p className=" ml-9">{availablePlayer.batting_bowling}</p>
                            </span>
                        </div>

                        <hr className="my-1"/>

                    <div className="flex justify-between items-center align-middle ">
                        <p className="font-bold "> Price: ${availablePlayer.bid_price} </p>
                        <button onClick={ ()=> addedPlayerDetails(availablePlayer)} className="border-2 btn-ghost btn  border-gray-300">Choose Player</button>
                    </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
            

            {/* selectedPlayer  */}
            <div className={`${availablePlayer === "selected" ? "": "hidden"}`}>
                <div className=" space-y-5">

                {singlePlayerDetails.map((player,idx)=>(
                    <div key={idx} className="border-2 border-gray p-4 rounded-lg flex justify-between items-center ">
                    <div className="flex justify-between gap-6">
                        <img className="w-20 h-20 rounded-badge object-cover" src={player.image} alt="" />
                        <div>
                            <h2 className="font-bold text-xl">{player.name}</h2>
                            <h2 className="text-gray-500">{player.batting_bowling}</h2>                          
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-ghost"><img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=87371&format=png&color=000000" alt="" /></button>
                    </div>
                </div>
                ))}
                    

                    <button onClick={() => handleAvailablePlayer("available")} className="btn mt-10 bg-yellow-300 outline  outline-offset-8 outline-yellow-300 text-black font-bold">Add More Player</button>
                </div>
            </div>

        </div>
    );
};

export default AvailablePlayers;