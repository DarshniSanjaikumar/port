import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen text-black p-8 md:p-10 flex justify-center">
      <div className="w-full max-w-5xl mt-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">About Me</h1>

        {/* Bio Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Who I Am</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="mb-4 text-lg">
                {"I'm Darshni Sanjaikumar, a Computer Science Engineering student at Lovely Professional University in Punjab with a passion for machine learning, data science, and innovative application development."}
              </p>
              <p className="mb-4">
                {"My journey in technology began with a strong foundation in mathematics and science, which has evolved into a fascination with how machine learning can solve real-world problems. I enjoy building applications that bridge the gap between complex technology and practical user needs."}
              </p>
              <p>
                {"Outside of my academic pursuits, I'm constantly exploring new technologies, participating in online courses, and working on personal projects to expand my skills and knowledge in the field of computer science."}
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">• Location:</span> Tamil Nadu, India
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">• Education:</span> B.Tech in Computer Science (Current)
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">• Interests:</span> Machine Learning, Data Science, Web Development
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">• Languages:</span> English, Tamil
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Education Journey</h2>
          <div className="space-y-8">
            {[
              {
                title: "B.Tech in Computer Science and Engineering",
                time: "2022 - Present",
                place: "Lovely Professional University, Punjab",
                score: "CGPA: 6.49",
                desc: "Focusing on advanced computing concepts, machine learning algorithms, and application development."
              },
              {
                title: "12th Grade (Science and Math)",
                time: "2020 - 2022",
                place: "Bannari Amman Public School, Erode, Tamil Nadu",
                score: "Percentage: 86.60%",
                desc: "Built a strong foundation in science and mathematics, developing analytical thinking skills essential for computer science."
              },
              {
                title: "10th Grade (CBSE)",
                time: "2018 - 2020",
                place: "Bannari Amman Public School, Erode, Tamil Nadu",
                score: "Percentage: 94%",
                desc: "Excelled in core subjects, establishing a solid academic base for future specialization."
              }
            ].map((item, index) => (
              <div className="flex" key={index}>
                <div className="mr-4 flex flex-col items-center">
                  <div className="bg-blue-600 rounded-full w-4 h-4"></div>
                  <div className={`bg-blue-200 w-1 ${index < 2 ? 'flex-grow' : 'h-0'}`}></div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md flex-grow">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-blue-600">{item.time}</p>
                  <p className="mt-2">{item.place}</p>
                  <p className="text-gray-600">{item.score}</p>
                  <p className="mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Interests */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Professional Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
              <p>Passionate about developing machine learning models that can solve real-world problems, especially in areas of classification, prediction, and natural language processing.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Data Science</h3>
              <p>Interested in extracting meaningful insights from complex datasets, with a focus on data visualization, statistical analysis, and predictive modeling.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Application Development</h3>
              <p>Enjoy building user-centric applications that leverage advanced technologies like ML and AI to create intuitive and efficient solutions for users.</p>
            </div>
          </div>
        </section>

        {/* Personal Growth */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Personal Growth & Goals</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              {"I am constantly striving to expand my knowledge and skills in the field of computer science and engineering. My goal is to become a proficient data scientist and machine learning engineer who can develop innovative solutions to complex problems."}
            </p>
            <p className="mb-4">In the near future, I aim to:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Deepen my understanding of advanced machine learning algorithms</li>
              <li>Contribute to open-source projects in the ML/AI community</li>
              <li>Develop applications that make a positive impact on society</li>
              <li>Collaborate with industry professionals on innovative projects</li>
            </ul>
            <p>
              {"I believe in the power of continuous learning and am excited about the endless possibilities that lie ahead in the world of technology."}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}