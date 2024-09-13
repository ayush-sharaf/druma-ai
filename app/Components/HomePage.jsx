"use client";
import { React, useState } from "react";
import {
  FaRobot,
  FaBrain,
  FaChartLine,
  FaUsers,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
  FaTimes
} from "react-icons/fa";

const LoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Automation",
    description: `Have a task which takes up your time? Automate it!

Many companies have started using robotic process automation (RPA) for performing tasks like document scanning, filling in forms, moving data, opening documents, and extracting data.

Robots (or bots) work across interfaces and mimic what a human would do - 24x7, 365 days.

Discuss with us on how you can improve your productivity exponentially (and save cost at the same time) by using RPA.`,
    image:
      "https://static.wixstatic.com/media/f1e244_5fe124c7a1274c93b4b09dacf28a4126~mv2.png/v1/fill/w_956,h_602,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f1e244_5fe124c7a1274c93b4b09dacf28a4126~mv2.png",
  },
  {
    title: "Cognitive Insights",
    description: `With the amount of data that is generated, it is not possible for a human to analyze everything and make decisions based on it.

Artificial Intelligence is exceptionally good at finding patterns in large volumes of data and making predictions based on it in real-time.

Utilize the power of AI to:
- Predict customer buying behavior
- Real-time fraud detection
- Marketing personalization
- Demand forecasting
- And many more data-intensive tasks

Get in touch to leverage the power of data for advanced analytics.`,
    image:
      "https://static.wixstatic.com/media/f1e244_484e112b503040d896e4531db503dedb~mv2.png/v1/fill/w_772,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f1e244_484e112b503040d896e4531db503dedb~mv2.png",
  },
  {
    title: "Customer Engagement",
    description: `A happy customer is a returning customer.

Customer engagement has become the topmost priority for many organizations.

And a great way to provide a top-notch, smooth, and fast experience is by using AI.

Chatbots, intent prediction, and emotion analytics are a few of the many applications which have helped organizations in improving customer experience.

Discuss how you can give your customers a superior customer experience.`,
    image:
      "https://static.wixstatic.com/media/f1e244_66a261fbc26a4e7e816275f5c505c021~mv2.png/v1/fill/w_686,h_686,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f1e244_66a261fbc26a4e7e816275f5c505c021~mv2.png",
  },
];

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">Druma AI</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-blue-400">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Login
                </button>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 py-2">
            <ul className="flex flex-col items-center space-y-2">
              <li>
                <a
                  href="#home"
                  className="block py-2 px-4 text-white hover:text-blue-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-4 text-white hover:text-blue-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 px-4 text-white hover:text-blue-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="block py-2 px-4 text-white hover:text-blue-400"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-4 text-white hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
              <li>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Login Popup */}
      <LoginPopup isOpen={isLoginPopupOpen} onClose={closeLoginPopup} />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      >
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 m-2">
              Leverage the Power of AI
            </h1>
            <p className="text-xl mb-8 m-4">
              Artificial Intelligence is powering majority of businesses leading
              to improved productivity, more sales and overall growth of these
              companies <br />
              <br />
              Druma can make your business AI ready so you can be ahead of your
              competition
            </p>
            <a
              href="#services"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
            >
              Explore Our Services
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt="AI Technology"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* what we do section */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          padding: "40px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <img
          src="https://static.wixstatic.com/media/f1e244_88702ca5beba46ada09620e1803177c8~mv2.png/v1/fill/w_964,h_632,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f1e244_88702ca5beba46ada09620e1803177c8~mv2.png"
          alt="AI Solutions"
          style={{ width: "50%", marginRight: "20px", borderRadius: "8px" }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "2em", marginBottom: "20px", color: "#333" }}>
            What We Do
          </h2>
          <p style={{ fontSize: "1.1em", lineHeight: "1.6", color: "#555" }}>
            We work with you to develop AI solutions tailored to your needs.
          </p>
          <p style={{ fontSize: "1.1em", lineHeight: "1.6", color: "#555" }}>
            We function as your AI department and therefore, it's our job to
            implement AI solutions which will help improve your business or
            automate your processes, thus saving you time to focus on the more
            important things.
          </p>
          <p style={{ fontSize: "1.1em", lineHeight: "1.6", color: "#555" }}>
            If you are an enterprise who is in the initial stages of AI
            implementation, or an enterprise who wants to improve AI, we can
            help you.
          </p>
          <p style={{ fontSize: "1.1em", lineHeight: "1.6", color: "#555" }}>
            From model development to optimization for best results, we do it
            all.
          </p>
        </div>
      </section>
      {/* services section */}
      <section id="services" className="py-20 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our AI Services
          </h2>
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4 border-b border-gray-300">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-2 px-4 text-lg font-semibold ${
                    activeTab === index ? "border-b-2 border-blue-500" : ""
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-left">
              <p>{services[activeTab].description}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={services[activeTab].image}
                alt={services[activeTab].title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              name="John Doe"
              company="Tech Innovators Inc."
              testimonial="Druma AI's predictive analytics solution has transformed our decision-making process, leading to a 30% increase in operational efficiency."
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              name="Jane Smith"
              company="Global Communications Ltd."
              testimonial="The natural language processing system implemented by Druma AI has revolutionized our customer service, reducing response times by 50%."
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            About Druma AI
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <p className="text-lg mb-6">
                At Druma AI, we're passionate about harnessing the power of
                artificial intelligence to solve complex business challenges.
                Our mission is to make AI accessible and actionable for
                organizations of all sizes.
              </p>
              <p className="text-lg">
                With a team of world-class data scientists and AI engineers,
                we're committed to pushing the boundaries of what's possible
                with machine learning and AI technologies.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h3 className="text-2xl font-bold mb-6">Our Team</h3>
              <div className="grid grid-cols-2 gap-6">
                <TeamMember
                  name="Dr. Emily Chen"
                  role="Chief AI Scientist"
                  image="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5"
                />
                <TeamMember
                  name="Michael Rodriguez"
                  role="Lead AI Engineer"
                  image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-100 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="space-y-6">
                <ContactInfo
                  icon={<FaEnvelope className="text-2xl text-blue-600" />}
                  text="sales@drumaai.com"
                />
                <ContactInfo
                  icon={<FaPhone className="text-2xl text-blue-600" />}
                  text="+1 (555) 123-4567"
                />
                <ContactInfo
                  icon={<FaMapMarkerAlt className="text-2xl text-blue-600" />}
                  text="Ravi Uday Co-operative Society, Juhu Chandan Society, Jambli Naka, Thane West, Thane, Maharashtra 400601"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
          <div className="text-center">
            <p className="text-lg mb-4">
              We are a team of technologists who are passionate about AI and its
              immense potential.
            </p>
            <p className="text-lg mb-4">
              We believe that the power of AI should be accessible to everyone.
              Therefore, we came up with Druma to work with different companies
              and be their AI departments.
            </p>
            <p className="text-lg">
              We have expertise in the fields of AI, automation, cloud
              technology, and mobile development.
            </p>
          </div>
        </div>
      </section>
      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Technology</h2>
          <div className="text-center">
            <p className="text-lg mb-4">
              We use multiple technologies and frameworks for developing AI
              services - TensorFlow, Keras, PyTorch, OpenCV being some of them.
            </p>
            <p className="text-lg mb-4">
              For our data labeling services, we have developed our own platform
              which is accessible on PC and phones to our data labeling
              professionals.
            </p>
            <p className="text-lg">
              Since our whole set of tools is also available on phone, we can
              leverage the power of volunteers and easily scale our labeling
              capabilities depending on the project size.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Druma AI</h3>
              <p className="mt-2">Empowering the future with AI</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-2xl hover:text-blue-400">
                <FaFacebookF />
              </a>
              <a href="#" className="text-2xl hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-blue-400">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-2xl hover:text-blue-400">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>
              &copy; 2023 Druma AI. All rights reserved. |{" "}
              <a href="#" className="underline hover:text-blue-400">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const TestimonialCard = ({ image, name, company, testimonial }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <p className="text-gray-700 mb-4">"{testimonial}"</p>
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-gray-600">{company}</p>
      </div>
    </div>
  </div>
);

const TeamMember = ({ name, role, image }) => (
  <div className="text-center">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4"
    />
    <h4 className="font-bold">{name}</h4>
    <p className="text-gray-300">{role}</p>
  </div>
);

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center">
    {icon}
    <span className="ml-4">{text}</span>
  </div>
);

export default HomePage;
