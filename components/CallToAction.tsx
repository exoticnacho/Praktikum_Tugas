export default function CallToAction() {
    return (
        <section id="contact" className="py-5 my-5">
            <div className="container">
                <div className="glass-card p-5 text-center position-relative overflow-hidden">
                    <div className="hero-bg-glow position-absolute top-50 start-50 translate-middle" style={{ width: '100%', height: '100%', opacity: 0.5 }}></div>

                    <div className="position-relative z-2 py-4">
                        <h2 className="display-4 fw-bold mb-4">Ready to Elevate Your Brand?</h2>
                        <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                            Let's collaborate to build something extraordinary. Reach out to us today and let's start the conversation.
                        </p>
                        <a href="mailto:hello@lumina.com" className="btn btn-primary-glow btn-lg px-5">Get in Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
