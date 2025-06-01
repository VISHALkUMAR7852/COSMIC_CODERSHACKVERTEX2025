import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophone,
  faMobileAlt,
  faMicrophoneAlt,
  faBrain,
  faMapMarkerAlt,
  faPills,
  faCalendarCheck,
  faLanguage,
  faDownload,
  faStar,
  faStarHalfAlt
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">AI-Powered</span>
                    <span className="block text-green-500">Rural Health Assistant</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Bridging the healthcare gap in rural areas with voice-enabled AI assistance, providing instant medical guidance and connecting communities with vital health resources.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <button
                        id="voiceAssistantBtn"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10 transition duration-300"
                      >
                        <FontAwesomeIcon icon={faMicrophone} className="mr-2" /> Start Voice Assistant
                      </button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10 transition duration-300">
                        <FontAwesomeIcon icon={faMobileAlt} className="mr-2" /> Download App
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Rural healthcare"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Rural Health Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our AI-powered platform brings healthcare to your fingertips, even in the most remote areas.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[{
                icon: faMicrophoneAlt,
                title: 'Voice Interface',
                description: 'Speak naturally in your local language to get instant health advice without needing to type.',
                iconBg: 'bg-green-100',
                iconColor: 'text-green-500'
              }, {
                icon: faBrain,
                title: 'AI Symptom Checker',
                description: 'Describe your symptoms and get preliminary assessments with recommended actions.',
                iconBg: 'bg-blue-100',
                iconColor: 'text-blue-500'
              }, {
                icon: faMapMarkerAlt,
                title: 'Health Facility Locator',
                description: 'Find the nearest clinics, hospitals, and pharmacies with directions and contact details.',
                iconBg: 'bg-purple-100',
                iconColor: 'text-purple-500'
              }, {
                icon: faPills,
                title: 'Medicine Information',
                description: 'Get details about medications, dosages, side effects, and alternatives available locally.',
                iconBg: 'bg-yellow-100',
                iconColor: 'text-yellow-500'
              }, {
                icon: faCalendarCheck,
                title: 'Vaccination Reminders',
                description: 'Never miss important vaccinations with personalized reminders for you and your family.',
                iconBg: 'bg-red-100',
                iconColor: 'text-red-500'
              }, {
                icon: faLanguage,
                title: 'Multilingual Support',
                description: 'Available in multiple regional languages to ensure accessibility for all communities.',
                iconBg: 'bg-indigo-100',
                iconColor: 'text-indigo-500'
              }].map((feature, index) => (
                <div key={index} className="health-card bg-white overflow-hidden shadow rounded-lg transition duration-300 hover:translate-y-[-5px]">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 ${feature.iconBg} rounded-md p-3`}>
                        <FontAwesomeIcon icon={feature.icon} className={`${feature.iconColor} text-xl`} />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple Steps to Better Health
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Getting health assistance has never been easier, even without internet access.
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div className="absolute left-1/2 -ml-1 h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
              <div className="relative space-y-8">
                {[{
                  step: 1,
                  title: 'Activate the Assistant',
                  description: 'Press the microphone button or say the wake word to start interacting with the health assistant.',
                  bgColor: 'bg-green-100',
                  textColor: 'text-green-500'
                }, {
                  step: 2,
                  title: 'Describe Your Concern',
                  description: 'Speak naturally about your symptoms, medication questions, or need to find healthcare services.',
                  bgColor: 'bg-blue-100',
                  textColor: 'text-blue-500'
                }, {
                  step: 3,
                  title: 'Receive Guidance',
                  description: 'Get immediate, evidence-based health information tailored to your specific situation.',
                  bgColor: 'bg-purple-100',
                  textColor: 'text-purple-500'
                }, {
                  step: 4,
                  title: 'Take Action',
                  description: 'Follow the recommended steps, whether it\'s home care, visiting a clinic, or emergency action.',
                  bgColor: 'bg-yellow-100',
                  textColor: 'text-yellow-500'
                }].map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full ${item.bgColor} flex items-center justify-center`}>
                      <span className={`${item.textColor} text-xl font-bold`}>{item.step}</span>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-base text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Villages */}
            <div className="bg-green-50 rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold text-green-700 mb-2">For Villages</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Access instant medical guidance via voice or text in local languages.</li>
                <li>Connect with nearby health workers and facilities easily.</li>
                <li>Receive health alerts, vaccination reminders, and wellness tips.</li>
                <li>Empower communities with health education and self-care resources.</li>
              </ul>
            </div>
            {/* Health Workers */}
            <div className="bg-blue-50 rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold text-blue-700 mb-2">For Health Workers</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>AI-powered triage and symptom checker to assist in diagnosis.</li>
                <li>Digital record-keeping for patient visits and follow-ups.</li>
                <li>Training modules and up-to-date medical guidelines.</li>
                <li>Tools for community outreach and health data collection.</li>
              </ul>
            </div>
            {/* NGOs */}
            <div className="bg-yellow-50 rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold text-yellow-700 mb-2">For NGOs</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Data-driven insights for planning health interventions.</li>
                <li>Customizable outreach campaigns and educational content.</li>
                <li>Collaboration tools for working with local health workers.</li>
                <li>Impact measurement and reporting dashboards.</li>
              </ul>
            </div>
            {/* Governments */}
            <div className="bg-purple-50 rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold text-purple-700 mb-2">For Governments</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Aggregated health data for policy-making and resource allocation.</li>
                <li>Early warning systems for outbreaks and public health emergencies.</li>
                <li>Support for national health programs and digital health initiatives.</li>
                <li>Monitoring and evaluation tools for rural health outcomes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Rural Communities
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[{
              name: 'Asha Patel',
              role: 'Village Health Worker',
              testimonial: '"This assistant has transformed how we provide care in our village. Even when I\'m not available, people can get reliable health advice in our local language."',
              avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              stars: 5
            }, {
              name: 'Rajesh Kumar',
              role: 'Farmer',
              testimonial: '"When my son had high fever at night, the assistant guided us through first aid steps and helped us find the nearest 24-hour clinic. It saved us precious time."',
              avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              stars: 4.5
            }, {
              name: 'Dr. Priya Sharma',
              role: 'District Medical Officer',
              testimonial: '"The AI assistant helps triage cases effectively, reducing unnecessary clinic visits while ensuring serious conditions get immediate attention. A game-changer for rural healthcare."',
              avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              stars: 5
            }].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={testimonial.avatar} alt="Testimonial" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  {testimonial.testimonial}
                </p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(Math.floor(testimonial.stars))].map((_, i) => <FontAwesomeIcon key={`star-${i}`} icon={faStar} />)}
                  {testimonial.stars % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to improve rural healthcare?</span>
            <span className="block text-green-200">Start using the Health Assistant today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                id="ctaVoiceBtn"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition duration-300"
              >
                <FontAwesomeIcon icon={faMicrophone} className="mr-2" /> Try Voice Assistant
              </button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700 transition duration-300"
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download App
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">For Villages</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">For Health Workers</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">For NGOs</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">For Governments</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Training</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Community</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Team</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Partners</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Instagram</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; {new Date().getFullYear()} Rural Health Assistant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
// Removed unused variables: faHeartbeat, faUserPlus, faBars