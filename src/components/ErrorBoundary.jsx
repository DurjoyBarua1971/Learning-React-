function ErrorBoundary() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-700">An error occurred while loading this page.</p>
    </div>
  );
}

export default ErrorBoundary;