export default function Testimonials() {
    return (
        <section className="py-5">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <h2 className="display-4 fw-bold mb-4">Trusted by <br /><span className="text-gradient">Visionaries</span></h2>
                        <p className="text-muted lead mb-4">
                            Don't just take our word for it. Here's what our partners have to say about working with Lumina.
                        </p>
                        <div className="d-flex gap-4">
                            <div>
                                <h3 className="fw-bold mb-0">50+</h3>
                                <p className="text-muted small">Projects Delivered</p>
                            </div>
                            <div>
                                <h3 className="fw-bold mb-0">98%</h3>
                                <p className="text-muted small">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="glass-card p-5 position-relative">
                            <div className="position-absolute top-0 start-0 translate-middle ms-5 mt-5">
                                <span className="display-1 text-secondary opacity-25" style={{ lineHeight: 0 }}>"</span>
                            </div>
                            <p className="fs-5 mb-4 position-relative z-2 fst-italic">
                                The team at Lumina transformed our vague ideas into a digital masterpiece. Their attention to detail and commitment to aesthetic excellence is unmatched.
                            </p>
                            <div className="d-flex align-items-center gap-3">
                                <div className="rounded-circle bg-secondary" style={{ width: '50px', height: '50px' }}></div>
                                <div>
                                    <h5 className="fw-bold mb-0">Alex Morgan</h5>
                                    <p className="text-muted small mb-0">CEO, TechFlow Inc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
