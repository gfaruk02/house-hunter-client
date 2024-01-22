import { useLoaderData } from "react-router-dom";
import AddHouse from "./AddHouse";
import ViewHousesData from "./ViewHousesData";
// import { useState } from "react";


const Dashboard = () => {
const houses = useLoaderData()
// const [houseDatas, setHouseDatas] = useState(houses)
    return (
        <div className="max-w-7xl mx-auto text-center mt-10">


<div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl text-orange-800 font-bold overflow-hidden" aria-label="Add New" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"> 
  <AddHouse></AddHouse>
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl text-orange-800 font-bold overflow-hidden" aria-label="View" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  {
houses?.map(house=> <ViewHousesData key={house._id} house={house}> </ViewHousesData>)
  }
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl text-orange-800 font-bold overflow-hidden" aria-label="Booking" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Booking</div>
</div>


        </div>
    );
};

export default Dashboard;