import { Link } from "react-router-dom";

export default function MainContent({ head, btnText , color, fontFamily,paraColor}) {
    let styles = {
        boxShadow: `0 0 6px 4px ${color},0 0 6px 4px ${color} inset`
    }
    let paraStyle = {
        fontFamily: fontFamily,
        color: paraColor
    }
    return (
        <>
            <div className="main-content" style={styles}>
                <h1>{head}</h1>
                <p style={paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae quibusdam vel cumque. Ex laboriosam libero veritatis labore corporis? Nemo commodi saepe suscipit, magnam molestiae animi quod aspernatur rem laudantium a ratione minima voluptas ipsam nesciunt quia voluptatem? Eaque illo, placeat repellendus nobis explicabo iure deserunt repudiandae iusto. Ducimus, maxime.</p>
                <button className="btn1">
                    <Link to={`/${btnText}`} className="btn-link"> {btnText} </Link>
                </button>
            </div>
        </>
    )
}