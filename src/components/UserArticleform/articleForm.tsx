import { useState,useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface BlogFormData {
//   id: string;
  title: string;
  category: string[];
  description: string;
  coverImage: string;
  content: string;
}

async function createBlog(blogData: BlogFormData) {
  const response = await fetch('http://localhost:3001/blogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...blogData,
      date: new Date().toISOString(),
    }),
  });

  if (!response.ok) throw new Error('Failed to create blog');
  return response.json();
}

function useCreateBlog() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      queryClient.invalidateQueries({ queryKey: ['blog'] });
    },
  });
}

export function BlogForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<string[]>([]);
  const [coverImage, setCoverImage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false)

  const { mutate, isPending, isError, error } = useCreateBlog();

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setContent('');
    setCategory([]);
    setCoverImage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   
    mutate(
      {
        title,
        category,
        description,
        coverImage,
        content,
      },
      {
        onSuccess: () => {
          console.log('Blog created successfully!');
          setShowSuccess(true);
          resetForm();  
        },
      }
    );
  };
 
 
  const handleCategoryToggle = (cat: string) => {
    setCategory(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

 
  if (showSuccess) {
    return (
      <div className="p-6 bg-green-100 border border-green-400 rounded-lg">
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Blog Created Successfully! 
        </h3>
        <p className="text-green-700">Your blog has been added.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>

      <div>
        <label className="block font-bold mb-2">Title:</label>
        <input
          autoComplete="on"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter blog title"
          required
        />
      </div>

      <div>
        <label className="block font-bold mb-2">Description:</label>
        <textarea
          autoComplete="on"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter blog description"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block font-bold mb-2">Content:</label>
        <textarea
          autoComplete="on"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter blog content (use double line breaks for paragraphs)"
          rows={5}
          required
        />
      </div>

      <div>
        <label className="block font-bold mb-2">Cover Image URL:</label>
        <input
          autoComplete="on"
          type="url"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="https://example.com/image.jpg"
          required
        />
      </div>

      <div>
        <label className="block font-bold mb-2">
          Categories: <span className="text-red-500">*</span>
        </label>
        <div className="space-y-1">
          {['TECH', 'FINANCE', 'HEALTH', 'EDUCATION'].map(cat => (
            <label key={cat} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={category.includes(cat)}
                onChange={() => handleCategoryToggle(cat)}
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
        {category.length === 0 && (
          <p className="text-sm text-gray-500 mt-1">
            Select at least one category
          </p>
        )}
      </div>

      {isError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error: {error.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending || category.length === 0}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isPending ? 'Creating...' : 'Create Blog'}
      </button>
    </form>
  );
}