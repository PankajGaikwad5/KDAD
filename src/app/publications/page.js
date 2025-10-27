'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';
import { Poppins, Montserrat } from 'next/font/google';
import { features } from '../../components/features';
import Image from 'next/image';

// popins
// montserrat
const popins = Poppins({
  subsets: ['latin'], // Specify subsets
  weight: ['400', '600', '700'], // Specify weight
});
const montserrat = Montserrat({
  subsets: ['latin'], // Specify subsets
  weight: ['400', '600', '700'], // Specify weight
});

const Features = () => {
  const [imgArray, setImgArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const articles = [
    {
      id: 1,
      text: `KIAHMOI Boutique Salon`,
      image: '/articles/amazingarchitecture.webp',
      link: `https://amazingarchitecture.com/beauty-salon/kiahmoi-boutique-salon-bandra-west-mumbai-india-by-karan-desai-architecture-design`,
    },
    {
      id: 2,
      text: `THE DREAM WEAVER`,
      image: '/articles/elledecor.webp',
      link: `https://elledecor.in/article/the-dream-weaver-architect-karan-desai-talks-about-this-south-mumbai-home-that-was-perhaps-written-in-his-destiny-and-realised-at-a-time-he-least-expected-to/`,
    },
    {
      id: 3,
      text: `Kiahmoi`,
      image: '/articles/archello.webp',
      link: `https://archello.com/project/kiahmoi`,
    },
    {
      id: 4,
      text: `The Dream Home`,
      image: '/articles/archello.webp',
      link: `https://archello.com/project/the-dream-home`,
    },
    {
      id: 5,
      text: `A salon serenity`,
      image: '/articles/commercialdesign.webp',
      link: `https://www.commercialdesignindia.com/projects/a-salon-serenity-karan-desai-architecture-design-presents-kiahmoi-salon-mumbai`,
    },
    {
      id: 6,
      text: `Kiahmoi`,
      image: '/articles/designessential.webp',
      link: `https://designessentiamagazine.com/kiahmoi-karan-desai-studio/`,
    },
    {
      id: 7,
      text: `Stairway to style elevate your home`,
      image: '/articles/goodhomesindia.webp',
      link: `https://www.goodhomes.co.in/home-and-design-trends/stairway-to-style-elevate-your-home-with-these-unique-stair-design-ideas-8633-2.html`,
    },
    {
      id: 8,
      text: `How to make a small living room luxurious`,
      image: '/articles/livingetc.webp',
      link: `https://www.livingetc.com/advice/how-to-make-a-small-living-room-look-luxurious`,
    },
    {
      id: 9,
      text: `Karan Desai renders a unique spin on the interiors of this salon`,
      image: '/articles/arcitectureplusdesign.webp',
      link: `https://www.architectureplusdesign.in/architecture/karan-desai-renders-a-unique-spin-on-the-interiors-of-this-salon-with-distinctive-innovative-and-contemporary-forms/`,
    },
    {
      id: 10,
      text: `The Dream Project`,
      image: '/articles/designessential.webp',
      link: `https://designessentiamagazine.com/the-dream-project-karan-desai-studio-architecturedesign/`,
    },
    {
      id: 11,
      text: `5 ways to upgrade your home aesthetics`,
      image: '/articles/goodhomesindia.webp',
      link: `https://www.goodhomes.co.in/design-and-style/5-ways-to-upgrade-your-home-aesthetics-with-chic-window-dressing-ideas-8660.html`,
    },
    {
      id: 12,
      text: `From Automated Windows to Curved Walls`,
      image: '/articles/surfacesreporter.webp',
      link: `https://surfacesreporter.com/articles/164873/from-automated-windows-to-curved-walls-the-unique-features-of-karan-desais-mumbai-home-karan-desai-studio`,
    },
    {
      id: 13,
      text: `The Dream home`,
      image: '/articles/volumezero.webp',
      link: `https://volzero.com/articles/view/the-dream-home-by-karan-desai-studio-architecturedesign`,
    },
    {
      id: 14,
      text: `Dream with the sunset hues that stain this avant-garde Mumbai home`,
      image: '/articles/architectandinteriorsindia.webp',
      link: `https://www.architectandinteriorsindia.com/projects/dream-with-the-sunset-hues-that-stain-this-avant-garde-mumbai-home`,
    },
    {
      id: 15,
      text: `We asked prolific architects and designers to share a rule of design they swore by`,
      image: '/articles/arcitectureplusdesign.webp',
      link: `https://www.architectureplusdesign.in/ad-exclusives/prolific-architects-and-designers-share-a-rule-of-design-they-swore-by/`,
    },
    {
      id: 16,
      text: `Master the art of salon design`,
      image: '/articles/commercialdesign.webp',
      link: `https://www.commercialdesignindia.com/insights/master-the-art-of-salon-design-expert-tips-for-a-thriving-business`,
    },
    {
      id: 17,
      text: `How to update your home with trendy, home textiles`,
      image: '/articles/indiatoday.webp',
      link: `https://www.indiatoday.in/magazine/supplements/home/story/20230703-how-to-update-your-home-with-trendy-home-textiles-2396961-2023-06-23`,
    },
    {
      id: 18,
      text: `A captivating escape into luxury and artistry`,
      image: '/articles/acedesignsense.webp',
      link: `https://www.acedesignsense.com/a-captivating-escape-into-luxury-and-artistry/`,
    },
    {
      id: 19,
      text: `KiahServe the soul with the softness of Dharampur’s sensorial cavemoi`,
      image: '/articles/architectandinteriorsindia.webp',
      link: `https://www.architectandinteriorsindia.com/projects/serve-the-soul-with-the-softness-of-dharampurs-sensorial-cave`,
    },
    {
      id: 20,
      text: `The Dream Home  by architect Karan Desai`,
      image: '/articles/arcitectureplusdesign.webp',
      link: `https://www.architectureplusdesign.in/design/the-dream-home-by-architect-karan-desai-is-a-stunning-residential-marvel-that-transcends-conventional-boundaries/`,
    },
    {
      id: 21,
      text: `Maximize light and style: Top bathroom window design ideas`,
      image: '/articles/beautifulhomes.webp',
      link: `https://www.beautifulhomes.com/magazine/home-decor-advice/design-and-style/maximize-light-and-style-top-bathroom-window-design-ideas.html?navsrc=All%20Categories`,
    },
    {
      id: 22,
      text: `Karan Desai Home Unveils Unique Marble Furniture Collection`,
      image: '/articles/realityplus.webp',
      link: `https://www.rprealtyplus.com/allied/karan-desai-home-unveils-unique-marble-furniture-collection-111293.html`,
    },
    {
      id: 23,
      text: `Marble Furniture Collection – Matilda by Karan Desai`,
      image: '/articles/rethinkingfuture.webp',
      link: `https://www.re-thinkingthefuture.com/residentail-interior-design/marble-furniture-collection-matilda-by-karan-desai/`,
    },
    {
      id: 24,
      text: `Strokes of sea and personalisation: Karan Desai`,
      image: '/articles/elledecor.webp',
      link: `https://elledecor.in/article/seaside-home-by-karan-desai-office-and-party-pad-marine-lines/?utm_source=instagram&utm_medium=post&utm_campaign=karan_desai&utm_id=19august2023&utm_content=later-37276856`,
    },
    {
      id: 25,
      text: `Smart gyms are creating waves in the hospitality industry`,
      image: '/articles/hotelierindia.webp',
      link: `https://www.hotelierindia.com/design/smart-gyms-are-creating-waves-in-the-hospitality-industry`,
    },
    {
      id: 26,
      text: `Gentle Colours & Soft Furnishings`,
      image: '/articles/indiadesign.webp',
      link: `https://indiadesignid.com/gentle-colours-soft-furnishings-add-to-the-serene-ambience-of-this-dharampur-home/`,
    },
    {
      id: 27,
      text: `Agra Fort Project`,
      image: '/articles/archello.webp',
      link: `https://archello.com/project/agra-fort`,
    },
    {
      id: 28,
      text: `Inspiring kitchen entrance designs for modern lifestyles`,
      image: '/articles/beautifulhomes.webp',
      link: `https://www.beautifulhomes.asianpaints.com/blogs/kitchen-entrance-design-ideas.html`,
    },
    {
      id: 29,
      text: `The Moody Wood Flooring Trend`,
      image: '/articles/housedigest.webp',
      link: `https://www.housedigest.com/1396763/smoked-wood-floors-trend-2023/`,
    },
  ];

  // const fetchFeatures = async () => {
  //   try {
  //     const response = await fetch('/api/features');
  //     const data = await response.json();
  //     setImgArray(data.features);
  //   } catch (error) {
  //     console.error('Error fetching features:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchFeatures();
  // }, []);

  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <div className='text-white flex flex-col items-center justify-center mb-8 md:ml-12'>
          <h1
            className={`text-3xl tracking-wider border-b-4 border-pink-800 mb-8 font-semibold uppercase ${montserrat.className}`}
          >
            publications
          </h1>
          <div className='flex gap-4  flex-col w-full justify-center items-center'>
            <h2
              className={`text-2xl w-full text-center max-w-[60%] tracking-wider border-b-4 border-pink-800 my-8 font-semibold uppercase ${montserrat.className}`}
            >
              Articles
            </h2>
            <div className='w-full relative max-w-[54rem] 2xl:max-w-[80%] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-colsp-8 text-center my-4'>
              {articles.map((item) => {
                const { id, image, link, text } = item;
                return (
                  <div
                    key={id}
                    className='flex justify-center items-center flex-col gap-5 my-8'
                  >
                    <a href={link} target='_blank'>
                      <Image
                        width={170}
                        height={170}
                        src={image}
                        alt={`article image: ${item.text}`}
                      />
                    </a>
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='flex gap-4  flex-col w-full justify-center items-center'>
            <h2
              className={`text-2xl w-full text-center max-w-[60%] tracking-wider border-b-4 border-pink-800 my-14 font-semibold uppercase ${montserrat.className}`}
            >
              magazines
            </h2>
            {loading ? (
              <p>Loading please wait...</p>
            ) : (
              <div className='w-full relative max-w-[54rem] 2xl:max-w-[80%] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 text-center my-4'>
                {features.map((item, index) => {
                  const { _id, images, title } = item;
                  return (
                    <ProjectCard
                      key={index}
                      priority={index < 3}
                      img={images[0].fileUrl}
                      id={_id}
                      title={title}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Features;
