import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div>
      <div className="min-h-[50vh] flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl font-bold mb-6">
            Launch Your SaaS in Lightning Speed ⚡
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            A complete starter kit with everything you need to launch your SaaS
            product. Authentication, payments, and essential features - all set
            up and ready to go.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-12">
            Join our thriving community
          </h2>

          {/* Moved styles to globals.css */}
          <div className="relative">
            <div className="flex space-x-8 infinite-scroll">
              {/* First set of cards */}
              <div className="inline-flex space-x-8">
                <div className="w-72 shrink-0 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c1.325 0 2.4 1.075 2.4 2.4S13.325 9.6 12 9.6 9.6 8.525 9.6 7.2 10.675 4.8 12 4.8zM12 20.4c-3.314 0-6-2.686-6-6h12c0 3.314-2.686 6-6 6z" />
                    </svg>
                    <h3 className="text-lg font-semibold">50,000+</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Active Developers
                  </p>
                </div>

                <div className="w-72 shrink-0 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.25 15.75l-7.5-4.5v-9l7.5 4.5v9z" />
                    </svg>
                    <h3 className="text-lg font-semibold">1M+</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Projects Created
                  </p>
                </div>

                <div className="w-72 shrink-0 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    </svg>
                    <h3 className="text-lg font-semibold">150+</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Countries Worldwide
                  </p>
                </div>

                <div className="w-72 shrink-0 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
                    </svg>
                    <h3 className="text-lg font-semibold">24/7</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Support Available
                  </p>
                </div>
              </div>

              {/* Duplicate set for seamless scrolling */}
              <div className="inline-flex space-x-8">
                <div className="w-72 shrink-0 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c1.325 0 2.4 1.075 2.4 2.4S13.325 9.6 12 9.6 9.6 8.525 9.6 7.2 10.675 4.8 12 4.8zM12 20.4c-3.314 0-6-2.686-6-6h12c0 3.314-2.686 6-6 6z" />
                    </svg>
                    <h3 className="text-lg font-semibold">50,000+</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Active Developers
                  </p>
                </div>

                <div className="w-72 shrink-0 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.25 15.75l-7.5-4.5v-9l7.5 4.5v9z" />
                    </svg>
                    <h3 className="text-lg font-semibold">1M+</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Projects Created
                  </p>
                </div>

                <div className="w-72 shrink-0 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-purple-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    </svg>
                    <h3 className="text-lg font-semibold">150+</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Countries Worldwide
                  </p>
                </div>

                <div className="w-72 shrink-0 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="h-8 w-8 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
                    </svg>
                    <h3 className="text-lg font-semibold">24/7</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Support Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Our platform provides all the essential tools and features to help
              you build, launch and grow your SaaS business.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Analytics Dashboard"
                className="rounded-2xl object-cover"
              />
              <h3 className="mt-6 text-lg font-semibold">Powerful Analytics</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Track your key metrics and make data-driven decisions with our
                comprehensive analytics dashboard.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team Collaboration"
                className="rounded-2xl object-cover"
              />
              <h3 className="mt-6 text-lg font-semibold">Team Collaboration</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Work seamlessly with your team using our built-in collaboration
                tools and real-time updates.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Customer Support"
                className="rounded-2xl object-cover"
              />
              <h3 className="mt-6 text-lg font-semibold">24/7 Support</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Get help when you need it with our dedicated support team and
                extensive documentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Pricing />
    </div>
  );
}
