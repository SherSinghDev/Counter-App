import Card from "./Card";
import fullData from "./CardInfo";

export default function Services() {
    return (
        <>
            {/* <h1 className="text-primary text-center">Hello I am Services Page</h1> */}
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row g-5">
                            {fullData.map((data, ind) => <Card key={ind} data={data} />)}
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}