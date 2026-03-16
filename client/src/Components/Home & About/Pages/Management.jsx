// Image imports from src/TrustImg
const ballal = "/assets/Home & About/TrustImg/ballal.jpg";
const satish = "/assets/Home & About/TrustImg/satish.jpg";
const narayana = "/assets/Home & About/TrustImg/narayana.jpg";
const ranjan = "/assets/Home & About/TrustImg/ranjan.jpg";
const shailaja = "/assets/Home & About/TrustImg/shailaja.jpg";
const sky4 = "/assets/Home & About/TrustImg/sky4.jpg";
const vanitha = "/assets/Home & About/TrustImg/vanitha.jpg";
const vasanth = "/assets/Home & About/TrustImg/vasanth.jpg";
const vasu = "/assets/Home & About/TrustImg/vasu.jpg";
const Venkatesh = "/assets/Home & About/TrustImg/Venkatesh.jpg";
const vp = "/assets/Home & About/TrustImg/vp.jpg";


const DemoPage = () => {
    const admins = [
        { name: "Sri T. Satish U Pai", title: "President", image: satish },
        { name: "Dr. Narayana Sabhahit", title: "Member", image: narayana },
        { name: "Dr. Ranjan R Pai", title: "Member", image: ranjan },
        { name: "Mr. H. S. Ballal", title: "Member", image: ballal },
        { name: "Lt. Gen. (Dr) M.D. Venkatesh", title: "Member", image: Venkatesh },
        { name: "Prof. Vanitha Maiya", title: "Principal/Secretary", image: vanitha },
    ];

    const collegeCouncil = [
        { name: 'Prof. Vanitha Maiya', qual: 'M.Com', image: vanitha },
        { name: 'Mrs. Shailaja H', qual: 'M.Phil., M.Sc.', image: shailaja },
        { name: 'Dr. Vasumathi Bhat', qual: 'M.A., Ph.D', image: vasu },
        { name: 'Dr. Vishwanath Pai', qual: 'B.E (C.S.), CNE, M.Sc. (IT), M.Phil., Ph.D.', image: vp },
        { name: 'Dr. Puthi Vasanth Kumar', qual: 'M.A., M.Phil., Ph.D.', image: vasanth },
    ];

    return (
        <section className="relative px-6 py-12 overflow-hidden">
            {/* Blurred Background */}
            <div
                className="absolute inset-0 bg-cover bg-center blur-sm"
                style={{ backgroundImage: `url(${sky4})` }}
            ></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto text-white space-y-10">
                {/* Committee Text */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-blue-900">M.G.M. Management Committee</h1>
                    <p className="text-sm leading-relaxed max-w-3xl mx-auto text-gray-800">
                        The Mahatma Gandhi Memorial College is sponsored and administered by the Academy of General Education, Manipal. 
                        <p className="text-sm leading-relaxed max-w-3xl mx-auto text-gray-800"> The management of the College is vested in the Mahatma Gandhi College Trust, a registered body, having full control
                        over the affairs of the institution.</p>
                    </p>
                    
                    <div className="border-t border-blue-700 my-8"></div>
                </div>

                {/* Reusable Card Section */}
                {[
                    { title: "College Trust", data: admins, isCouncil: false },
                    { title: "Governing Council", data: admins, isCouncil: false },
                    { title: "College Council", data: collegeCouncil, isCouncil: true },
                ].map((section, idx) => (
                    <div key={idx}>
                        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-900">{section.title}</h2>
                        <div className="relative overflow-x-auto whitespace-nowrap py-4 ">
                            <div className="absolute bottom-0 left-0 right-0 h-6 backdrop-blur-md bg-white/10 z-0 pointer-events-none"></div>
                            <div className="relative z-10 flex space-x-6 px-2">
                                {section.data.map((person, index) => (
                                    <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 w-[350px] flex-shrink-0">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="mx-auto w-32 h-32 object-cover rounded-full border-4 border-blue-300"
                                        />
                                        <h3 className="text-xl font-semibold text-blue-700">{person.name}</h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            {section.isCouncil ? person.qual : person.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DemoPage;