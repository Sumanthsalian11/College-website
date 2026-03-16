import React from "react";
//import college from "../../assets/WhatsNew-Divya/college.jpg";
const event1 = "/assets/Activities/WhatsNew/butterfly1.jpg";
const event2 = "/assets/Activities/WhatsNew/butterfly2.jpg";
const event3 = "/assets/Activities/WhatsNew/butterfly3.jpg";
const event4 = "/assets/Activities/WhatsNew/butterfly4.jpg";
const event5 = "/assets/Activities/WhatsNew/butterfly5.jpg";
const event6 = "/assets/Activities/WhatsNew/newbuilding.jpg";
const event7 = "/assets/Activities/WhatsNew/oldcolleege.jpg";
const event8 = "/assets/Activities/WhatsNew/indoor.jpg";
const event9 = "/assets/Activities/WhatsNew/muddanahall.jpg";

function ArticleCard() {
  return (
    <div style={{ background: '#e3f3fb' }}>
      <div className="mx-auto p-8 max-w-screen-lg space-y-8">

        {/* First Article Box */}
        <div className="relative bg-blue-100 p-8 rounded-lg shadow-md min-h-[400px]">
          {/* Date flag */}
          <div className="absolute left-3 top-7 w-10 h-14 bg-blue-700 text-white rounded-t-md rounded-b-lg flex flex-col items-center font-bold shadow text-xs z-10">
            <span className="text-lg">5</span>
            <span className="uppercase tracking-wide text-[11px]">DEC</span>
          </div>

          {/* Content */}
          <div className="ml-12">
            <h2 className="text-center text-xl font-semibold mb-4">
              Inauguration of Savita Sastri Butterfly Park, MGM College, Udupi
            </h2>
            <img src={event1} alt="butterfly park" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />

            <p className="text-gray-800 leading-relaxed text-[17px]">
              The Inauguration of Savita Sastri Butterfly Park at MGM College, Udupi was a significant event held on December 5, 2023, to promote biodiversity and environmental awareness on campus. The ceremony brought together dignitaries, educators, and students to celebrate the opening of the new park, which is home to more than 32 species of butterflies from families such as Papilionidae, Nymphalidae, Pieridae, Lycaenidae, and Hesperiidae.<br /><br />
              Set amidst lush greenery, the Savita Sastri Butterfly Park was designed both as a habitat for butterflies and as a living educational space. Its landscape is rich with nectar plants and host flora, creating a tranquil escape and invaluable learning environment for students and visitors alike. During the inauguration, speakers emphasized the role of butterflies in indicating environmental health and encouraged active conservation to protect these vibrant pollinators.<br /><br />
              Spanning 15 cents of land, the butterfly park embodies MGM College’s commitment to sustainability. Today, it serves as a unique resource for hands-on nature education, fostering curiosity, ecological responsibility, and community engagement among all who visit.
            </p>

            {/* Images */}
            <div className="mt-6 space-y-6">
              
              <img src={event2} alt="butterfly park" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
              <img src={event3} alt="butterfly park" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
              <img src={event4} alt="butterfly park" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
              <img src={event5} alt="butterfly park" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
            </div>

            <div className="text-gray-600 mt-6 border-t border-gray-200 pt-3 text-sm">
              Posted 5th December 2023 by{" "}
              <span className="font-medium text-blue-700">MGM College, Udupi</span>
            </div>
          </div>
        </div>

        {/* Second Article Box */}
        <div className="relative bg-blue-100 p-8 rounded-lg shadow-md min-h-[400px]">
          {/* Date flag */}
          <div className="absolute left-3 top-7 w-10 h-14 bg-blue-700 text-white rounded-t-md rounded-b-lg flex flex-col items-center font-bold shadow text-xs z-10">
            <span className="text-lg">29</span>
            <span className="uppercase tracking-wide text-[11px]">NOV</span>
          </div>

          {/* Content */}
          <div className="ml-12">
            <h2 className="text-center text-xl font-semibold mb-4">
              Shri T. Mohandas Pai Platinum Jubilee Block
            </h2>
            

            <div className="mt-6 space-y-6">
              <img src={event6} alt="platinum jubilee" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
            </div>
            <p className="text-gray-800 leading-relaxed text-[17px]">
              The Shri T. Mohandas Pai Platinum Jubilee Block, a prominent new building within the MGM College campus in Udupi, Karnataka. Constructed to commemorate the college's 75th anniversary, this multi-story block stands as a testament to both the institution’s legacy and its forward-looking vision. Named in honor of T. Mohandas Pai, a noted philanthropist whose contributions have greatly benefitted the college, the building marries modern architecture with practical functionality. Its design features large glass panels and a striking brick central facade, reflecting contemporary tastes while providing ample natural light to the interiors. The Platinum Jubilee Block houses spacious classrooms, state-of-the-art laboratories, and administrative offices, accommodating the growing academic and infrastructural needs of the college. Beyond its role as an educational facility, the building also symbolizes the progress and support from benefactors that propel MGM College into a new era of excellence. With advanced amenities and a capacity to host a larger number of students and faculty, it enhances the campus environment and underscores the commitment to providing quality education. The block’s inauguration marked a significant milestone in the college's history, reaffirming its dedication to nurturing talent and delivering modern learning experiences for future generations.
            </p>
          </div>
        </div>
        

{/* third Article Box */}
<div className="relative bg-blue-100 p-8 rounded-lg shadow-md min-h-[400px]">
  {/* Date flag */}
  <div className="absolute left-3 top-7 w-10 h-14 bg-blue-700 text-white rounded-t-md rounded-b-lg flex flex-col items-center font-bold shadow text-xs z-10">
    <span className="text-lg">new</span>
    <span className="uppercase tracking-wide text-[11px]">POST</span>
  </div>

  {/* Content */}
  <div className="ml-12">
    <h2 className="text-center text-xl font-semibold mb-4">
      MGM College’s Path to Autonomy: Empowering Innovation and Excellence
    </h2>
    
    <div className="mt-6 space-y-6">
      <img src={event7} alt="MGM autonomous" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
    </div>
    <p className="text-gray-800 leading-relaxed text-[17px]">
      Mahatma Gandhi Memorial (MGM) College, Udupi, has been granted autonomous status by the Academic Council of Mangalore University, marking an important milestone in its academic journey. This autonomy allows the college greater academic freedom and control over curriculum design, examinations, and evaluation processes. MGM College, established in 1949 and the first college in Udupi district, has been consistently recognized for quality education and has now advanced towards becoming more self-reliant in shaping its academic policies.

The autonomous status empowers MGM College to introduce innovative courses and assessment methods tailored to current industry and educational demands while maintaining affiliations with Mangalore University. It also strengthens the institution's ability to improve the quality of teaching and learning, enhancing the overall academic environment for its students.

This development aligns with MGM College’s vision of progressive education and commitment to excellence, as well as its inclusive and value-driven approach. With autonomy, the college can respond more dynamically to changing educational trends and regional needs, further elevating its status as a premier institution in Karnataka.

The college is currently NAAC accredited with an A+ grade and has achieved significant milestones including offering diverse undergraduate and postgraduate programs and maintaining a well-equipped campus. The autonomy status underscores MGM College’s readiness to nurture talent, encourage research, and prepare students effectively for the future, reinforcing its role as an academic beacon in the region
    </p>

  </div>
</div>


{/* forth Article Box */}
<div className="relative bg-blue-100 p-8 rounded-lg shadow-md min-h-[400px]">
  {/* Date flag */}
  <div className="absolute left-3 top-7 w-10 h-14 bg-blue-700 text-white rounded-t-md rounded-b-lg flex flex-col items-center font-bold shadow text-xs z-10">
    <span className="text-lg">new</span>
    <span className="uppercase tracking-wide text-[11px]">POST</span>
  </div>

  {/* Content */}
  <div className="ml-12">
    <h2 className="text-center text-xl font-semibold mb-4">
      Elevating Sports: MGM College Udupi Unveils State-of-the-Art Indoor Volleyball Facility
    </h2>
    

    <div className="mt-6 space-y-6">
      <img src={event8} alt="MGM autonomous" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
    </div>
    <p className="text-gray-800 leading-relaxed text-[17px]">
      MGM College, Udupi, now has a new indoor volleyball court with a high-quality playing surface, spacious layout, and excellent lighting. This modern facility enables year-round volleyball practice and competitions, providing students with the opportunity to participate in sports regardless of weather conditions. The addition of the indoor court supports the college's commitment to promoting athletic excellence, teamwork, and a healthy lifestyle among its students. Enhanced infrastructure like this also allows the institution to host larger tournaments, improve training sessions, and foster a more vibrant sports culture on campus.
    </p>
  </div>
</div>




{/* fifth Article Box */}
<div className="relative bg-blue-100 p-8 rounded-lg shadow-md min-h-[400px]">
  {/* Date flag */}
  <div className="absolute left-3 top-7 w-10 h-14 bg-blue-700 text-white rounded-t-md rounded-b-lg flex flex-col items-center font-bold shadow text-xs z-10">
    <span className="text-lg">new</span>
    <span className="uppercase tracking-wide text-[11px]">POST</span>
  </div>

  {/* Content */}
  <div className="ml-12">
    <h2 className="text-center text-xl font-semibold mb-4">
      Muddana Mantappa: MGM College’s Renovated Hub for Events and Activities
    </h2>
    
    <div className="mt-6 space-y-6">
      <img src={event9} alt="MGM autonomous" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
    </div>
    <p className="text-gray-800 leading-relaxed text-[17px]">
      This is the newly renovated Muddana Mantappa at MGM College, Udupi. The hall now features interlock tile flooring, providing a sturdy and visually appealing surface for various events. The structure is equipped with modern roofing sheets for full coverage and protection from the elements. Ceiling fans are installed throughout the hall to ensure proper ventilation and comfort for large gatherings. Additionally, air conditioning has been added to the stage area, making it comfortable for speakers and performers during programs. These improvements make Muddana Mantappa a versatile and welcoming venue for college events, functions, and cultural activities.
    </p>

  </div>
</div>

        
      </div>
    </div>
  );
}

export default ArticleCard;