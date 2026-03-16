import React from 'react';
const pai = "/assets/Home & About/pai.jpg";
const oldblck = "/assets/Home%20&%20About/oldblck.jpg";

function App() {
  return (
    <div
       className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-center p-4"
      style={{ backgroundImage: `url(${oldblck})` }}
    >
         <div className="w-full max-w-5xl backdrop-blur-lg bg-white/40 rounded-lg p-6 shadow-xl">
      <div className="max-w-5xl mx-auto text-gray-800 space-y-8">

        {/* Header */}
        <header className="text-center text-white">
          <div className="bg-gradient-to-b from-blue-500 to-blue-900 bg-white bg-opacity-90 rounded-lg shadow-lg  py-2 text-sm">


          <h1 className="text-2xl font-extrabold text-white text-center py-4 rounded-t-lg shadow-inner mb-6">MGM College History</h1>
          </div> 
          {/* <a href="#" className="text-lg underline font-semibold">Home</a> */}
        </header>

        {/* History Card */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">History</h2>
          <p className="text-justify">
            The Mahatma Gandhi Memorial College, founded in 1949 was the brainchild of the late Dr. T.M.A. Pai, the 
            architect of modern Manipal. Located in the sylvan terrain of Sagri, close to Manipal-International centre for education, this institution is a premier Arts, Science and Commerce College in the district. MGM was the beacon, Manipal followed and MAHE flowered, transforming the topography into the “Education Kashi of South India. Over the past five and a half decades, the College has witnessed both academic and infrastructural growth and has opened new vistas in the educational and cultural history of this part of coastal Karnataka. It has enriched the lives of hundreds and thousands of young men and women and inspired educationists and philanthropists of erstwhile South Kanara to start similar temples of learning elsewhere. Veritably, the College is a torchbearer and trendsetter in the field of higher education.
          </p>
        </div>

        {/* Hurdles Card */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">Need For A College & Hurdles</h2>
          <p className="text-justify">The Mahatma Gandhi Memorial College, Udupi, was founded in 1949 to fulfill the aspirations of the northern parts of the Dakshina Kannada District which till then could boast of only two colleges, both situated in Mangalore. The need for a college in this era was keenly visualized by Dr. T. Madhava A. Pai, whose dream was to better the life of his people by bringing opportunities to their doors. He could inspire a band of enlighted citizens of Udupi to work for the founding of a college in this town. The obstacles in the way were so severe that Dr. Pai, at one stage, had even to return the donations he had collected for the purpose of raising the funds required for the establishment of the college. </p>
          <p className="text-justify">But Dr. Pai, a man of grit that he was, did not give up the idea that he had cherished for long and created a public opinion in favour of the college, thawed the icy mind of unwilling donors, blew the mist of misgivings, persuaded liberal minded men to unstring their purse and bent the will of the reluctant authorities of the government and the university of Madras and secured the permission to found a college in the practically rural environs of Udupi. Dr. Pai's perserverance in this regard was equal to the legendary perserverance of Bhagiratha, who brought the Heavenly waters of Ganga down to the earth.</p>
          <p className="text-justify">Hurdles in the path were many. The Gods of the University were again unwilling to allow lady students to be admitted to the college. One Shantha, asserted her democratic right of equality by approaching the High court of Madras. The famous "Shantha Versus University of Madras" was fought on the question of equality of rights ensured by the Indian Consitution. The matter, then in the court of Governor Sri Prakash, was settled in favor of girls with the intervention of Smt. Indira Gandhi who was then only the daughter of her father Jawaharlal Nehru. Yes, those were the days of herculian struggle and gratifying reward.</p>
          <p className="text-justify">Once Dr. Pai's sincerity was realized, the support he got became Spontaneous and overwhelming. The Swamijis of Udupi blessed the project. The public of Udupi rendered Shramadan to raise the building on the site at Sagri where the college, started first in the rooms let by an elementary school, was shifted in the year 1952. A band of eminent citizens of Udupi rallied behind Dr. Pai and the dream of the college became a reality. That is the story of five decades ago and the college has witnessed in this course of period phenomenal growth and expansion. It became a premier institution sponsored by the Academy of General Education, Manipal and a source of inspiration to the citizens of many other towns in the district who approached Dr. Pai for advice in the matter of starting new colleges. Thus began an era of higher education in this district which led to its economic revolution too. On the threshold of the Golden Jublee year 1999 the college can look back with pride upon the different stages of development and growth, including the recent inauguration of Madhav Raksha, the magnificent new administrative block by Hon'ble Minister for Human resources development, Dr. Murali Manohar Joshi on the occasion of inaugurating the Birth Centenary Celebration of our Founder Dr. T. M.A. Pai</p>
        </div>

        {/* Our Founder */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">Our Founder</h2>
          <p className="text-justify">Dr. T M A Pai, Tonse Madhava Ananth Pai, born on April 30, 1898, was one of the architects of modern Karnataka. He was, from the economic and social standpoint, an ordinary man. The triumph of Dr. Pai was in breathing new life into the Indian context, in establishing in a rural track like Manipal an education complex with the dimensions of a University, an ultra-modern hospital, small industries and outstanding banking institutions.</p>
          <div className="flex justify-center">
            <div>
              <img src={pai} alt="Dr. T M A Pai" className="w-60 rounded-lg shadow-md mx-auto" />
              <p className="text-center mt-0 font-semibold text-blue-700 text-lg">Dr. Thonse Madhava Anantha Pai</p>
            </div>
          </div>
          <p className="text-justify">Dr. Pai practised surgery for 15 years. But realizing the dire need to assure economic security to the poor and also to teach them lessons in savings, he gave up his medical practice in favour of banking. Soon he established the Syndicate Bank which helped greatly in transforming the lot of the poor section of the society.</p>
          <p className="text-justify">In 1933 Dr. Pai bought 107 acres of land on top of a rocky hill 3 miles to the east of Udupi, which at that time had no takers. Soon he established an institution called Canara Land Investment for the development of this barren land. The place then called "Mannapalla" in the local Tulu vernacular, meaning mud pond, became Manipal, the modern name for the region atop the hill.</p>
          <p className="text-justify">Initially the Pai brothers established a few small scale diverse industries there : a tile factory, an agricultural improvement society, a T. B. sanatorium (1934) and a weaving factory. Of these the tile factory survives till today, the rest failed to click and vanished in due course of time. Dr. Pai also opened an elementary school (1936) and Hindu Orphanage (1938) both of which were later closed down. But the Higher Primary School and High School (1939), today have become the Manipal Pre- University College.</p>
          <p className="text-justify">In 1948 he started the " Academy of General Education ". After having established a High School in Manipal he thought of opening a college in Udupi. He had to convince the stern university officials, particularly the Vice Chancellor of the Madras University, that the efforts to start the college were genuine. with his spirit of adventure and perseverance, he started the Mahatma Gandhi Memorial College in 1949 amidst many challenging circumstances. This success inspired him to start a medical college in Manipal in private sector. Persuading the parents of students to bear the cost of their education, Dr. Pai started the Kasturba Medical College on a self-financing basis. On the basis of the financing formula of the Kasturaba Medical College (both in Mangalore and Manipal) three more professional colleges followed : the Manipal Engineering College (1957) (now called Manipal Instiute of Technology), the Udupi Law College(1957) (now Vaikunta Baliga College of Law) and the Manipal College of Education (1965) (now Dr. T M A Pai College of Education). For giving full-fledged medical education in Manipal a hospital with adequate facilities was a necessity. Therefore he established the Kasturaba General Hospital. Now Manipal also has colleges in Pharmacy, Dental Science, Nursing, Hotel Administration, Management institutes and numerous other institutes which train students in specialized courses.</p>
          <p className="text-justify">It is difficult to believe that once upon a time Manipal was nothing but a grazing ground for the cattle. But today there is no other place in India where modern amenities are so densely congregated as here : education, banking, business, employment and health-care. One finds buses departing every five minutes, and brimming with people on the sides, hospital wards filled to overflowing with patients and their relatives, buzzing groups of medical and engineering students, workers employed in industries, banks, workshops and in the press. Students from different parts of the country and the world are studying in the colleges here - from Malayasia, East Africa, US and Iran.</p>
          <p className="text-justify">This is the story of the success of Manipal, the story of the metamorphosis of a wilderness into a teeming township. It is a unique example of the genius and organizational skill that is latent in the heart of rural India. Of the few born planners that India could boast of, Madhava Pai was certainly one and one of the greatest. His eventful life came to its close on May 29, 1979.From the institutions started by him, flourishing still as model institutions, serve to remind the generations in future that there was a miracle man called dr. T M A Pai. Institutions sponsored by Academy of General Education( A G E )</p>
        </div>

        {/* Principals Section */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">Principals of the College</h2>
          <p className="text-justify">
            Our founder principal was <strong>Prof. H. Sunder Rao</strong>... He was a man of great discipline and decorum, he established a tradition of discipline and academic commitment in the college.
          </p>
          <p className="text-justify">
            The golden era of development... <strong>Prof. K. S. Haridasa Bhat</strong> became the Principal of the college in 1964. During the 14 years of his tenure as Principal the collge virtually became a mini university by becoming an unofficially recognized wing of the University of Mysore.
          </p>
           <p className="text-justify">
            <strong>
           The eminent personalities who have served our college as Principals are: </strong>
           </p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Prof. H. Sunder Rao (1949–64)</li>
            <li>Prof. K. S. Haridasa Bhat (1964–79)</li>
            <li>Prof. K. Ramadas (1979–84)</li>
            <li>Prof. K. K. Eshwaran (1984–88)</li>
            <li>Prof. K. Rama Bhat (1988–90)</li>
            <li>Prof. Dr. Alwyn D’Souza (1990–94)</li>
            <li>Prof. K. Shreesha Acharya (1994–97)</li>
            <li>Prof. Dr. P. N. Narasimha Murthy (1997–98)</li>
            <li>Prof. Sam Daniel (1998–2001)</li>
            <li>Prof. Dr. Gopalan Puthusseri (2001–2002)</li>
            <li>Prof. Ganapathi Bhat (2002–2004)</li>
            <li>Prof. Malpe Laxminarayana Samaga (2003–2007)</li>
            <li>Prof. Dr. Jayaprakash Mavinakuli (2007–2009)</li>
            <li>Prof. Dr. Venkataramana Gowda (2009–2013)</li>
            <li>Prof. Dr. N. Hala Naik (2013–2014)</li>
            <li>Prof. Mrs. K Kusuma Kamath (2014–2017)</li>
            <li>Dr. Mrs. Sandhya R Nambiar (2017–2018)</li>
            <li>Dr. M. G. Vijaya (2018–2020)</li>
            <li>Dr. Devidas S. Naik (2020–2022)</li>
            <li>Prof. Laxminarayana Karanth (2022–2025)</li>
            <li>Prof. Vanitha Maiya (2025–todate)</li>
          </ol>

          {/* PU Section */}
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">Principals of the Pre University College</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Prof. Padmavathi Badikillaya (2001–2007)</li>
            <li>Prof. Arun Kumar (2007–2008)</li>
            <li>Prof. Anasooya Karkera (2008–2009)</li>
            <li>Mrs. Malathi Devi A (2009–todate)</li>
          </ol>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;