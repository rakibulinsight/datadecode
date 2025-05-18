import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export default function PolicyModal({ isOpen, onClose, type }: PolicyModalProps) {
  const title = type === 'privacy' ? 'Privacy Policy' : 'Terms of Service';

  const content = type === 'privacy' ? (
    <>
      <h3 className="text-lg font-semibold mb-6 text-primary/90">1. Information We Collect</h3>
      <p className="mb-6 text-gray-300">
        We collect information that you provide directly to us, including but not limited to:
        personal information, contact details, and data analytics requirements when you use our services.
        This information helps us deliver personalized and efficient data science solutions.
      </p>

      <h3 className="text-lg font-semibold mb-6 text-primary/90">2. How We Use Your Information</h3>
      <p className="mb-4 text-gray-300">
        We use the information we collect to provide, maintain, and improve our services,
        develop new features, and protect our users. We also use this information to:
      </p>
      <ul className="list-none space-y-3 mb-6 text-gray-300">
        <li className="flex items-center">
          <span className="text-primary mr-2">▹</span>
          Deliver the specific data science and analytics services you request
        </li>
        <li className="flex items-center">
          <span className="text-primary mr-2">▹</span>
          Communicate with you about your projects and provide customer support
        </li>
        <li className="flex items-center">
          <span className="text-primary mr-2">▹</span>
          Send you technical notices and security updates
        </li>
        <li className="flex items-center">
          <span className="text-primary mr-2">▹</span>
          Analyze trends and improve our services
        </li>
      </ul>

      <h3 className="text-lg font-semibold mb-6 text-primary/90">3. Data Security</h3>
      <p className="mb-6 text-gray-300">
        We implement appropriate technical and organizational measures to protect your data
        against unauthorized access, alteration, disclosure, or destruction. Our security
        practices are regularly updated to ensure the highest level of data protection.
      </p>

      <h3 className="text-lg font-semibold mb-6 text-primary/90">4. Your Rights</h3>
      <p className="mb-6 text-gray-300">
        You have the right to access, correct, or delete your personal information at any time.
        Contact us at privacy@datadecode.ai to exercise these rights or learn more about
        our data protection practices.
      </p>
    </>
  ) : (
    <>
      <h3 className="text-lg font-semibold mb-6 text-primary/90">1. Acceptance of Terms</h3>
      <p className="mb-6 text-gray-300">
        By accessing and using our services, you agree to be bound by these Terms of Service
        and all applicable laws and regulations. These terms govern your use of our data
        science and analytics services.
      </p>

      <h3 className="text-lg font-semibold mb-6 text-primary/90">2. Services Description</h3>
      <p className="mb-4 text-gray-300">
        We provide comprehensive data science and analytics services, including but not limited to:
      </p>
      <ul className="list-none space-y-3 mb-6 text-gray-300">
        <li className="flex items-center">
          <span className="text-primary mr-2">▹</span>
          Advanced data analysis and visualization
        </li>
        <li className="flex items-center">
          <span className="text-primary mr-2">▹</span>
          Custom machine learning model development
        </li>
        <li className="flex items-center">
          <span className="text-primary mr-2">▹</span>
          Statistical analysis and predictive modeling
        </li>
        <li className="flex items-center">
          <span className="text-primary mr-2">▹</span>
          Business intelligence and data strategy consulting
        </li>
      </ul>

      <h3 className="text-lg font-semibold mb-6 text-primary/90">3. Intellectual Property</h3>
      <p className="mb-6 text-gray-300">
        All content, features, and functionality of our services are owned by us
        and are protected by international copyright, trademark, and other intellectual property laws.
        Any unauthorized use of our intellectual property is strictly prohibited.
      </p>

      <h3 className="text-lg font-semibold mb-6 text-primary/90">4. Limitation of Liability</h3>
      <p className="mb-6 text-gray-300">
        We strive to provide accurate and reliable services, but we cannot guarantee
        the results or outcomes of our data analysis. Our liability is limited to
        the extent permitted by applicable law.
      </p>
    </>
  );

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl bg-dark-400 p-8 text-left align-middle shadow-xl transition-all border border-primary/20">
                <div className="absolute right-4 top-4">
                  <button
                    type="button"
                    className="rounded-full p-2 text-gray-400 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-dark-400"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <Dialog.Title as="h2" className="text-2xl font-bold text-white mb-8 flex items-center">
                  <span className="text-primary mr-2">⚡</span>
                  {title}
                </Dialog.Title>

                <div className="mt-2 prose prose-invert max-w-none">
                  {content}
                </div>

                <div className="mt-8 flex justify-end space-x-4">
                  <button
                    type="button"
                    className="rounded-md bg-dark-500 px-6 py-2.5 text-sm font-semibold text-gray-300 shadow-sm hover:bg-dark-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-300"
                    onClick={onClose}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-300"
                    onClick={onClose}
                  >
                    I Agree
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}