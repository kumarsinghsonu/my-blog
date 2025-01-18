import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            About BlogMaster
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            A simple and powerful platform to create, manage, and share your blogs and notes.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-700">
              At BlogMaster, we believe everyone has a story to tell or knowledge to share. Our mission is to provide a seamless, user-friendly platform where you can easily create and share blogs or personal notes.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Create Your Blog</h3>
            <p className="mt-4 text-gray-600">
              Write, edit, and organize your blog posts with ease using our simple, intuitive interface.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Stay Organized</h3>
            <p className="mt-4 text-gray-600">
              Keep your blogs and notes well-organized with categories, tags, and labels.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Share with Ease</h3>
            <p className="mt-4 text-gray-600">
              Publish your blogs and share them with the world in just a few clicks.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Ready to Start Blogging?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Join BlogMaster today and start creating your own blogs or notes, and share your ideas with the world!
          </p>
          <a
            href="/create-blog" // Link this to the actual blog creation page
            className="inline-block mt-8 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Create Your First Blog
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
