// 'use client';
// import React, { useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { CardBody, CardContainer, CardItem
//  } from './ui/3d-card';

// const ProjectCard = ({ img, id, title, projects }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     rootMargin: '200px', // Start loading images slightly before they come into view
//   });
//   const [isLoaded, setIsLoaded] = useState(false); // Track the loading state of the image

//   const handleImageLoad = () => {
//     setIsLoaded(true); // Set to true when the image finishes loading
//   };

//   return (
//     <div ref={ref}>
//       <div className='relative group rounded-sm overflow-hidden'>
//         {projects ? (
//           <a href={`/projectdetails/${id}`}>
//             {/* Placeholder while loading */}
//             {!isLoaded && (
//               <div className='flex items-center justify-center rounded-3xl bg-gray-600 animate-pulse aspect-video'>
//                 <p className='text-gray-500'>Loading...</p>
//               </div>
//             )}
//             {/* Actual image */}
//             {inView && (
//               <img
//                 src={img}
//                 alt={title || 'Project Image'}
//                 loading='lazy'
//                 className={`rounded-xl transform transition-transform duration-500 ${
//                   isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//                 }`}
//                 onLoad={handleImageLoad}
//               />
//             )}
//           </a>
//         ) : (
//           <a href={`/featuredetails/${id}`}>
//             {!isLoaded && (
//               <div className='flex items-center justify-center bg-gray-600 animate-pulse aspect-[8/11]'>
//                 <p className='text-gray-500'>Loading...</p>
//               </div>
//             )}
//             {inView && (
//               <img
//                 src={img}
//                 alt={title || 'Feature Image'}
//                 loading='lazy'
//                 className={` transform transition-transform duration-500 ${
//                   isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//                 }`}
//                 onLoad={handleImageLoad}
//               />
//             )}
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
'use client';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const ProjectCard = ({ img, id, title, projects }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px', // Start loading images slightly before they come into view
  });
  const [isLoaded, setIsLoaded] = useState(false); // Track the loading state of the image

  const handleImageLoad = () => {
    setIsLoaded(true); // Set to true when the image finishes loading
  };

  return (
    <div ref={ref}>
      <CardContainer className='relative group rounded-sm overflow-hidden inter-var'>
        <CardBody className=' relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl border  '>
          {projects ? (
            <a href={`/projectdetails/${id.$oid}`}>
              {/* Placeholder while loading */}
              {!isLoaded && (
                <div className='flex items-center justify-center rounded-3xl bg-gray-600 animate-pulse aspect-video'>
                  <p className='text-gray-500'>Loading...</p>
                </div>
              )}
              {/* Actual image */}
              {inView && (
                <CardItem
                  translateZ='100'
                  rotateX={20}
                  rotateZ={-10}
                  className='w-full '
                >
                  <img
                    src={img}
                    alt={title || 'Project Image'}
                    loading='lazy'
                    className={`rounded-xl transform hover:scale-150 transition-transform duration-500 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    onLoad={handleImageLoad}
                  />
                </CardItem>
              )}
            </a>
          ) : (
            <a href={`/featuredetails/${id.$oid}`}>
              {!isLoaded && (
                <div className='flex items-center justify-center bg-gray-600 animate-pulse aspect-[8/11]'>
                  <p className='text-gray-500'>Loading...</p>
                </div>
              )}
              {inView && (
                <CardItem
                  translateZ='100'
                  rotateX={20}
                  rotateZ={-10}
                  className='w-full '
                >
                  <img
                    src={img}
                    alt={title || 'Feature Image'}
                    loading='lazy'
                    className={` transform transition-transform
                      hover:scale-150 duration-500 ${
                        isLoaded
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-95'
                      }`}
                    onLoad={handleImageLoad}
                  />
                </CardItem>
              )}
            </a>
          )}
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default ProjectCard;
