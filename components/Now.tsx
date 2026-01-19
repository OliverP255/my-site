export default function Now() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Now</h2>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          [Add what you're currently focused on, what excites you, and what you're working on]
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          [Add more details about your current interests, learning goals, or projects]
        </p>
      </div>
    </div>
  );
}
