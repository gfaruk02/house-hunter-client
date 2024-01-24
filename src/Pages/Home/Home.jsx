import Swal from "sweetalert2";
import useAxios from "../../Components/Hooks/useAxios";
import useHouses from "../../Components/Hooks/useHouses";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const houses = useHouses()
    const axiosPublic = useAxios()
    const navigate = useNavigate();
    // console.log(houses);

    const handlebookingHouse = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const houseId = form.houseId.value;
        const hname = form.hname.value;
        const address = form.address.value;
        const city = form.city.value;
        const contact = form.contact.value;


        const bookingData = { name, phone, email, houseId, hname, address, city, contact }
        console.log(bookingData);

        axiosPublic.post('booking', bookingData)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('Add House Created Successfully');
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Add New House Created Successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset();
                }
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="my-10 md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-between">
                {
                    houses?.map(house => <div key={house._id} className="max-w-lg p-3 shadow-md bg-gray-50 text-gray-900">
                        <div className="flex justify-between pb-4 border-bottom">
                            <div className="flex items-center">
                                <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-900 text-xl font-bold">{house.name}</a>
                            </div>
                        </div>
                        <div className="space-y-4 text-gray-950 font-semibold">
                            <div className="space-y-2">
                                <img src={house.picture} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                                <div className="flex items-center text-xl">
                                    <h1> Details</h1>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <p>Address: {house.address}</p>
                                <p> City: {house.city}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 justify-between">
                                <p>Bedrooms: {house.bedrooms}</p>
                                <p> RoomSize: {house.roomSize}</p>
                            </div>
                            <div>
                                <p>Total Bathrooms: {house.bathrooms}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <p>Available Date: {house.date}</p>
                                <p> Rent: {house.rent} tk</p>
                            </div>
                            <div>
                                <p> Contact Number: {house.phone}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="leadi text-gray-900">Description: {house.description}.</p>
                            </div>

                            <div>
                                {/* The button to open modal */}
                                <label htmlFor="my_modal_7" className="btn font-bold text-md text-orange-700 border-red-900 hover:bg-gray-500 hover:text-white">Booking House</label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                <div className="modal" role="dialog">
                                    <div className="modal-box">
                                        <h1 className="text-xl py-3 text-center">Give Your Info For Booking House </h1>
                                        <form onSubmit={handlebookingHouse} className="space-y-3" method="dialog">

                                            <div className="text-base font-semibold flex items-center">
                                                <span className="mr-1 w-32"> Name:</span>
                                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered flex-1" required />
                                            </div>
                                            <div className="text-base font-semibold flex items-center">
                                                <span className="mr-1 w-32"> Email:</span>
                                                <input type="email" name="email" placeholder="Email" className="input input-bordered flex-1" required />
                                            </div>
                                            <div className="text-base font-semibold flex items-center">
                                                <span className="mr-1 w-32"> Phone:</span>
                                                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered flex-1" required />
                                            </div>
                                            <div>
                                                <p> House Info</p>
                                                <div className="text-base font-semibold flex items-center">
                                                    <span className="mr-1 w-32"> House Id:</span>
                                                    <input type="text" name="houseId" defaultValue={house._id} placeholder="House Name" className="input input-bordered flex-1" required />
                                                </div>
                                                <div className="text-base font-semibold flex items-center">
                                                    <span className="mr-1 w-32"> House:</span>
                                                    <input type="text" name="hname" defaultValue={house.name} placeholder="House Name" className="input input-bordered flex-1" required />
                                                </div>
                                                <div className="text-base font-semibold flex items-center">
                                                    <span className="mr-1 w-32"> Address:</span>
                                                    <input type="text" name="address" defaultValue={house.address} placeholder="House Address" className="input input-bordered flex-1" required />
                                                </div>
                                                <div className="text-base font-semibold flex items-center">
                                                    <span className="mr-1 w-32"> city:</span>
                                                    <input type="text" name="city" defaultValue={house.city} placeholder="City" className="input input-bordered flex-1" required />
                                                </div>
                                                <div className="text-base font-semibold flex items-center">
                                                    <span className="mr-1 w-32"> Phone:</span>
                                                    <input type="text" name="contact" defaultValue={house.phone} placeholder="Owner Contact Number" className="input input-bordered flex-1" required />
                                                </div>
                                            </div>

                                            <div className="form-control mt-6">
                                                <button className="btn btn-primary hover:bg-green-400 bg-green-800 text-white font-bold">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                                </div>
                            </div>

                        </div>
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default Home;