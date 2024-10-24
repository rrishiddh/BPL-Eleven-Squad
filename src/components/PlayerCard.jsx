import { useEffect, useState } from "react";

const PlayerCard = () => {
    const [availablePlayers, setavailablePlayer] = useState([]);

    useEffect(()=>{
        fetch("../../public/players.json")
        .then(res => res.json())
        .then(data => setavailablePlayer(data))
    },[])

    return (
        <div className="w-[90%] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                availablePlayers.map(availablePlayer=> (

                <div key={availablePlayer.id} className="card bg-base-100 border-2 border-gray-400">
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
                    <button className="border-2 btn-ghost btn  border-gray-300">Choose Player</button>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
    );
};

export default PlayerCard;