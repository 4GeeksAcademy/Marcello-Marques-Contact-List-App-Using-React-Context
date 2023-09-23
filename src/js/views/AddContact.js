import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [name,setName]=useState("")
	const [email,setEmail]=useState("")
	const [phone,setPhone]=useState("")
	const [address,setAddress]=useState("")
	console.log(store,"STORE ADD CONTACT")
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input 
						type="text" 
						className="form-control" 
						placeholder="Full Name" 
						value={
							store.upDateContactInfo.full_name
						}
						onChange={(event)=> setName (event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input 
						type="email" 
						className="form-control" 
						placeholder="Enter email" 
						value={
							store.upDateContactInfo.email
						}
						onChange={(event)=> setEmail (event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input 
						type="phone" 
						className="form-control" 
						placeholder="Enter phone"
						value={
							store.upDateContactInfo.phone
						} 
						onChange={(event)=> setPhone (event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input 
						type="text" 
						className="form-control" 
						placeholder="Enter address" 
						value={
							store.upDateContactInfo.address
						}
						onChange={(event)=> setAddress (event.target.value)}
						/>
					</div>

					<button 
					onClick={()=>{
						actions.newContact(name,email,address,phone)
						actions.getContacts()
					} 
				}
					type="button"
					className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};