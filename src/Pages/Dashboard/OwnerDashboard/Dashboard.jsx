import { useLoaderData } from "react-router-dom";
import AddHouse from "./AddHouse";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
// import ViewHousesData from "./ViewHousesData";
// import { useState } from "react";
// import { useState } from "react";


const Dashboard = () => {
	const houseData = useLoaderData()
	const [houses, setHouses] = useState([]);
	console.log(houses);
	useEffect(() => {
		const userEmail = localStorage.getItem('email');
		const result = houseData.find((user) => user.email === userEmail);
		if (result) {
			setHouses([result]);
		}
	}, [houseData])
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
				fetch(`https://house-hunter-server-rho-nine.vercel.app/houses/${_id}`, {
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
							//   const remaining = houses.filter(house => house._id !== _id);
							//   setHouses(remaining);
						}
					})
			}
		})
	}
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
					<div className="container p-2 mx-auto sm:p-4 text-gray-100">
						<h2 className="mb-4 text-2xl font-semibold leadi text-gray-900"> View All Houses</h2>
						<div className="overflow-x-auto">
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
										<th className="p-3">Picture</th>
										<th className="p-3">Name</th>
										<th className="p-3">Address</th>
										<th className="p-3">City</th>
										<th className="p-3">Bedrooms</th>
										<th className="p-3">RoomSize</th>
										<th className="p-3">Bathrooms</th>
										<th className="p-3">Date</th>
										<th className="p-3">Rent</th>
										<th className="p-3">Phone</th>
										<th className="p-3">Description</th>
										<th className="p-3">Status</th>
									</tr>
								</thead>
								<tbody>
									{
										houses?.map(house =>
											<tr key={house._id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">
												<td className="p-3">
													<div className="avatar">
														<div className="mask mask-squircle w-12 h-12">
															<img src={house.picture} alt="Avatar Tailwind CSS Component" />
														</div>
													</div>
												</td>
												<td className="p-3">
													<p> {house.name} </p>
												</td>
												<td className="p-3">
													<p> {house.address} </p>
												</td>
												<td className="p-3">
													<p> {house.city} </p>
												</td>
												<td className="p-3">
													<p> {house.bedrooms} </p>
												</td>
												<td className="p-3">
													<p> {house.roomSize} </p>
												</td>
												<td className="p-3">
													<p> {house.bathrooms} </p>
												</td>
												<td className="p-3">
													<p> {house.date}</p>

												</td>
												<td className="p-3">
													<p>{house.rent} </p>
												</td>
												<td className="p-3 text-right">
													<p>{house.phone}</p>
												</td>
												<td className="p-3 text-right">
													<p>{house.description.slice(0, 15)}</p>
												</td>
												<td className="p-3 text-right">
													<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
														<span>Edit</span>
													</span>
													<span className="ml-2 px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
														<button onClick={() => handleDelete(house._id)} className="hover:bg-red-400 hover:text-white p-2 rounded-lg text-red-500 font-bold">
															X
														</button>
													</span>
												</td>
											</tr>)}
								</tbody>
							</table>
						</div>
					</div>
					{/* {
houses?.map(house=> <ViewHousesData key={house._id} house={house}> </ViewHousesData>)
  } */}
				</div>

				<input type="radio" name="my_tabs_2" role="tab" className="tab text-xl text-orange-800 font-bold overflow-hidden" aria-label="Booking" />
				<div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Booking</div>
			</div>


		</div>
	);
};

export default Dashboard;