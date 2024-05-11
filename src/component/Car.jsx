function Car(prop) {
    return(
        <div className="col-lg-6">
                        <div className="card--grid d-sm-flex align-items-center p-3">
                            <div className="col-sm-7">
                                <img src={prop.img} className="img-fluid" />
                            </div>

                            <div className="col-sm-5 p-3">
                                <h5 className="mb-3">{prop.name}</h5>

                                <div>Carburant: {prop.fuel}</div>
                                <div>vitesse: {prop.vitesse}</div>
                                <div>Consommations: {prop.cons}</div>
                                <div>{prop.place} Places</div>
                                <div className="mt-2"><span className="car--prix">{prop.prix}</span> DH / Joure</div>
                            </div>
                        </div>
                    </div>
    )
}

export default Car