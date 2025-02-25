import React, { useState } from 'react';
import { usePersonalGrowth } from '../contexts/PersonalGrowthContext';

interface GoalFormProps {
  onClose: () => void;
  initialGoal?: {
    id: number;
    title: string;
    description: string;
    deadline: string;
    category: string;
  };
}

const GoalForm = ({ onClose, initialGoal }: GoalFormProps) => {
  const { addGoal, updateGoal } = usePersonalGrowth();
  const [formData, setFormData] = useState({
    title: initialGoal?.title || '',
    description: initialGoal?.description || '',
    deadline: initialGoal?.deadline || '',
    category: initialGoal?.category || 'Personal',
    progress: initialGoal?.progress || 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (initialGoal) {
      updateGoal({ ...formData, id: initialGoal.id });
    } else {
      addGoal(formData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">
          {initialGoal ? 'Edit Goal' : 'Create New Goal'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Deadline</label>
            <input
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="Personal">Personal</option>
              <option value="Professional">Professional</option>
              <option value="Health">Health</option>
              <option value="Financial">Financial</option>
            </select>
          </div>
          {initialGoal && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Progress (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={formData.progress}
                onChange={(e) => setFormData({ ...formData, progress: Number(e.target.value) })}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          )}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              {initialGoal ? 'Update Goal' : 'Create Goal'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoalForm; 