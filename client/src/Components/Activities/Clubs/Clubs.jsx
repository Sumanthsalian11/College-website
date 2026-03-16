import React, { useState } from "react";
// import Header from "../Header";
// import Footer from "../Footer";
import BackToTop from "../BackToTop";

// Import all images from assets folder
// Example imports; replace or add your actual images here

const vishwanathImg = "/assets/Activities/Clubs/vishwanath.jpg";
const anupamaImg = "/assets/Activities/Clubs/anupama.jpg";
const anilImg = "/assets/Activities/Clubs/anil.gif";
const vidyanathImg = "/assets/Activities/Clubs/vidyanath.jpg";
const puthiImg = "/assets/Activities/Clubs/puthi.jpg";
const arunImg = "/assets/Activities/Clubs/Aruna.gif";
const vasumathiImg = "/assets/Activities/Clubs/vasumathi.jpg";
const ashwiniImg = "/assets/Activities/Clubs/ashwini.jpg";
const subodhImg = "/assets/Activities/Clubs/Subhod.gif";
const vanithaImg = "/assets/Activities/Clubs/Vanitha.gif";
const veeraImg = "/assets/Activities/Clubs/Veera_Ida_Pinto.gif";
const noImg = "/assets/Activities/Clubs/noimag.jpg";
const rashmiImg = "/assets/Activities/Clubs/rashmi.jpg";
const rajamoorthyImg = "/assets/Activities/Clubs/rajmoorthy.jpg";
const adithiImg = "/assets/Activities/Clubs/adithi.jpg";
const ragvendraImg = "/assets/Activities/Clubs/ragvendra.jpg";
const rekhaImg = "/assets/Activities/Clubs/rekha.jpg";
const jyothsnaImg = "/assets/Activities/Clubs/jyothsna.jpg";

// Clubs data with images imported from assets
const clubs = [
  {
    name: "Commerce Club",
    convener: "Mr.Vikas Shetty",
    convenerImg: noImg,
    coConvener: "Mrs.Kavya B",
    coConvenerImg:noImg,
    description:
      "Offer students valuable opportunities to develop practical skills, expand their knowledge of business and finance, and build confidence in their abilities.",
  },
  {
    name: "IT Club",
    convener: "Dr.Vishwanath Pai M",
    convenerImg: vishwanathImg,
    coConvener: "Mrs.Anupama Ajith",
    coConvenerImg: anupamaImg,
    description:
      "Provides a platform for learning, collaboration, and skill development in various areas of information technology.",
  },
  {
    name: "Science Club",
    convener: "Mrs.Umadevi",
    convenerImg: noImg,
    coConvener: "Mrs.Vasavi",
    coConvenerImg: noImg,
    description:
      "It provides a platform for students to explore scientific concepts beyond the classroom, engage in hands-on activities, and participate in projects that enhance their scientific knowledge and skills.",
  },
  {
    name: "Arts Club",
    convener: "Mr.Chenna Poojary",
    convenerImg: noImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description:"Arts club provide a platform for students to explore their creative talents in various art forms like visual arts, performing arts, literature, and more.",
  },
  {
    name: "Fine Arts Club",
    convener: "Dr.Puthi Vasanth Kumar",
    convenerImg: puthiImg,
    coConvener: "Mrs.Spoorthy Fernandes",
    coConvenerImg: noImg,
    description: "Students can discover and engage with a wide range of artistic disciplines, including visual arts, performing arts, and literary arts.",
  },
  {
    name: "Yakshagana and Nataka Ranga",
    convener: "Mr.Ragavendra Thunga",
    convenerImg: ragvendraImg ,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Offer a creative outlet, boost confidence, and provide a strong sense of identity rooted in tradition",
  },
  {
    name: "Eco club",
    convener: "Dr.Maneetha",
    convenerImg: noImg,
    coConvener: "Mrs.Shruthi",
    coConvenerImg: noImg,
    description: "Promote environmental awareness, organize hands-on activities like tree planting and waste management, and educate students on eco-friendly practices.",
  },
  {
    name: "Literary Forum",
    convener: "Dr.Vasumathi Bhat",
    convenerImg: vasumathiImg,
    coConvener: "Mrs.Ashwini Acharya",
    coConvenerImg: ashwiniImg,
    description: "Enhances communication skills, fostering creativity, and providing a platform for intellectual discussion and social interaction.",
  },
  {
    name: "Sports Club",
    convener: "Mrs.Jayashree Nayak",
    convenerImg: noImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Encourage regular physical activity, helping students maintain a healthy lifestyle and combat the sedentary nature of college life.",
  },
];

