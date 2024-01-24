import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const RenterDashboard = () => {
    const bookingData = useLoaderData()
    const [booking, setBooking] = useState([]);
    // console.log(booking);
    useEffect(() => {
        const userEmail = localStorage.getItem('email');
        const result = bookingData.find((user) => user.email === userEmail);
        if (result) {
            setBooking([result]);
            // window.location.reload(false);
        } else {
            setBooking({});
        }
    }, [bookingData])
    const handleDelete = (_id) => {
        // console.log(_id);

        //sweel alert
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://house-hunter-server-rho-nine.vercel.app/booking/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your data has been deleted.',
                                'success'
                            )
                            // const remaining = houses.filter(house => house._id !== _id);
                            // setHouses(remaining);
                        }
                    })
            }
        })
    }
    // const [houseDatas, setHouseDatas] = useState(houses)
    return (
        <div className="max-w-7xl mx-auto text-center mt-10 text-gray-100 ">

            <table className="min-w-full text-xs">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="w-24" />
                </colgroup>
                <thead className="bg-gray-700">
                    <tr className="text-left">
                        <th className="p-3">Sl</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">House Id</th>
                        <th className="p-3">House Name</th>
                        <th className="p-3">Address</th>
                        <th className="p-3">City</th>
                        <th className="p-3">Conatct</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booking?.map((book, index) =>
                            <tr key={book._id} className="text-gray-100 border-b border-opacity-20 border-gray-700 bg-gray-900">
                                <td className="p-3">
                                    {index}
                                </td>
                                <td className="p-3">
                                    <p> {book.name} </p>
                                </td>
                                <td className="p-3">
                                    <p> {book.email} </p>
                                </td>
                                <td className="p-3">
                                    <p> {book.houseId} </p>
                                </td>
                                <td className="p-3">
                                    <p> {book.hname} </p>
                                </td>
                                <td className="p-3">
                                    <p> {book.address} </p>
                                </td>
                                <td className="p-3">
                                    <p> {book.city} </p>
                                </td>
                                <td className="p-3">
                                    <p> {book.contact}</p>

                                </td>
                                <td className="p-3 text-right">
                                    <span className="ml-2 px-3 py-1 font-semibold rounded-md  text-gray-900">
                                        <button onClick={() => handleDelete(book._id)} className="hover:bg-red-400 hover:text-white p-2 rounded-lg text-red-500 font-bold">
                                            Remove
                                        </button>
                                    </span>
                                </td>
                            </tr>)}
                </tbody>
            </table>
        </div>

    );
};

export default RenterDashboard;