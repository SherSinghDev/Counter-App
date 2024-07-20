import { useState } from "react"

export default function Contact() {
    let [data, setData] = useState({
        email: '',
        password: '',
        address: '',
        address2:'',
        city:'',
        state:'',
        zip:''

    })

    function eventHandler(e) {
        let { name, value } = e.target
        // setData(setall => {
        //     return {
        //         ...setall,
        //         [name]: value
        //     }
        // })
        setData({...data,[name]:value})  
    }
    function onsubmitHandler(e){
        e.preventDefault();
        console.log(data)
    }
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                            <div className=" bg-super p-0">
                                <form className="row g-3 p-5" onSubmit={onsubmitHandler}>
                                    <h1 className="text-center mb-2" style={{ color: "greenyellow" }}>Contact Us</h1>
                                    <div className="col-md-6 ">
                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" name="email" onChange={(e)=>setData({...data, email:e.target.value})} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" onChange={eventHandler} name="password" value={data.password} />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" name="address" onChange={eventHandler} placeholder="1234 Main St" value={data.address} />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="address2" onChange={eventHandler} value={data.address2} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputCity" className="form-label">City</label>
                                        <input type="text" className="form-control" id="inputCity" name="city" onChange={eventHandler} value={data.city} />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputState" className="form-label">State</label>
                                        <select id="inputState" name="state" onChange={eventHandler} className="form-select" value={data.state}>
                                            <option >Choose...</option>
                                            <option>Your State</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <label htmlFor="inputZip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" name="zip" onChange={eventHandler} value={data.zip} />
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-info text-white px-5 py-2">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}