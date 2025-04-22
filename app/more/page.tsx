export default function MorePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      {/* Contact Section */}
      <section id="contact" className="w-full max-w-4xl mb-10">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Get In Touch</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                I'm open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2">Email:</span>
                <a href="mailto:darshnisanjaikumar@gmail.com" className="text-blue-600 hover:underline">
                  darshnisanjaikumar@gmail.com
                </a>
              </div>
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2">Phone:</span>
                <a href="tel:+919840527916" className="text-blue-600 hover:underline">
                  +91 9840527916
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/darshni-sanjaikumar-448642253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  darshni-sanjaikumar
                </a>
              </div>
            </div>
            <div>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}