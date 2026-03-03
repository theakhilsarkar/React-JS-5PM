
export const Navbar = () => {
    return <>
        <nav className="navbar sticky-top bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand fw-bold fs-3" style={{ letterSpacing: 1 }} href="#"><span className="">theakhilsarkar</span><span className="text-primary">.</span></a>
                <div className="d-flex gap-3">
                    <a href="#" className="text-decoration-none">Home</a>
                    <a href="#" className="text-decoration-none">About</a>
                    <a href="#" className="text-decoration-none">Education</a>
                    <a href="#" className="text-decoration-none">Skills</a>
                    <a href="#" className="text-decoration-none">Projects</a>
                    <a href="#" className="text-decoration-none">Contact</a>
                </div>
            </div>
        </nav>
    </>
}