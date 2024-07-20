export default function Content({btnText,imgSrc,head}) {
    return (
        <>
            {/* <h1 style={{ textAlign: "center" }} className='text-primary'>Hello I am Home Page</h1> */}
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
                                {head}
                                <p className="para">Our Services are the best example of the human ability.<br/>
                                So we want you to chekcout our all services. Please visit our ne services on the services pge and explore our skills please visit our about page.
                                </p>
                                <button className="btn btn-info text-white px-5 py-2 my-2">{btnText}</button>
                            </div>
                            <div className="col-md-6">
                                <img src={imgSrc} alt={imgSrc} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

