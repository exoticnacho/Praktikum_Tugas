export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-bg-glow animate-float"></div>
            <div className="hero-bg-glow-2 animate-float delay-200"></div>

            <div className="container text-center position-relative z-2">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <span className="badge rounded-pill bg-dark border border-secondary text-secondary mb-4 px-3 py-2 fade-in-up">
                            ✨ Redefining Digital Excellence
                        </span>
                        <h1 className="display-1 fw-bold mb-4 fade-in-up delay-100">
                            Crafting Digital <br />
                            <span className="text-gradient">Experiences That Matter</span>
                        </h1>
                        <p className="lead text-muted mb-5 mx-auto fade-in-up delay-200" style={{ maxWidth: '700px' }}>
                            We blend futuristic aesthetics with robust functionality to create stunning web solutions that captivate your audience and drive results.
                        </p>
                        <div className="d-flex gap-3 justify-content-center fade-in-up delay-300">
                            <a href="#contact" className="btn btn-primary-glow btn-lg">Start a Project</a>
                            <a href="#services" className="btn btn-outline-glow btn-lg">Explore Services</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
