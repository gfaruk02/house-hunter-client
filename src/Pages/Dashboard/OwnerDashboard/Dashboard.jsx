import AddHouse from "./AddHouse";


const Dashboard = () => {

    return (
        <div className="max-w-6xl mx-auto text-center">


<div role="tablist" className="tabs tabs-lifted mx-auto px-12">
  <input type="radio" name="my_tabs_2" role="tab" className="tab text-center" aria-label="Tab 1" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"> 
  <AddHouse></AddHouse>
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
</div>


        </div>
    );
};

export default Dashboard;