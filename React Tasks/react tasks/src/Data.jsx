export default function Data() {
    let data = [
        { name: "Sumit", address: "Pune", email: "sumit3232@gmail.com", mob: [8474950220, 8965321475, 7845126585, 7896541235] },
        { name: "Suresh", address: "Madhya Paradesh", email: "suresh3232@gmail.com", mob: [8474950220, 8965321475, 7845126585, 7896541235] },
        { name: "PK", address: "Uttar Pradesh", email: "pk3232@gmail.com", mob: [8474950220, 8965321475, 7845126585, 7896541235] },
        { name: "Felis Leo", address: "Uttar Pradesh", email: "felis3232@gmail.com", mob: [8474950220, 8965321475, 7845126585, 7896541235] }
    ]

    // let hello = data.find((item)=>{
    //     return item.name=="PK"
    // })
    // console.log(hello)
    return (
        <>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Mobiles</th>
                </thead>
                {data.map((item) => {
                    return (
                        <>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.email}</td>
                                <td>
                                    <table className="nested-table">
                                        {item.mob.map(mob => {
                                            return (
                                                <tr>
                                                    <td>{mob}</td>
                                                </tr>
                                            )
                                        })}
                                    </table>
                                </td>
                            </tr>
                        </>
                    )
                })}
            </table>
                {
                    data.find((item)=>{
                        return item.name=="PK"
                    }).address
                }
            
        </>
    )
}
