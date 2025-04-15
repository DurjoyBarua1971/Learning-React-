import { useSearchParams } from 'react-router-dom';

function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') || 'all';

  const handleFilterChange = (newFilter) => {
    setSearchParams({ filter: newFilter });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p className="text-gray-700 mb-4">This is the about page with query parameter handling.</p>
      <div className="mb-4">
        <label className="mr-2">Filter:</label>
        <select
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="archived">Archived</option>
        </select>
      </div>
      <p className="text-gray-700">Current filter: {filter}</p>
    </div>
  );
}

export default About;