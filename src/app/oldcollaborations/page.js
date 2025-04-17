// import React from 'react';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
// import { Poppins, Montserrat } from 'next/font/google';

// // popins
// // montserrat
// const popins = Poppins({
//   subsets: ['latin'], // Specify subsets
//   weight: ['400', '600', '700'], // Specify weight
// });
// const montserrat = Montserrat({
//   subsets: ['latin'], // Specify subsets
//   weight: ['400', '600', '700'], // Specify weight
// });

// const Collaborations = () => {
//   return (
//     <div>
//       <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
//       <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
//         <Navbar isBgBlack={true} />
//         <div className='text-white flex flex-col items-center justify-center mb-8'>
//           <h1
//             className={`text-3xl border-b-4 tracking-wider border-pink-800 mb-8 font-semibold uppercase ${montserrat.className}`}
//           >
//             Collaborations
//           </h1>
//           <div className='w-full relative p-8 rounded-2xl max-w-4xl 2xl:max-w-7xl grid grid-cols-1 sm:grid-cols-2  gap-12 text-center my-4'>
//             <div className='flex justify-center items-center'>
//               <img src='/collabs/query.png' alt='' className='object-cover' />
//             </div>
//             <div className='flex justify-center items-center mt-5'>
//               <img
//                 src='https://www.topbrewernyc.com/wp-content/uploads/2023/06/TopBrewer-logo-white.png'
//                 alt=''
//                 className='object-cover'
//               />
//             </div>
//             <div className='flex justify-center items-center'>
//               <img
//                 src='https://3.imimg.com/data3/CH/KI/MY-5246137/bharat-floorings-logo-120x120.jpg'
//                 alt=''
//                 className='object-cover'
//               />
//             </div>
//             <div className='flex justify-center items-center'>
//               <img
//                 src='https://foremostmarbles.com/wp-content/uploads/2021/09/FM-LOGO-copy-1536x292.png'
//                 alt=''
//                 className='object-cover'
//               />
//             </div>
//             <div className='flex justify-center items-center'>
//               <img src='/collabs/casa.webp' alt='' className='object-cover' />
//             </div>
//             <div className='flex justify-center items-center '>
//               <img
//                 src='/collabs/serafini.png'
//                 alt=''
//                 className='object-cover '
//               />
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Collaborations;

'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CustomCarousel from '../../components/CarouselComp';
import { Poppins, Montserrat } from 'next/font/google';
import { collabs } from '../../components/collabs';
import { X } from 'lucide-react';

const popins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const Collaborations = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project.images);
    // console.log(project.images);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <div className='text-white flex flex-col items-center justify-center mb-8'>
          <h1
            className={`text-3xl border-b-4 tracking-wider border-pink-800 mb-8 font-semibold uppercase ${montserrat.className}`}
          >
            Collaborations
          </h1>
          <div className='w-full relative p-8 rounded-2xl max-w-4xl 2xl:max-w-7xl grid grid-cols-1 sm:grid-cols-2 gap-12 text-center my-4'>
            {collabs.map((project) => (
              <div
                key={project._id.$oid || project._id}
                className='flex justify-center items-center'
              >
                <img
                  src={project.images[0]?.fileUrl}
                  alt={project.title}
                  className='object-cover cursor-pointer'
                  onClick={() => openModal(project)}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>

      {selectedProject && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'>
          <button
            className='absolute top-14 left-14 z-10 text-white text-4xl font-bold'
            onClick={closeModal}
            aria-label='Close modal'
          >
            <X size={40} />
          </button>
          <div className='relative w-full max-w-4xl p-4'>
            <CustomCarousel
              imgArray={selectedProject.map((image) => image.fileUrl)}
            />
          </div>
          {/* <a
            href='/kdad'
            className='absolute right-20 bottom-14 underline  z-10 tracking-widest text-blue-600'
          >
            know more
          </a> */}
        </div>
      )}
    </div>
  );
};

export default Collaborations;
