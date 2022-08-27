export default function About(){
    return(
        <>
        <div className="preloader">
            <div className="spinner"></div>
        </div>
    <header className="header-area">
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 d-md-flex">
                        <h6 className="mr-3"><span className="mr-2"><i className="fa fa-mobile"></i></span> call us now! +1 305 708 2563</h6>
                        <h6 className="mr-3"><span className="mr-2"><i className="fa fa-envelope-o"></i></span> medical@example.com</h6>
                        <h6><span className="mr-2"><i className="fa fa-map-marker"></i></span> Find our Location</h6>
                    </div>
                    <div className="col-lg-3">
                        <div className="social-links">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="header" id="home">
            <div className="container">
                <div className="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                        <a href="index.html"><img src="assets/images/logo/logo.png" alt="" title="" /></a>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="index.html">Home</a></li>
                            <li><a href="departments.html">departments</a></li>
                            <li><a href="doctors.html">doctors</a></li>
                            <li className="menu-has-children"><a href="">Pages</a>
                                <ul>
                                    <li><a href="about.html">about us</a></li>
                                    <li><a href="elements.html">elements</a></li>
                                </ul>
                            </li>
                            <li className="menu-has-children"><a href="">blog</a>
                                <ul>
                                    <li><a href="blog-home.html">blog home</a></li>
                                    <li><a href="blog-details.html">blog details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <section className="banner-area other-page">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1>About Us</h1>
                    <a href="index.html">Home</a> <span>|</span> <a href="about.html">About Us</a>
                </div>
            </div>
        </div>
    </section>
    <section className="welcome-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 align-self-center">
                    <div className="welcome-img">
                        <img src="assets/images/welcome.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="welcome-text mt-5 mt-lg-0">
                        <h2>Welcome to our clinic</h2>
                        <p className="pt-3">Subdue whales void god which living don't midst lesser yielding over lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were.</p>
                        <p>Subdue whales void god which living don't midst lesser yielding over lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were the boring.</p>
                        <a href="#" className="template-btn mt-3">learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="patient-area section-padding3">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-top text-center">
                        <h2>Patient are saying</h2>
                        <p>Green above he cattle god saw day multiply under fill in the cattle fowl a all, living, tree word link available in the service for subdue fruit.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5">
                    <div className="single-patient mb-4">
                        <img src="assets/images/patient1.png" alt=""/>
                            <h3>daren jhonson</h3>
                            <h5>hp specialist</h5>
                            <p className="pt-3">Elementum libero hac leo integer. Risus hac road parturient feugiat. Litora cursus hendrerit bib elit Tempus inceptos posuere metus.</p>
                    </div>
                    <div className="single-patient">
                        <img src="assets/images/patient2.png" alt=""/>
                            <h3>black heiden</h3>
                            <h5>hp specialist</h5>
                            <p className="pt-3">Elementum libero hac leo integer. Risus hac road parturient feugiat. Litora cursus hendrerit bib elit Tempus inceptos posuere metus.</p>
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-1 align-self-center">
                    <div className="appointment-form text-center mt-5 mt-lg-0">
                        <h3 className="mb-5">appointment now</h3>
                        <form action="#">
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Your Name'" required/>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Your Email'" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" id="datepicker" placeholder="Date" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Date'" required/>
                            </div>
                            <div className="form-group">
                                <textarea name="message" cols="20" rows="7"  placeholder="Message" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Message'" required></textarea>
                            </div>
                            <a href="#" className="template-btn">appointment now</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer className="footer-area section-padding">
        <div className="footer-widget">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-3">
                        <div className="single-widget-home mb-5 mb-lg-0">
                            <h3 className="mb-4">top products</h3>
                            <ul>
                                <li className="mb-2"><a href="#">managed website</a></li>
                                <li className="mb-2"><a href="#">managed reputation</a></li>
                                <li className="mb-2"><a href="#">power tools</a></li>
                                <li><a href="#">marketing service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="single-widget-home mb-5 mb-lg-0">
                            <h3 className="mb-4">newsletter</h3>
                            <p className="mb-4">You can trust us. we only send promo offers, not a single.</p>
                            <form action="#">
                                <input type="email" placeholder="Your email here" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Your email here'" required/>
                                    <button type="submit" className="template-btn">subscribe now</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-3 offset-xl-1 col-lg-3">
                        <div className="single-widge-home">
                            <h3 className="mb-4">instagram feed</h3>
                            <div className="feed">
                                <img src="assets/images/feed1.jpg" alt="feed"/>
                                <img src="assets/images/feed2.jpg" alt="feed"/>
                                <img src="assets/images/feed3.jpg" alt="feed"/>
                                <img src="assets/images/feed4.jpg" alt="feed"/>
                                <img src="assets/images/feed5.jpg" alt="feed"/>
                                <img src="assets/images/feed6.jpg" alt="feed"/>
                                <img src="assets/images/feed7.jpg" alt="feed"/>
                                <img src="assets/images/feed8.jpg" alt="feed"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <span>
</span>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="social-icons">
                            <ul>
                                <li> <a href="#"> <i className="fa fa-facebook"> </i> </a> </li>
                                <li> <a href="#"> <i className="fa fa-twitter"> </i> </a> </li>
                                <li> <a href="#"> <i className="fa fa-dribbble"> </i> </a> </li>
                                <li> <a href="#"> <i className="fa fa-behance"> </i> </a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
)
}