import React from "react";

function ItemsDisplay({items, deleteItem}) {
    const showItem = (item) => {
        return(
            <tr>
                <th scope="row"> {item.id} </th>
                <td> {item.name} </td>
                <td> {item.price} </td>
                <td> {item.type} </td>
                <td> {item.brand} </td>
                <td><button className="btn btn-danger" onClick={() => deleteItem(item) } >
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
    
    return <div className="container">
        <div className="row"><h2>Items</h2></div>
        <div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td scope="col">Id</td>
                        <td scope="col">Name</td>
                        <td scope="col">Price</td>
                        <td scope="col">Type</td>
                        <td scope="col">Brand</td>
                        <td scope="col">Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {items.map((showItem))}
                </tbody>
            </table>
            
        </div>
    </div>
}

export default ItemsDisplay