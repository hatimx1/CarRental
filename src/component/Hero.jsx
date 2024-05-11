function Hero() {
    return(
        <section className="hero-sec d-flex align-items-center justify-content-start text-light">
            <div className="overlay"></div>
            <div className="container">
                <div className="p-5 col-md-8">
                    <h1>Location de voiture en <span className="text-warning">
                        Kenitra
                        </span></h1>
                    <p className="lead pt-2">Si vous avez besoin d’un véhicule de location en Kenitra pour le plaisir ou pour les affaires, CarRental a l’offre et le véhicule dont vous avez besoin.</p>
                </div>
                <div className="col-md-4"></div>
            </div>
        </section>
    )
}

export default Hero