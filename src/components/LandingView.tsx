import React from 'react';
import { motion } from 'motion/react';

interface LandingViewProps {
  onStartGame: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onStartGame }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="z-[100] w-full h-12 bg-twg-blue-dark flex items-center top-0 sticky border-b-4 border-black">
        <div className="mx-auto w-full lg:w-[1024px] px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 border-white/20 border-2 rounded-md px-2 py-0.5">
             <div className="w-5 h-4 bg-transparent flex items-center justify-center">
                <svg viewBox="0 0 45 44" className="w-full h-full fill-white">
                  <path d="M147.686,2.467l1.1,10.133,0,.024.025,1.191a1.557,1.557,0,0,0,.309.9,71.733,71.733,0,0,0,6.17,7.065.96.96,0,0,0,1.385-.014Q158.433,19.9,160.141,18q.87-.964,1.734-1.932a5.947,5.947,0,0,0,1.3-1.815,2.987,2.987,0,0,0,.1-1.114c-.024-.419-.019-.844-.035-1.264-.021-.549-.079-1.111-.063-1.661v-.038l.815-8.641a.29.29,0,0,0-.065-.209L163.4.486a.956.956,0,0,0-.946-.48l-7.287.814-5.858.348a1.3,1.3,0,0,0-.712.264l-.812.782a.276.276,0,0,0-.038.038.284.284,0,0,0-.066.215" transform="translate(-134.262 0)"></path>
                </svg>
             </div>
             <span className="text-white font-bold text-sm tracking-tight font-fredoka">Team Wood Games</span>
          </div>
          <div className="bg-[#fb8500] text-white px-2 py-0.5 rounded border-2 border-black font-black text-xs cursor-pointer uppercase shadow-[0_2px_0_black]">
            Log-in
          </div>
        </div>
      </div>

      {/* Main Content with Background */}
      <div 
        className="flex-1 bg-top bg-repeat-y"
        style={{ 
          backgroundImage: 'url("https://teamwoodgames.com/_app/immutable/assets/bg-field-repeat-y-2.C7Pn_Sjy.png")',
          backgroundSize: 'auto 560px'
        }}
      >
        <div 
           className="h-full bg-top bg-repeat-x flex flex-col items-center"
           style={{ 
             backgroundImage: 'url("https://teamwoodgames.com/_app/immutable/assets/bg-field.DUq5fO31.png")',
             backgroundSize: 'auto 550px'
           }}
        >
          <div className="mx-auto w-full lg:w-[1024px] py-8 px-4 flex flex-col items-center gap-6">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-4"
            >
              <img 
                className="max-h-64 h-48 md:h-64 drop-shadow-[0_4px_0_rgba(0,0,0,0.1)]" 
                alt="Super Auto Pets Logo" 
                src="https://teamwoodgames.com/_app/immutable/assets/sap-logo.CNMEb302.png" 
              />
            </motion.div>

            {/* Play Game Box */}
            <div className="bg-white rounded-md border-black border-4 border-b-8 p-4 w-full max-w-[550px]">
              <h2 className="font-lapsus text-2xl text-center mb-4">Play Game</h2>
              <div className="flex flex-wrap justify-center gap-2">
                <button className="w-24 md:w-28 h-9 btn-variant-orange">
                  <span className="text-xl font-lapsus">Steam</span>
                </button>
                <a 
                  href="https://github.com/nelsonjerry123/pinto/releases/download/aaaa/Super.Auto.Pets.apk"
                  className="w-24 md:w-28 h-9 btn-variant-orange"
                >
                  <span className="text-xl font-lapsus">Android</span>
                </a>
                <button className="w-24 md:w-28 h-9 btn-variant-orange">
                  <span className="text-xl font-lapsus">iOS</span>
                </button>
                <button onClick={onStartGame} className="w-24 md:w-28 h-9 btn-variant-orange">
                  <span className="text-xl font-lapsus">Browser</span>
                </button>
              </div>
            </div>

            {/* Video Iframe Section */}
            <div className="w-full max-w-[650px]">
              <div className="border-black border-4 border-b-8 rounded shadow-lg overflow-hidden">
                <iframe 
                  className="w-full aspect-video" 
                  src="https://www.youtube-nocookie.com/embed/m5EcJ2nZWC4" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Social Stuff Box */}
            <div className="bg-white rounded-md border-black border-4 border-b-8 p-4 w-full max-w-[550px]">
              <h2 className="font-lapsus text-2xl text-center mb-4">Social Stuff</h2>
              <div className="flex flex-wrap justify-center gap-2">
                <button className="w-24 md:w-28 h-9 btn-variant-orange"><span className="text-xl font-lapsus">Discord</span></button>
                <button className="w-24 md:w-28 h-9 btn-variant-orange"><span className="text-xl font-lapsus">YouTube</span></button>
                <button className="w-24 md:w-28 h-9 btn-variant-orange"><span className="text-xl font-lapsus">Email</span></button>
                <button className="w-24 md:w-28 h-9 btn-variant-orange"><span className="text-xl font-lapsus">Twitter</span></button>
              </div>
            </div>
            
            {/* Minimal Footer Inside Main Content */}
            <div className="text-center text-[10px] text-white font-bold mt-2 space-y-0.5 pb-8">
                <p>© 2025 Team Wood Games ApS</p>
                <p className="underline opacity-80 cursor-pointer">Privacy policy - Terms of service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
