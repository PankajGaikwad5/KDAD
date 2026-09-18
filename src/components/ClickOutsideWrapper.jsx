'use client';
import { useRouter } from 'next/navigation';

const ClickOutsideWrapper = ({ children, carouselElement, className, innerClassName }) => {
  const router = useRouter();

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      router.push('/projects');
    }
  };

  return (
    <div
      onClick={handleClick}
      className={className || 'w-full h-screen flex items-center justify-center '}
    >
      <div className={innerClassName || ''} onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default ClickOutsideWrapper;
{
  /* <div className='hidden'>
  <h1>Karan Desai</h1>
  <h1>Karan Desai Acrhitect + Design</h1>
  <h1>Karan Desai Acrhitect</h1>
  <h2>Interior Designer</h2>
  <h2>Architect</h2>
  <h1>Karan Desai Home</h1>
  <h2>Designer</h2>
  <h2>Serafini</h2>
  <h2>Casa walls</h2>
  <h2>Dimensions</h2>
  <h2>Top Brewer</h2>
  <h2>Gattoo</h2>
  <h2>Monster</h2>
  <p>Discover the innovative architectural designs of Karan Desai Home</p>
  <p>
    Karan Desai Award Winning Architecture + Interior Design Studio | TedX
    Speaker Karan DesaiBorn in 1987, a passionate founder of his eponymous
    studio, KARAN DESAI | Architecture + Design, focusing on Architecture,
    Interiors & furniture designing, KD started off with his individual practice
    right after he gave his Thesis in 2011 from Pillai’s college of architecture
    & founded the company in 2012. The internship under Ar. Ashiesh Shah during
    a year drop in 2007, carved a path for his career with a clear direction
    towards his goals & dreams which he lives today. The Studio has spread its
    wings in Mangalore, Goa, Delhi, Kullu - Manali, Uttarakhand, Kolkata,
    Chennai and plan to continue. Inspired by contemporary aesthetics and clean
    lines, the studio beautifies projects both residential and commercial on
    varying scales. From ideation rooms to offices , homes to private getaways,
    the team designs projects and products in close association with clients to
    deliver unique results and reflect personal tastes with consolidating the
    studio’s vision. We're also doing projects internationally, We've completed
    working on the order of 20,000 sq.ft. in Chicago and currently working on
    15,000 sq.ft Mansion in Washington, D.C.
  </p>
  <p>
    "Imagine transforming everyday spaces into rich, immersive experiences—what
    if art became a part of your daily life?" Karan Desai Home is a testament to
    bringing the experience through meticulously crafted furniture and products.
    KDH specialises in creating art pieces that are not only visually striking
    but also serve a functional purpose. Following the success of our Monster
    collection in 2022, we have consistently expanded our portfolio,
    collaborating with renowned industry leaders such as The Quarry, Casa Walls,
    Bharat Flooring, and more. Our dedication to design innovation has earned us
    international recognition, including a prestigious partnership with Serafini
    (Italy). With a commitment to global collaborations and a mission to craft
    extraordinary designs, KDH continues to redefine functional art. Our unique
    approach and creative philosophy aim to inspire and captivate, bringing
    exceptional products to life.
  </p>
  <p>
    'KDAD', 'Karan Desai', 'Karan Desai Architecture and Design', 'modern
    architecture', 'contemporary architecture', 'innovative architecture',
    'creative architecture', 'architectural design', 'modern design',
    'sustainable architecture', 'eco-friendly design', 'residential
    architecture', 'commercial architecture', 'interior design', 'architectural
    portfolio', 'design studio', 'urban design', 'minimalist design',
    'award-winning architecture', 'architecture firm', 'creative design
    solutions', 'luxury architecture', 'modern building design', 'architectural
    innovation', 'architectural trends', 'design inspiration', 'architectural
    projects',
  </p>
  <p>https://karandesaihome.com</p>
</div>;
'/Picture1.jpg',
  '/assets/2.jpg',
  '/assets/3.jpg',
  '/assets/4.jpg',
  '/assets/bg5.jpg',
  '/assets/bg6.jpg',
  '/assets/bg7.jpg',
  '/assets/bg8.jpg',
  '/assets/bg9.jpg',
  '/assets/bg10.jpg',
  '/assets/bg11.jpg', */
}
