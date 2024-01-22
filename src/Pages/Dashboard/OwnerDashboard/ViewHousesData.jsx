
const ViewHousesData = ({house}) => {
    const {name, address, city,bedrooms,roomSize,bathrooms,picture,date,rent,phone,description }=house;
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
				<tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
					<td className="p-3">
                    <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={picture} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
					</td>
					<td className="p-3">
						<p> { name} </p>
					</td>
					<td className="p-3">
						<p> { address} </p>
					</td>
					<td className="p-3">
						<p> { city} </p>
					</td>
					<td className="p-3">
						<p> { bedrooms } </p>
					</td>
					<td className="p-3">
						<p> { roomSize } </p>
					</td>
					<td className="p-3">
						<p> { bathrooms } </p>
					</td>
					<td className="p-3">
						<p> { date }</p>
			
					</td>
					<td className="p-3">
						<p>{rent} </p>
					</td>
					<td className="p-3 text-right">
						<p>{phone}</p>
					</td>
					<td className="p-3 text-right">
						<p>{description}</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							<span>Edit</span>
						</span>
						<span className="ml-2 px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
							<span>Delete</span>
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
        </div>
    );
};

export default ViewHousesData;