import React from 'react'
import '../App.css'

function Card({ title, desc , fun , img }) {
    return (
        <>
            <div className="card bg-base-100 border w-96 h-[30rem] shadow-sm">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{desc}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={fun}>Buy Now</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card