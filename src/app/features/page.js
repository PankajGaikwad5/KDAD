// 'use client';
// import React, { useState, useEffect } from 'react';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
// import ProjectCard from '../../components/ProjectCard';

// const Features = () => {
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

//     const fetchAndPreloadFeatures = async () => {
//       try {
//         const response = await fetch('/api/features');
//         const data = await response.json();
//         const featureImages = data.features.map(
//           (feature) => feature.images[0].fileUrl
//         );

//         // Preload all feature images before updating the state
//         await preloadImages(featureImages);

//         setImgArray(data.features); // Only update the state after preloading is complete
//       } catch (error) {
//         console.error('Error fetching or preloading features:', error);
//       }
//     };

//     fetchAndPreloadFeatures();
//   }, []);

//   return (
//     <div>
//       <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
//       <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
//         <Navbar isBgBlack={true} />
//         <div className='text-white flex flex-col items-center justify-center mb-8 md:ml-12'>
//           <h1 className='text-3xl font-bold border-b-4 border-pink-800 mb-8 tracking-widest font-sans uppercase'>
//             Features
//           </h1>
//           <div className='w-full relative max-w-4xl grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 text-center my-4'>
//             {imgArray.map((items, index) => {
//               const { _id, images, title } = items;

//               return (
//                 <ProjectCard
//                   key={index}
//                   img={images[0].fileUrl}
//                   id={_id}
//                   title={title}
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

// export default Features;

'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

const Features = () => {
  const [imgArray, setImgArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeatures = async () => {
    try {
      const response = await fetch('/api/features');
      const data = await response.json();
      setImgArray(data.features);
    } catch (error) {
      console.error('Error fetching features:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <div className='text-white flex flex-col items-center justify-center mb-8 md:ml-12'>
          <h1 className='text-3xl font-bold border-b-4 border-pink-800 mb-8 tracking-widest font-sans uppercase'>
            Features
          </h1>
          {loading ? (
            <p>Loading please wait...</p>
          ) : (
            <div className='w-full relative max-w-4xl 2xl:max-w-[80%] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 text-center my-4'>
              {imgArray.map((item, index) => {
                const { _id, images, title } = item;
                return (
                  <ProjectCard
                    key={index}
                    img={images[0].fileUrl}
                    id={_id}
                    title={title}
                  />
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

export default Features;
