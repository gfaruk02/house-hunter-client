import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AddHouse = () => {
    const navigate = useNavigate()
    const handleAddNewHouse = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const city = form.city.value;
        const bedrooms = form.bedrooms.value;
        const roomSize = form.roomSize.value;
        const bathrooms = form.bathrooms.value;
        const picture = form.picture.value;
        const date = form.date.value;
        const rent = form.rent.value;
        const phone = form.phone.value;
        const description = form.description.value;

        const houseData = { name, email, address, city, bedrooms, roomSize, bathrooms, picture, date, rent, phone, description }
        console.log(houseData);
        axios.post('https://house-hunter-server-rho-nine.vercel.app/houses', houseData)
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
        <div className=" max-w-2xl mx-auto">
            <div className="text-center">
                <h3 className="text-lg font-bold">Add New House</h3>
            </div>

            <form onSubmit={handleAddNewHouse} className="space-y-3" method="dialog">

                <div className="text-base font-semibold flex items-center">
                    <span className="mr-1 w-32">House Name:</span>
                    <input type="text" name="name" placeholder="House Name" className="input input-bordered flex-1" required />
                </div>
                <div className="text-base font-semibold flex items-center">
                    <span className="mr-1 w-32">Your Email:</span>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered flex-1" required />
                </div>
                <div className="text-base font-semibold flex items-center">
                    <span className="mr-1 w-32">House address:</span>
                    <input type="text" name="address" placeholder="House Address" className="input input-bordered flex-1" required />
                </div>
                <div className="text-base font-semibold flex items-center">
                    <span className="mr-1 w-32">House City:</span>
                    <input type="text" name="city" placeholder="House City" className="input input-bordered flex-1" required />
                </div>
                <div className="text-base font-semibold flex items-center">
                    <span className="mr-1 w-32">House Total Bedrooms:</span>
                    <input type="text" name="bedrooms" placeholder="House Bedrooms" className="input input-bordered flex-1" required />
                </div>
                <div className="text-base font-semibold flex items-center">
                    <span className="mr-1 w-32">House Room Size (sq ft):</span>
                    <input type="text" name="roomSize" placeholder="House Room Size" className="input input-bordered flex-1" required />
                </div>
                <div className="text-base font-semibold flex items-center">
                    <span className="mr-1 w-32">Bathrooms:</span>
                    <input type="text" name="bathrooms" placeholder="Bathrooms" className="input input-bordered flex-1" required />
                </div>
                <div className="text-base font-semibold flex items-center">
                    <span className="mr-1 w-32">House Picture Url:</span>
                    <input type="text" name="picture" placeholder="House Picture Url" className="input input-bordered flex-1" required />
                </div>
                <div className="text-base font-semibold flex items-center">
                    <span className="mr-1 w-32">Availability Date:</span>
                    <input type="date" name="date" placeholder="House availability date" className="input input-bordered flex-1" required />
                </div>
                <div className="text-base font-semibold flex items-center">
                    <span className="mr-1 w-32">Rent Per Month:</span>
                    <input type="text" name="rent" placeholder="House rent per month" className="input input-bordered flex-1" required />
                </div>
                <div className="text-base font-semibold flex items-center">
                    <span className="mr-1 w-32">phone number:</span>
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered flex-1" required />
                </div>
                <div className="text-base font-semibold flex items-center">
                    <span className="mr-1 w-32">Description:</span>
                    <input type="text" name="description" placeholder="Description" className="input input-bordered flex-1" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary hover:bg-green-400 bg-green-800 text-white font-bold">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddHouse;