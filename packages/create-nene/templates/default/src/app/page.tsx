export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-blue-500">nene.js</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The AI-native full-stack framework for building modern web
          applications.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/rossjang/nenejs"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Read the Docs
          </a>
          <a
            href="https://github.com/rossjang/nenejs"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
