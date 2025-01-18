export default function Home() {
  return (
<div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-6 py-12 text-center">

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Welcome to BlogMaster
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          Create, share, and manage your blogs or notes with ease.
        </p>

        {/* Call to Action */}
        <div className="mt-8">
          <a
            href="/create-blog" // Link this to the actual blog creation page
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Create Your Own Blog
          </a>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Write Your Thoughts</h3>
            <p className="mt-4">Easily create and manage your blog posts and notes.</p>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Customizable Layout</h3>
            <p className="mt-4">
              Customize your blog&apos;s layout and style to match your personal preferences.
            </p>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Share with the World</h3>
            <p className="mt-4">Publish and share your creations with ease.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