// Cells data
const cells = [
  {
    name: "Teaching and Learning Centre",
    convener: "Mr.Arun Kumar B",
    convenerImg: arunImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Focuses on enhancing pedagogical practices, faculty development, and improving the overall learning experience for students.",
  },
  {
    name: "Placement Cell",
    convener: "Dr.Vishwanath Pai M",
    convenerImg: vishwanathImg,
    coConvener: "Mrs.Rashmi",
    coConvenerImg: rashmiImg,
    description: "Facilitates career opportunities for students by organizing recruitment drives, internships, and providing training for interviews and resume building.",
  },
  {
    name: "Skill Development Cell",
    convener: "Mr.Rajmoorthy Rao",
    convenerImg: rajamoorthyImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Aims to equip students with essential life and professional skills beyond academics, through workshops, training programs, and certifications.",
  },
  {
    name: "Alumini Cell",
    convener: "Mrs.Adithi",
    convenerImg: adithiImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Maintains connections with former students, fostering a network for mentorship, career guidance, and support for current students and the institution.",
  },
  {
    name: "Research Cell",
    convener: "Dr.Vasumathi Bhat",
    convenerImg: vasumathiImg,
    coConvener: "Dr.Vijayalakshmi",
    coConvenerImg: noImg,
    description: "Promotes and supports research activities among faculty and students, including providing resources, guidance on projects, and facilitating publications.",
  },
  {
    name: "Human Rights and Religious Harmony Cell",
    convener: "Mr.Subodh Pai",
    convenerImg: subodhImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Works to ensure a safe, inclusive, and respectful environment within the college by addressing issues related to human rights and promoting inter-religious understanding and harmony.",
  },
  {
    name: "Scholarship Counselling Cell",
    convener: "Mr.Vidhyanath",
    convenerImg: vidyanathImg,
    coConvener: "Mrs.Asha Kedilaya",
    coConvenerImg: noImg,
    description: "Provides information and guidance to students regarding various scholarship opportunities, assisting them with applications and eligibility criteria.",
  },
];

// Committees data
const committees = [
  {
    name: "Anti-Ragging Committee",
    convener: "Principal",
    convenerImg: noImg,
    coConvener: "Staff Council(Members)",
    coConvenerImg: noImg,
    description: "Works to prevent and eliminate ragging and aims to create a safe and respectful environment.",
  },
  {
    name: "SC and ST Cell",
    convener: "Mr.Anil Kumar",
    convenerImg: anilImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Addresses the specific needs and concerns of students belonging to Scheduled Castes (SC) and Scheduled Tribes (ST), ensuring their welfare and addressing any issues they may face.",
  },
  {
    name: "Student Grievance and Counselling Cell",
    convener: "Mrs.Vanitha ",
    convenerImg: vanithaImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Provides a platform for students to voice their grievances and offers counseling services to help them cope with academic, personal, or emotional challenges.",
  },
  {
    name: "Women's Harassment Redressal Cell",
    convener: "Mrs.Veera Ida Pinto",
    convenerImg: veeraImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Specifically addresses complaints of harassment faced by female students and staff, ensuring a safe and equitable environment for women on campus.",
  },
  {
    name: "Women's Counsellor",
    convener: "Mrs.Rekha N Chandra",
    convenerImg: rekhaImg,
    coConvener: "Mrs.Jyothsna",
    coConvenerImg: jyothsnaImg,
    description: "A dedicated counsellor provides support and guidance to female students regarding various issues, including academic stress, personal problems, or mental health concerns.",
  },
  {
    name: "Women's Welfare Cell",
    convener: "Mrs.Jyothsna",
    convenerImg: jyothsnaImg,
    coConvener: "---",
    coConvenerImg: noImg,
    description: "Focuses on promoting the overall well-being and welfare of female students and staff, often organizing activities and initiatives related to health, safety, and empowerment.",
  },
];

