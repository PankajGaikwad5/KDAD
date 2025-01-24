'use client';

import { useState } from 'react';
import { UploadButton } from '../../utils/uploadthing';

export default function NewProject() {
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const projectsUrl = '/api/projects';
  const featuresUrl = '/api/features';

  const handleUploadComplete = (res) => {
    if (res) {
      const uploadedImages = res.map((file) => ({
        fileName: file.name,
        fileUrl: file.url,
      }));
      setImages((prev) => [...prev, ...uploadedImages]);
      alert('Images uploaded successfully');
    }
  };

  const handleSubmit = async () => {
    console.log(images);
    const payload = { title, images };

    try {
      const response = await fetch(featuresUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          images,
        }),
      });

      if (response.ok) {
        alert('Project saved successfully');
        setTitle('');
        setImages([]);
      } else {
        alert('Failed to save project');
      }
    } catch (error) {
      console.error('Error submitting project:', error);
      alert('An error occurred while saving the project');
    }
  };

  return (
    <main className='flex flex-col items-center justify-center p-10 text-white'>
      <h1 className='text-2xl mb-4'>Create New Project</h1>
      <div className='mb-4'>
        <label className='block mb-2'>Title:</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='p-2 border rounded w-full text-black'
          placeholder='Enter project title'
        />
      </div>
      <div className='mb-4'>
        <UploadButton
          endpoint='imageUploader'
          onClientUploadComplete={handleUploadComplete}
          onUploadError={(error) => alert(`Upload error: ${error.message}`)}
        />
      </div>
      <ul className='mb-4'>
        {images.map((img, index) => (
          <li key={index} className='mb-2'>
            {img.fileName} -{' '}
            <a href={img.fileUrl} target='_blank'>
              View
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        Save Project
      </button>
    </main>
  );
}
