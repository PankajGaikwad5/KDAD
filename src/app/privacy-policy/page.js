import { Poppins, Montserrat } from 'next/font/google';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Privacy Policy | Karan Desai Architecture + Design',
  description:
    'Privacy Policy for Karan Desai Architecture + Design. Learn how we collect, use, and protect your personal data through Google Analytics, Google Search Console, and our contact forms.',
  alternates: {
    canonical: 'https://karandesai.in/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className='relative min-h-screen text-gray-200'>
      {/* Background Blur Overlay */}
      <div className='project-bg fixed inset-0 z-0 opacity-25 blur-md' />

      {/* Content Wrapper */}
      <div className='relative z-10 flex flex-col min-h-screen bg-transparent'>
        {/* Navbar */}
        <header className='fixed top-0 w-full z-50'>
          <Navbar isBgBlack={true} />
        </header>

        <main className={`flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${poppins.className}`}>
          <div className='mx-auto max-w-3xl bg-black/40 backdrop-blur-md p-6 sm:p-10 rounded-xl border border-gray-800 shadow-xl'>
            <h1 className={`text-3xl sm:text-4xl font-semibold uppercase tracking-wider text-white border-b-2 border-gray-800 pb-4 mb-8 ${montserrat.className}`}>
              Privacy Policy
            </h1>
            <p className='text-xs text-gray-400 mb-6'>Last Updated: July 4, 2026</p>

            <div className='space-y-6 text-sm sm:text-base leading-relaxed text-gray-300'>
              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>1. Introduction</h2>
                <p>
                  Welcome to Karan Desai Architecture + Design (KDAD). We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://karandesai.in" className="text-white underline">karandesai.in</a>, use our services, or fill out our contact and career forms.
                </p>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>2. Information We Collect</h2>
                <p className='mb-3'>
                  We collect personal data that you voluntarily provide to us, as well as certain data automatically when you interact with our website.
                </p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>
                    <strong>Personal Data Provided by You:</strong> Through our contact and application forms, we collect information you fill in, including your name, email address, the reason for contact (client connection or career application), position title, message, and any files you choose to upload (such as resumes, portfolios, or CVs).
                  </li>
                  <li>
                    <strong>Automatically Collected Data:</strong> When you browse our site, we collect technical data such as your IP address, browser type, operating system, device details, and info about your pages visited. This is collected through cookies and tracking pixels.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>3. How We Use Your Information</h2>
                <p className='mb-3'>We use the collected information for various purposes, including to:</p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Respond to your inquiries, questions, or requests submitted via our contact forms.</li>
                  <li>Process, evaluate, and respond to your job applications and uploaded resume/portfolio files.</li>
                  <li>Monitor, analyze, and optimize website traffic, search ranking performance, and user behavior using analytics tools (such as <strong>Google Analytics</strong> and <strong>Google Search Console</strong>).</li>
                  <li>Measure the effectiveness of our marketing initiatives and deliver relevant advertising using tools like the <strong>Meta Pixel</strong>.</li>
                  <li>Maintain the security, functionality, and integrity of our website.</li>
                </ul>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>4. Third-Party Integrations & Cookies</h2>
                <p className='mb-3'>
                  We use third-party analytics and marketing services to help us understand site usage and run digital campaigns. These service providers may use cookies, web beacons, and other tracking technologies to collect data over time across different websites:
                </p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>
                    <strong>Google Analytics:</strong> We use Google Analytics to track user behavior, page views, and user demographics. This information is anonymized and used for statistical purposes. You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
                  </li>
                  <li>
                    <strong>Google Search Console:</strong> Helps us monitor and resolve website indexing issues and optimize search query visibility.
                  </li>
                  <li>
                    <strong>Meta Pixel (Facebook Pixel):</strong> Measures the effectiveness of social media advertisements and tracks actions taken on our site to optimize marketing campaigns.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>5. Data Sharing and Security</h2>
                <p className='mb-3'>
                  We do not sell, rent, or lease your personal information to third parties. We may share your data with trusted partners and cloud services solely to facilitate communication, host our website, process application files, and analyze site metrics.
                </p>
                <p>
                  We implement industry-standard security measures (such as SSL encryption) to protect your personal data from unauthorized access, modification, or disclosure. However, no internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>6. Your Rights</h2>
                <p className='mb-3'>
                  Depending on your jurisdiction, you may have the following rights regarding your personal data:
                </p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>The right to access the personal data we hold about you.</li>
                  <li>The right to request the correction or updating of inaccurate data.</li>
                  <li>The right to request the deletion of your personal data.</li>
                  <li>The right to withdraw your consent to data processing (e.g., by disabling cookies in your browser settings).</li>
                </ul>
                <p className='mt-3'>
                  To exercise any of these rights, please contact us at <a href="mailto:info@karandesai.in" className="text-white underline font-semibold">info@karandesai.in</a>.
                </p>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>7. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Any updates will be posted on this page with an updated date.
                </p>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>8. Contact Us</h2>
                <p>
                  If you have questions, comments, or concerns about this Privacy Policy or our data collection practices, please contact us:
                </p>
                <p className='mt-2 font-semibold text-white'>
                  Karan Desai Architecture + Design<br />
                  Email: <a href="mailto:info@karandesai.in" className="underline">info@karandesai.in</a><br />
                  Address: Shah Industrial Estate, 1001 PARINEE I, 7-A, Andheri West, Mumbai, Maharashtra 400053
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