function Section({ items, sectionTitle, onRowClick }) {
  return (
    <div className="mb-10">
      <h3 className="mt-7 mb-3 text-blue-900 font-bold text-2xl underline decoration-4 ">{sectionTitle}</h3>
      <div className="overflow-x-auto rounded-xl border border-gray-800 shadow">
        <table className="min-w-full table-fixed bg-white border-collapse">
          <thead>
            <tr>
              <th className="w-1/3 bg-blue-900 text-white text-xl text-center font-bold py-3 px-5 border-b border-gray-400 rounded-tl-xl">
                Name
              </th>
              <th className="w-1/3 bg-blue-900 text-white text-xl text-center font-bold py-3 px-5 border-b border-gray-400 ">
                Convener
              </th>
              <th className="w-1/3 bg-blue-900 text-white text-xl text-center font-bold py-3 px-5 border-b border-gray-400 rounded-tr-xl">
                Co-Convener
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr
                key={idx}
                onClick={() => onRowClick(item)}
                className={`
                  cursor-pointer
                  transition
                  ${idx % 2 === 0 ? "bg-white" : "bg-blue-50"}
                  hover:bg-yellow-100
                `}
              >
                <td className="w-1/3 py-2 px-4 text-lg font semibold border-b border-gray-200">{item.name}</td>
                <td className="w-1/3 py-2 px-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 min-h-[40px]">
                    {item.convenerImg && (
                      <img
                        src={item.convenerImg}
                        alt={item.convener}
                        className="w-12 h-12 object-cover rounded-full border-2 border-blue-600 bg-white"
                      />
                    )}
                    <span className="text-lg font semibold">{item.convener}</span>
                  </div>
                </td>
                <td className="w-1/3 py-2 px-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 min-h-[40px]">
                    {item.coConvenerImg && (
                      <img
                        src={item.coConvenerImg}
                        alt={item.coConvener}
                        className="w-12 h-12 object-cover rounded-full border-2 border-blue-600 bg-white"
                      />
                    )}
                    <span className="text-lg font semibold">{item.coConvener}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Clubs() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <>
      {/* <Header /> */}
      <div className="max-w-5xl mx-auto mt-10 mb-13 bg-white rounded-2xl shadow-xl p-9">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-blue-900 bg-blue-200 rounded-lg py-4 px-3 mb-7 border border-blue-200 shadow">
            Activities: Clubs, Cells and Committees
          </h2>
          <div className="text-2xl text-blue-900 mt-5 font-normal tracking-wide">
            Discover the vibrant student life at MGM College
            <br />
            Explore the clubs, cells and committees with their dedicated conveners and co-conveners driving excellence and engagement.
          </div>
        </div>
        <Section items={clubs} sectionTitle="Clubs" onRowClick={setSelectedItem} />
        <Section items={cells} sectionTitle="Cells" onRowClick={setSelectedItem} />
        <Section items={committees} sectionTitle="Committees" onRowClick={setSelectedItem} />

        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/0 backdrop-blur-sm"
            style={{backdropFilter: 'blur(4px)'}}
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-blue-300 rounded-xl p-8 shadow-xl border border-gray-400 min-w-[800px] max-w-xs text-center animate-modal-in"
              onClick={(e) => e.stopPropagation()}
              style={{ animation: "modalIn 0.26s" }}
            >
              <h3 className="text-3xl font-bold text-blue-900 mb-2">{selectedItem.name}</h3>
              <p className="text-xl text-gray-1200 mb-6">{selectedItem.description}</p>
              <button
                className="bg-yellow-300 hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-1.5 px-6 rounded transition"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {/* Modal animation */}
        <style>
          {`@keyframes modalIn {
            from {transform: translateY(50px) scale(0.97); opacity:0.5;}
            to {transform: translateY(0) scale(1); opacity: 1;}
          }
          .animate-modal-in {
            animation: modalIn 0.26s;
          }`}
        </style>
      </div>
      {/* <Footer /> */}
      <BackToTop/>
    </>
  );
}

export default Clubs;