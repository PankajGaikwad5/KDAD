import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PublicationsClient from '../../components/ClientComponents/PublicationsClient';
import { features } from '../../components/features';

export const metadata = {
  title: 'Karan Desai Publications | Articles and Magazines',
  description:
    'Explore the published articles, magazine features, and media coverage of Karan Desai Architecture + Design. Discover award-winning architectural and interior design projects by Karan Desai, featured in leading publications showcasing innovation, luxury, and timeless design.',
  openGraph: {
    title: 'Karan Desai Publications | Articles and Magazines',
    description:
      'Explore the published articles, magazine features, and media coverage of Karan Desai Architecture + Design. Discover award-winning architectural and interior design projects by Karan Desai, featured in leading publications showcasing innovation, luxury, and timeless design.',
    type: 'website',
  },
  keywords: [
    'architecture',
    'design',
    'publications',
    'articles',
    'magazines',
    'kdad',
    'kiakMoi',
    'elle decor',
    'archhello',
    'commercial design',
    'design essentia',
    'goodhomes india',
    'livingetc',
    'architecture + design',
    'surfaces reporter',
    'volume zero',
    'vol zero',
    'architect and interiors india',
    'india today',
    'ace design sense',
    'asian paints',
    'realityplus',
    'rethinking the future',
    'hotelier india',
    'india design',
    'house digest',
    'hello india',
  ],
};

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

export default function Publications() {
  return (
    <div>
      <div className='project-bg fixed w-full h-full m-0 p-0 z-0 opacity-25 blur-md'></div>
      <div className='relative overflow-hidden md:pt-14 px-4 tracking-widest z-10'>
        <Navbar isBgBlack={true} />
        <PublicationsClient articles={articles} features={features} />
        <Footer />
      </div>
    </div>
  );
}
