export default function Card({ data }) {
    return (
        <>
            <div className="col-md-4">
                <div className="card bg-dark p-2">
                    <img src={data.imgSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-info text-white mt-2">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}