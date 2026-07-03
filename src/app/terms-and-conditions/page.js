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
  title: 'Terms and Conditions | Karan Desai Architecture + Design',
  description:
    'Terms and Conditions for accessing and using the website of Karan Desai Architecture + Design. Learn about copyright, liability, and acceptable use guidelines.',
  alternates: {
    canonical: 'https://karandesai.in/terms-and-conditions',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditions() {
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
              Terms & Conditions
            </h1>
            <p className='text-xs text-gray-400 mb-6'>Last Updated: July 4, 2026</p>

            <div className='space-y-6 text-sm sm:text-base leading-relaxed text-gray-300'>
              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>1. Acceptance of Terms</h2>
                <p>
                  By accessing and browsing the website of Karan Desai Architecture + Design (KDAD) at <a href="https://karandesai.in" className="text-white underline">karandesai.in</a> ("Website"), you agree to comply with and be bound by these Terms & Conditions. If you do not agree to all of these terms, please do not use this Website.
                </p>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>2. Intellectual Property Rights</h2>
                <p className='mb-3'>
                  All content featured or displayed on this Website—including, but not limited to, architectural drawings, blueprints, interior designs, project photographs, concepts, 3D renderings, logos, trademarks, text, graphics, and custom source code—is the exclusive intellectual property of Karan Desai Architecture + Design unless otherwise stated.
                </p>
                <p>
                  This content is protected by Indian and international copyright, trademark, patent, and trade dress laws. You are strictly prohibited from copying, reproducing, distributing, publishing, downloading, displaying, modifying, or transmitting any material from this Website for commercial or public use without obtaining prior, express written permission from KDAD.
                </p>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>3. Permitted and Prohibited Uses</h2>
                <p className='mb-3'>
                  You are granted a limited, non-exclusive, non-transferable license to access the Website and view its portfolio and design elements for personal, informational, and non-commercial purposes.
                </p>
                <p className='mb-3'>You agree not to use the Website for any of the following prohibited activities:</p>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Submitting false, inaccurate, or misleading information via contact or career forms.</li>
                  <li>Attempting to gain unauthorized access to our web servers, database, or backend services.</li>
                  <li>Using any automated system (including robots, spiders, scrapers) to extract content or data from this Website.</li>
                  <li>Uploading viruses, malware, or other malicious code through our upload forms.</li>
                  <li>Engaging in any conduct that disrupts, degrades, or interferes with the performance and operations of the Website.</li>
                </ul>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>4. Disclaimers & Accuracy of Information</h2>
                <p className='mb-3'>
                  The architectural drawings, specifications, project details, publications, and articles published on this Website are for general informational purposes only. While we make every effort to maintain accurate and up-to-date information, KDAD does not warrant or represent that the content is error-free, complete, or fully current.
                </p>
                <p>
                  Specific project details, materials, space layouts, and measurements are subject to change and should not be used as official design plans or advice without directly consulting KDAD.
                </p>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>5. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, Karan Desai Architecture + Design, its founder, partners, and employees shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from (i) your access to or use of (or inability to access or use) the Website; (ii) any content or information accessed through the Website; or (iii) any unauthorized access to our systems or transmissions.
                </p>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>6. Governing Law and Jurisdiction</h2>
                <p>
                  These Terms & Conditions are governed by and construed in accordance with the laws of India. Any dispute, claim, or controversy arising out of or in connection with the use of this Website shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra, India.
                </p>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>7. Modifications to Terms</h2>
                <p>
                  We reserve the right to revise or update these Terms & Conditions at any time without prior notice. The updated terms will be published on this page with an updated revision date. Your continued use of the Website after modifications are posted signifies your agreement to the updated Terms & Conditions.
                </p>
              </section>

              <section>
                <h2 className={`text-xl font-medium text-white mb-3 ${montserrat.className}`}>8. Contact Us</h2>
                <p>
                  For any clarifications regarding these Terms & Conditions, please reach out to us:
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
