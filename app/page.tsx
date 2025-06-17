import {
  ArrowRight,
  Sparkle,
  Sparkles,
  Users,
  Mic,
  Code,
  Coffee,
  MessageCircle,
} from "lucide-react";

// Speaker data
const speakers = [
  {
    name: "Hahnbee Lee",
    title: "Co-Founder @ Mintlify",
    website: "https://mintlify.com/",
    websiteText: "mintlify.com",
    image: "/lee.jpg", // Placeholder for now
  },
  {
    name: "Aiden Bai",
    title: "Founder @ Same.dev",
    website: "https://same.dev/",
    websiteText: "same.dev",
    image: "/bai.jpg", // Placeholder for now
  },
];

export default function Hero() {
  return (
    <div className="relative bg-white">
      <section className="relative min-h-[1340px] flex flex-col bg-[url('/hello.png')] bg-cover bg-center p-4">
        <div className="absolute h-[705px] w-full right-0 bottom-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="flex flex-col items-center justify-center mt-56">
          <h1 className="text-4xl md:text-7xl font-semibold text-black tracking-tighter font-inter">
            Women Builders
          </h1>
          <h2 className="text-3xl md:text-6xl font-medium text-black tracking-tighter font-inter italic mt-2">
            The After Party
          </h2>

          <div className="h-px w-full max-w-xs my-12  bg-black" />

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl md:text-2xl font-medium text-black tracking-tighter font-inter">
              June 18, 2025 · 2:30 PM - 4:30 PM
            </h3>
          </div>
          <a
            href="https://lu.ma/9o2p8m3j?tk=XSBBIk"
            target="_blank"
            className="mt-4 text-center px-4 py-2 rounded-xl border text-xl font-medium transition-all tracking-tighter text-black w-full max-w-md"
          >
            RSVP Now
            <ArrowRight className="size-4 inline-block ml-2" />
          </a>
        </div>
      </section>

      {/* Event Overview Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tighter font-inter mb-8 max-w-4xl text-balance mx-auto">
            Join us for an afterparty following Y Combinator's
            <span className="italic"> YC AI Startup School</span> 🥰
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Come hang out with interns, engineers, and fellow founders &
            builders! We'll also allocate time for those building to demo their
            startups and projects 🛠️
          </p>
        </div>
      </section>

      {/* Speaker Sessions Section */}
      <section className="relative py-24 px-6 lg:px-8 bg-gray-50 border">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tighter font-inter mb-4">
              🥳 Mini Speaker Sessions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Right side speakers grid */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {speakers.map((speaker, index) => (
                <div key={index} className="bg-white rounded-3xl p-4 border">
                  <div className="flex flex-row">
                    <div>
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="h-24 w-24 aspect-square rounded-xl object-cover mr-4 bg-gray-200"
                      />
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black tracking-tighter">
                            {speaker.name}
                          </h3>
                          <p className="text-gray-700 text-sm">
                            {speaker.title}
                          </p>
                        </div>
                      </div>
                      {speaker.website && (
                        <a
                          href={speaker.website}
                          target="_blank"
                          className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
                        >
                          {speaker.websiteText}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-sm text-center mx-auto mt-8">
            + More to be announced!
          </p>
        </div>
      </section>

      {/* Demo Time Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="rounded-xl p-4 smp-12 md:py-24 lg:py-36 bg-[url('/CardThree.png')] bg-cover bg-center border">
            <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tighter font-inter mb-6">
              Demo Your Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-balance">
              Building something amazing? We've reserved dedicated time for
              founders and builders to showcase their startups and projects to
              the community!
            </p>
            <div className="mt-8 h-12">
              <a
                href="https://lu.ma/9o2p8m3j?tk=XSBBIk"
                target="_blank"
                className="mt-4 block w-full text-center px-4 py-2 rounded-xl border text-xl font-medium transition-all tracking-tighter text-black max-w-lg mx-auto"
              >
                RSVP Now
                <ArrowRight className="size-4 inline-block ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="relative py-24 px-6 lg:px-8 bg-gray-50 border">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-black tracking-tighter font-inter mb-4">
            Thank you to our amazing sponsors!
          </h2>

          <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-4 sm:max-w-xl sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="bg-white rounded-2xl p-8 border text-center h-full flex flex-col justify-between">
              <img
                alt="Mintlify"
                src="/Mint.png"
                width={158}
                height={48}
                className="max-h-10 w-full object-contain mb-6 mt-8"
              />
              <p className="text-gray-700 leading-relaxed">
                The next generation of documentation. AI-native, beautiful
                out-of-the-box, and built for developers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border text-center h-full flex flex-col justify-between">
              <img
                alt="Koel Labs"
                src="/KoelLabs.svg"
                width={2480}
                height={1208}
                className="max-h-24 w-full object-contain mb-6"
              />
              <p className="text-gray-700 leading-relaxed">
                Innovates accessible speech technology and to help you master
                language pronunciation using classic movie scenes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border text-center h-full flex flex-col justify-between">
              <img
                alt="Same.dev"
                src="/same.svg"
                width={248}
                height={120}
                className="max-h-9 w-full object-contain mb-6 mt-8"
              />
              <p className="text-gray-700 leading-relaxed">
                A product that lets you make anything by letting you build
                fullstack web apps with just a single prompt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food & Logistics Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="rounded-xl p-4 smp-12 md:py-24 lg:py-36 bg-[url('/CardFour.png')] bg-cover bg-center border">
            <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-tighter font-inter mb-6">
              Lunch & Snacks Provided
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-balance">
              We've got you covered! Enjoy delicious food and refreshments while
              you network and connect with fellow builders.
            </p>
            <div className="mt-8 h-12">
              <a
                href="https://lu.ma/9o2p8m3j?tk=XSBBIk"
                target="_blank"
                className="mt-4 block w-full text-center px-4 py-2 rounded-xl border text-xl font-medium transition-all tracking-tighter text-black max-w-lg mx-auto"
              >
                RSVP Now
                <ArrowRight className="size-4 inline-block ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative min-h-[1440px] flex flex-col bg-[url('/Goodbye.png')] bg-cover bg-center p-4">
        <div className="absolute h-96 w-full right-0 bottom-0 bg-gradient-to-t from-white to-transparent" />
        <div className="flex flex-col items-center justify-center absolute bottom-56 right-0 left-0">
          <h1 className="text-4xl md:text-7xl font-semibold text-black tracking-tighter font-inter text-center">
            See You Soon! 😊
          </h1>
          <p className="text-lg text-center md:text-xl text-gray-700 leading-relaxed text-balance mt-4">
            Questions? Reach out to Hawa for any questions about the event!
          </p>
        </div>
      </section>
    </div>
  );
}
