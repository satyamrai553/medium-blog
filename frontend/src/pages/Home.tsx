
import {Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Your Medium-Like App</h1>
        <p className="mt-4 text-lg">A place to share ideas, stories, and knowledge with the world</p>
        <Link to={'/signup'}>
        <button className="mt-6 px-6 py-2 bg-white text-indigo-600 font-semibold rounded hover:bg-gray-200">
          Get Started
        </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white text-gray-700">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Our Platform?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Write with Ease</h3>
            <p className="mt-4">Create and publish articles with our intuitive editor.</p>
          </div>
          <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Engage with Readers</h3>
            <p className="mt-4">Receive feedback and interact with readers.</p>
          </div>
          <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Explore New Ideas</h3>
            <p className="mt-4">Discover articles on topics that matter to you.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-indigo-600 text-white">
        <h2 className="text-3xl font-semibold">Ready to Start Writing?</h2>
        <p className="mt-4">Join our platform and share your ideas with the world!</p>
        <Link to={'/signup'}>
        <button className="mt-6 px-8 py-3 bg-white text-indigo-600 font-semibold rounded hover:bg-gray-200">
          Sign Up Now
        </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
