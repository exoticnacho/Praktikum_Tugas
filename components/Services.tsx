export default function Services() {
    const services = [
        {
            title: "UI/UX Design",
            desc: "User-centric interfaces that are intuitive, engaging, and visually stunning.",
            icon: "🎨"
        },
        {
            title: "Web Development",
            desc: "Robust, scalable, and high-performance websites built with modern technologies.",
            icon: "💻"
        },
        {
            title: "Brand Identity",
            desc: "Crafting unique brand voices and visual identities that resonate with your audience.",
            icon: "✨"
        }
    ];

    return (
        <section id="services" className="py-5 position-relative">
            <div className="container py-5">
                <div className="row mb-5 text-center">
                    <div className="col-12">
                        <h2 className="display-4 fw-bold mb-3">Our Expertise</h2>
                        <p className="text-muted lead">Solutions tailored to your digital needs</p>
                    </div>
                </div>

                <div className="row g-4">
                    {services.map((service, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="glass-card p-5 h-100 text-center">
                                <div className="display-4 mb-4">{service.icon}</div>
                                <h3 className="h4 fw-bold mb-3">{service.title}</h3>
                                <p className="text-muted mb-4">{service.desc}</p>
                                <a href="#" className="text-secondary text-decoration-none fw-bold">Learn More &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
