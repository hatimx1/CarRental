import Car from "./Car"
import data from "../data"

function Cars() {
    const caritem = data.map(e => {
        return(
            <Car 
                key={e.id}
                img={e.img}
                name={e.name}
                fuel={e.fuel}
                vitesse={e.vitesse}
                cons={e.cons}
                place={e.place}
                prix={e.prix}
            />
        )
    })

    return(
        <section className="bg-dark text-light py-5">
            <div className="container">
                <div className="ps-4">
                    <h3>Nos offres</h3>
                    <p className="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="row g-5">
                    {caritem}
                </div>
            </div>
        </section>
    )
}

export default Cars