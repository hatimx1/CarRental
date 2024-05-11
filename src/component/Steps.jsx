function Steps() {
    return(
        <section className="bg-dark text-light">
            <div className="container py-5">
                <div className="ps-4">
                    <h3 className="mb-2">Comment ça fonctionne?</h3>
                    <p className="lead mb-5">Étapes faciles pour commencer</p>
                </div>
                <div className="row g-5 row--cont">
                    <div className="col-md card--cont">
                        <div className="card p-2 card--body">
                            <div className="card-body">
                                <div className="h6 small-num">01.</div>
                                <h3 className="card-title">Select a car</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                                <div className="card--num">1</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md card--cont">
                        <div className="card p-2 card--body">
                            <div className="card-body">
                                <div className="h6 small-num">02.</div>
                                <h3 className="card-title">Fill up form</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                                <div className="card--num">2</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md card--cont">
                        <div className="card p-2 card--body">
                            <div className="card-body">
                                <div className="h6 small-num">03.</div>
                                <h3 className="card-title">Payment</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                                <div className="card--num">3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps