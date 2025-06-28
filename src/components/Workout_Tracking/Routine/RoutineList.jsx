import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/outline';

const RoutineList = () => {
  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterColumn, setFilterColumn] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [routinesPerPage] = useState(5);
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const [routineResponse, categoriesResponse, tagsResponse] = await Promise.all([
        axios.get('http://localhost:3000/r/', {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get('http://localhost:3000/api/categories', {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get('http://localhost:3000/t/tag', {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      const routinesData = routineResponse.data.map(routine => {
        const category = categoriesResponse.data.find(cat => cat._id === routine.category);
        const tags = routine.tags.map(tagId => {
          const tag = tagsResponse.data.find(t => t._id === tagId);
          return tag ? tag.name : '';
        });

        return {
          ...routine,
          category: category ? category.name : '',
          tags: tags.join(', '),
          dates: routine.dates || []
        };
      });

      setRoutines(routinesData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/r/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRoutines(routines.filter(routine => routine._id !== id));
      toast.success('Routine deleted successfully!');
    } catch (error) {
      console.error('Error deleting routine:', error);
      toast.error('Error deleting routine.');
    }
  };

  const handleEdit = (id) => {
    navigate(`/db/editRoutine/${id}`);
  };

  const handleCreate = () => {
    navigate('/db/createRoutine');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortedRoutines = [...routines].sort((a, b) => {
    const aValue = (a[sortColumn] || '').toString().toLowerCase();
    const bValue = (b[sortColumn] || '').toString().toLowerCase();
    return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });

  const filteredRoutines = sortedRoutines.filter(routine => {
    return Object.values(routine).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastRoutine = currentPage * routinesPerPage;
  const indexOfFirstRoutine = indexOfLastRoutine - routinesPerPage;
  const currentRoutines = filteredRoutines.slice(indexOfFirstRoutine, indexOfLastRoutine);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 rounded-lg shadow-lg">
      <ToastContainer />
      <h1 className="text-4xl font-semibold text-center text-blue-600 mb-6">Workout Routines</h1>

      <div className="mb-6 flex justify-between items-center">
        <div className="w-full sm:w-1/3 flex items-center mb-4 sm:mb-0">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search routines"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleCreate}
          className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <PlusIcon className="w-5 h-5 mr-2" /> Add Routine
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-100 text-sm font-medium text-gray-700">
              <th className="px-6 py-3 cursor-pointer" onClick={() => setSortColumn('name')}>Exercise</th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => setSortColumn('category')}>Category</th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => setSortColumn('tags')}>Tags</th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => setSortColumn('sets')}>Sets</th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => setSortColumn('reps')}>Reps</th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => setSortColumn('weights')}>Weights</th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => setSortColumn('dateTime')}>Date</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRoutines.map(routine => (
              <tr key={routine._id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{routine.name}</td>
                <td className="px-6 py-4">{routine.category}</td>
                <td className="px-6 py-4">{routine.tags}</td>
                <td className="px-6 py-4">{routine.sets}</td>
                <td className="px-6 py-4">{routine.reps}</td>
                <td className="px-6 py-4">{routine.weights}</td>
                <td className="px-6 py-4">{new Date(routine.dateTime).toLocaleDateString()}</td>
                <td className="px-6 py-4 flex justify-center">
                  <button
                    onClick={() => handleEdit(routine._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(routine._id)}
                    className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="inline-flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            First
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: Math.ceil(filteredRoutines.length / routinesPerPage) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`px-4 py-2 rounded-md ${currentPage === idx + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 hover:bg-blue-500'}`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            disabled={currentPage === Math.ceil(filteredRoutines.length / routinesPerPage)}
          >
            Next
          </button>
          <button
            onClick={() => handlePageChange(Math.ceil(filteredRoutines.length / routinesPerPage))}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoutineList;
