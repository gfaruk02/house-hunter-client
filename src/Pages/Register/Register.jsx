import { useState } from "react";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Register = () => {
	const [showPassword, setShowPassword] = useState(false)
	const handleRegister = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const photo = form.photo.value;
		const password = form.password.value;
		console.log(name, email, photo, password);

		// setSuccess('')
		if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)) {
			Swal.fire({
				title: 'Error!',
				text: 'Password Minimum 6 characters, at least one uppercase letter, one number and one special character:',
				icon: 'error',
				confirmButtonText: 'Cool'
			})
		}
	}
	return (
		<div>
			<section className="bg-gray-800">
						<div className="flex flex-col max-w-md rounded-md sm:p-10 bg-gray-900 text-gray-800 mx-auto">
							<div className=" text-center">
								<h1 className=" text-4xl font-bold text-gray-100">Register</h1>
							</div>
							<form onSubmit={handleRegister} className="card-body">
								<div className="form-control">
									<label className="label">
										<span className=" text-gray-100 label-text">Full Name</span>
									</label>
									<input name='name' type="text" placeholder="Enter Your Full Name" className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className=" text-gray-100 label-text">Email</span>
									</label>
									<input name='email' type="email" placeholder="ex:- faruk@gmail.com" className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className=" text-gray-100 label-text">Photo Url</span>
									</label>
									<input name='photo' type="text" placeholder="Enter Your Photo Url" className="input input-bordered" required />
								</div>
								<div className="form-control">
									<label className="label">
										<span className=" text-gray-100 label-text">Password</span>
									</label>
									<div className='flex items-center relative'>
										<input name='password' type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered w-full" required />
										<span className=" text-gray-100  absolute right-2" onClick={() => setShowPassword(!showPassword)}>
											{
												showPassword ? <FaEyeSlash className="  text-green-400 text-lg"></FaEyeSlash> : <FaEye className=" text-green-700 text-lg"></FaEye>
											}
										</span>
									</div>
								</div>
								<div className="form-control mt-4">
									<button className="btn btn-primary  hover:bg-green-400 bg-green-800 text-white font-bold">Register</button>
								</div>
							</form>
							<div className='text-gray-200 pl-9 mb-5 '>
            <p>You Have an Account? Please <Link to='/login' className='text-green-700 font-bold'> Log In </Link></p>
          </div>
						</div>
			</section>
		</div>
	);
};

export default Register;