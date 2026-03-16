function ContactUs() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen bg-[url('img/newBuild.JPG')] bg-center bg-cover flex items-center justify-center px-10">
                <div className="absolute inset-0 bg-white bg-opacity-70 z-0"></div>

                <div className="relative z-10 max-w-[1100px] w-full flex flex-col items-center text-center">
                    <div className="mb-8">
                        <h1 className="text-[3.5rem] text-black mb-2">
                            <i className="fas fa-phone-volume text-red-600 mr-2"></i> Contact Information
                        </h1>
                        <p className="text-[1.8rem]">Reach us for all enquiries</p>
                        <p className="text-[1.8rem]">
                            Udupi Taluk and District,<br /> Karnataka, India
                        </p>
                        <p className="text-[1.8rem]">
                            <strong>PIN:</strong> 576102
                        </p>
                        <p className="text-[1.8rem]">
                            <strong>Contact Numbers:</strong>
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Office */}
                        <div className="bg-white p-6 rounded-xl shadow-md w-[350px] transition hover:-translate-y-1 hover:shadow-lg hover:bg-blue-100">
                            <h3 className="text-2xl mb-2 text-gray-800">
                                <i className="fas fa-building text-blue-600 mr-2"></i> Office
                            </h3>
                            <a href="tel:+918202520359" className="text-lg text-black hover:text-blue-600 block my-1">
                                <i className="fas fa-phone mr-2 text-blue-600"></i>0820 - 2520359
                            </a>
                            <a href="tel:+918202530410" className="text-lg text-black hover:text-blue-600 block my-1">
                                <i className="fas fa-phone mr-2 text-blue-600"></i>0820 - 2530410
                            </a>
                        </div>

                        {/* Fax */}
                        <div className="bg-white p-6 rounded-xl shadow-md w-[350px] transition hover:-translate-y-1 hover:shadow-lg hover:bg-blue-100">
                            <h3 className="text-2xl mb-2 text-gray-800">
                                <i className="fas fa-fax text-blue-600 mr-2"></i> Fax
                            </h3>
                            <a href="tel:+918202530410" className="text-lg text-black hover:text-blue-600 block my-1">
                                <i className="fas fa-phone mr-2 text-blue-600"></i>0820 - 2530410
                            </a>
                        </div>

                        {/* Email */}
                        <div className="bg-white p-6 rounded-xl shadow-md w-[350px] transition hover:-translate-y-1 hover:shadow-lg hover:bg-blue-100">
                            <h3 className="text-2xl mb-2 text-gray-800">
                                <i className="fas fa-envelope text-blue-600 mr-2"></i> E-mail
                            </h3>
                            <a href="mailto:principal_mgm@yahoo.co.in" className="text-lg text-black hover:text-blue-600 block my-1">
                                principal_mgm@yahoo.co.in
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="px-5 py-10 text-center">
                <h2 className="text-3xl text-gray-900 mb-2">Our Location</h2>
                <p className="text-xl text-gray-700 mb-8">
                    Visit us at our campus in Udupi, Karnataka:
                </p>
                <div className="max-w-full mx-auto rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.0700921552516!2d74.76380090792652!3d13.345915986950684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb5bfb1466e7%3A0xf0d4b8e58c838485!2sMahathma%20Gandhi%20Memorial%20(MGM)%20College!5e0!3m2!1sen!2sin!4v1755338012887!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </>
    );
}

export default ContactUs;