// 'use client';
// import ProjectCard from '../../components/ProjectCard';
// import Footer from '../../components/Footer';
// import Navbar from '../../components/Navbar';
// import React, { useEffect, useState } from 'react';

// const Projects = () => {
//   const [imgArray, setImgArray] = useState([]);

//   useEffect(() => {
//     const preloadImages = (imageUrls) => {
//       return Promise.all(
//         imageUrls.map((url) => {
//           return new Promise((resolve, reject) => {
//             const img = new Image();
//             img.src = url;
//             img.onload = resolve; // Resolve the promise when the image is loaded
//             img.onerror = reject; // Reject if there’s an error loading the image
//           });
//         })
//       );
//     };

//     const fetchAndPreloadProjects = async () => {
//       try {
//         const response = await fetch('/api/projects');
//         const data = await response.json();
//         const projectImages = data.projects.map(
//           (project) => project.images[0].fileUrl
//         );

//         // Preload all project images before updating the state
//         await preloadImages(projectImages);

//         setImgArray(data.projects); // Only update the state after preloading is complete
//       } catch (error) {
//         console.error('Error fetching or preloading projects:', error);
//       }
//     };

//     fetchAndPreloadProjects();
//   }, []);

//   return (
//     <div>
//       <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md '></div>
//       <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
//         <Navbar isBgBlack={true} />
//         <div className='text-white flex flex-col items-center justify-center mb-8'>
//           <h1 className='text-3xl  border-b-4 border-pink-800 font-bold mb-8 tracking-widest font-sans uppercase \'>
//             Projects
//           </h1>
//           <div className='w-full relative max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-4'>
//             {imgArray.map((items, index) => {
//               const { _id, images, title } = items;

//               return (
//                 <ProjectCard
//                   key={index}
//                   img={images[0].fileUrl}
//                   id={_id}
//                   title={title}
//                   projects={true}
//                 />
//               );
//             })}
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Projects;

'use client';
import ProjectCard from '../../components/ProjectCard';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [imgArray, setImgArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setImgArray(data.projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <div className='text-white flex flex-col items-center justify-center mb-8'>
          <h1 className='text-3xl font-bold border-b-4 border-pink-800 mb-8 tracking-widest font-sans uppercase'>
            Projects
          </h1>
          {loading ? (
            <p>Loading please wait...</p>
          ) : (
            <div className='w-full relative max-w-3xl 2xl:max-w-[80%] sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center my-4 flex overflow-x-auto md:overflow-visible pb-4 mt-28 sm:mt-auto'>
              {imgArray.map((item, index) => {
                const { _id, images, title } = item;

                return (
                  <div
                    className='md:w-full min-w-[300px] md:min-w-0 mx-2'
                    key={index}
                  >
                    <ProjectCard
                      key={index}
                      img={images[0].fileUrl}
                      id={_id}
                      title={title}
                      projects={true}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
