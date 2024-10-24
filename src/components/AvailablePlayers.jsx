
const AvailablePlayers = () => { 
    return (
        <div className="w-[90%] mx-auto">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Available Player</h2>
                <span className="space-x-2">
                    <button className="btn font-bold">Available</button>
                    <button className=" btn font-bold">Selected</button>
                </span>
            </div>            
        </div>
    );
};

export default AvailablePlayers;