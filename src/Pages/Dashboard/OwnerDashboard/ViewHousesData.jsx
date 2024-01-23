import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ViewHousesData = () => {
	const [houses, setHouses] = useState();
    const url = `http://localhost:5000/houses?email=${user?.email}`
    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setHouses(data)
            })
    }, [url])
    // console.log(manageFood);
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
                fetch(`http://localhost:5000/houses/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = houses.filter(food => food._id !== _id);
                            setHouses(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div>

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
				houses?.map(house=><tr key={house._id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">
				<td className="p-3">
				<div className="avatar">
		<div className="mask mask-squircle w-12 h-12">
			<img src={house.picture} alt="Avatar Tailwind CSS Component" />
		</div>
		</div>
				</td>
				<td className="p-3">
					<p> { house.name} </p>
				</td>
				<td className="p-3">
					<p> { house.address} </p>
				</td>
				<td className="p-3">
					<p> { house.city} </p>
				</td>
				<td className="p-3">
					<p> { house.bedrooms } </p>
				</td>
				<td className="p-3">
					<p> { house.roomSize } </p>
				</td>
				<td className="p-3">
					<p> { house.bathrooms } </p>
				</td>
				<td className="p-3">
					<p> { house.date }</p>
		
				</td>
				<td className="p-3">
					<p>{house.rent} </p>
				</td>
				<td className="p-3 text-right">
					<p>{house.phone}</p>
				</td>
				<td className="p-3 text-right">
					<p>{house.description}</p>
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
			</tr>)
			}	
			</tbody>
		</table>
	</div>
</div>
        </div>
    );
};

export default ViewHousesData;