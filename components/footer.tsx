export default function Footer() {
    return (
        <footer className="py-5 mt-5" style={{ borderTop: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.3)' }}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-4">
                        <h3 className="fw-bold text-white mb-3">Lumina<span className="text-primary">.</span></h3>
                        <p className="text-muted">
                            We craft digital experiences that merge art with technology. Elevate your brand with our premium design solutions.
                        </p>
                    </div>
                    <div className="col-md-2 offset-md-2">
                        <h5 className="text-white mb-3">Company</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-white">About</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-white">Careers</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-white mb-3">Services</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-white">UI/UX Design</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-white">Web Development</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-white">Branding</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-white mb-3">Social</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-white">Instagram</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-white">Twitter</a></li>
                            <li className="mb-2"><a href="#" className="text-muted text-decoration-none hover-white">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5 pt-4 border-top border-secondary" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
                    <div className="col-12 text-center text-muted">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Lumina Creative. All rights reserved.</p>
                        <p className="mb-0 mt-1">535240111 by Carlos</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}