import svgPaths from "./svg-dhtantynu4";
import imgWebsiteLogo2021575XPng1 from "figma:asset/770706d7c99f652ee3ec26e20da9d4a1de672b3b.png";
import imgLightningBanner2048XPng1 from "figma:asset/6bda4d505b9e633d99f77106b03ae2dbec93eaf7.png";
import imgScreenChangeMe from "figma:asset/114305676624c45efb051e56c16cbf7c24b14022.png";
import imgScreenChangeMe2 from "figma:asset/30c7cbbed6e1a7b91edb36fc9ac84a2a9ab2f843.png";
import imgScreenChangeMe4 from "figma:asset/e62f4ea67de0dce0e2d903a8c389655298a7e26e.png";
import imgHomePage from "figma:asset/a03e6a0f31867e121f0fc87d807309674999ee1a.png";
import imgTShirtPage from "figma:asset/e23f6548b16b7070d3761c86af69952f5e74f2f9.png";
import imgTShirtProductPage from "figma:asset/b79e6214019ab0f63d10f63bb8bb7a57cbede0f4.png";
import { imgScreenChangeMe1, imgScreenChangeMe3, imgScreenChangeMe5 } from "./svg-xj7qc";

// --- Icons & Small Graphics ---

function Camera() {
  return (
    <div className="absolute inset-[2.94%_49.73%_96.11%_49.73%]" data-name="Camera">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.68127 3.91364">
        <g id="Camera">
          <path clipRule="evenodd" d={svgPaths.p36b49a80} fill="var(--fill-0, #262C2D)" fillRule="evenodd" id="Oval" />
          <path clipRule="evenodd" d={svgPaths.p2aea6d00} fill="var(--fill-0, #121515)" fillRule="evenodd" id="Oval_2" />
          <path clipRule="evenodd" d={svgPaths.p1333d0f0} fill="var(--fill-0, #636F73)" fillRule="evenodd" id="Oval_3" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function MaterialSymbolsPerson() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3333 25.3333">
        <path d={svgPaths.p30597000} fill="var(--fill-0, black)" id="Vector" />
      </svg>
    </div>
  );
}

function MaterialSymbolsMan() {
  return (
    <div className="mr-[-30px] relative shrink-0 size-[60px]" data-name="material-symbols:man">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="material-symbols:man">
          <path d={svgPaths.pbedb00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaterialSymbolsWoman() {
  return (
    <div className="mr-[-30px] relative shrink-0 size-[60px]" data-name="material-symbols:woman">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="material-symbols:woman">
          <path d={svgPaths.p25dd2680} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

// --- Device Mockups (Simplified for Responsiveness) ---

function DevicesMacBookPro({ screenImage, videoSrc, maskImage }) {
  return (
    <div className="relative w-full max-w-[700px] aspect-[700/400] mx-auto">
      {/* Laptop Frame SVG - Simplified background representation */}
      <div className="absolute inset-0 bg-[#303135] rounded-t-xl" style={{ clipPath: 'inset(0 0 3% 0)' }}>
         {/* Screen Content */}
         <div className="absolute top-[5%] left-[11%] right-[11%] bottom-[10%] bg-black overflow-hidden">
             {videoSrc ? (
                 <video autoPlay className="w-full h-full object-cover" controlsList="nodownload" loop playsInline muted>
                     <source src={videoSrc} />
                 </video>
             ) : (
                 <img src={screenImage} className="w-full h-full object-cover object-top" alt="Screen" />
             )}
         </div>
         <Camera />
      </div>
      {/* Bottom Casing */}
      <div className="absolute bottom-0 left-0 right-0 h-[3%] bg-[#4E4F53] rounded-b-lg"></div>
    </div>
  );
}

// --- Section Components ---

function HeroSection() {
  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden" 
         style={{ backgroundImage: "linear-gradient(245.833deg, rgba(155, 174, 112, 0) 7.7386%, rgba(155, 174, 112, 0.5) 94.578%), linear-gradient(90deg, rgb(210, 186, 182) 0%, rgb(210, 186, 182) 100%)" }}>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        {/* Left: Project Info */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50">
           <div className="space-y-4">
             <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-5xl md:text-6xl text-black">Bleach USA</h1>
             <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xl leading-relaxed text-black/80">
               Bleach is a functional e-commerce site with strong potential. In a crowded clothing market, clear layout and compelling content are key to standing out and driving growth.
             </p>
           </div>
           
           <div className="grid grid-cols-1 gap-4 pt-4 border-t border-black/10">
             <div className="text-lg font-['Plus_Jakarta_Sans',sans-serif]"><strong>Role:</strong> UX Researcher & Designer</div>
             <div className="text-lg font-['Plus_Jakarta_Sans',sans-serif]"><strong>Duration:</strong> 2 weeks</div>
             <div className="text-lg font-['Plus_Jakarta_Sans',sans-serif]"><strong>Platform:</strong> Desktop</div>
           </div>
        </div>

        {/* Right: Hero Image */}
        <div className="w-full lg:w-2/3">
           <DevicesMacBookPro 
              videoSrc="/_videos/v1/b83d12f401710026223fb78375f20b23a219f9f6"
              screenImage={imgScreenChangeMe2}
           />
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center p-4 bg-white/50 rounded-full">
         <p className="font-['Plus_Jakarta_Sans',sans-serif] italic text-black/70">Note: This was a conceptual project done in the GA UX/UI bootcamp</p>
      </div>
    </div>
  );
}

function ProblemSolutionSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Problem Card */}
      <div className="flex-1 bg-[#ebebeb] p-10 rounded-3xl shadow-sm border border-black/5 flex flex-col gap-6">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-3xl text-center">Problem</h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xl leading-relaxed text-[#302b1b]">
          Users struggle to find essential product information—such as material details, size guides, and model photos—and need a more thoughtfully curated shopping experience. Additionally, a lack of clear navigation and brand transparency makes it difficult for users to connect with the brand's identity and values.
        </p>
      </div>

      {/* Solution Card */}
      <div className="flex-1 bg-[#e6e6e6] p-10 rounded-3xl shadow-sm border border-black/5 flex flex-col gap-6">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-3xl text-center">Solution</h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xl leading-relaxed text-[#302b1b]">
          Redesign the top navigation, layout, and search experience to support a more intuitive and informed shopping process. This includes improved product presentation and clear communication of brand ethics.
        </p>
      </div>
    </div>
  );
}

function ResearchSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 space-y-20">
      <div className="text-center">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-5xl mb-4">Research</h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl max-w-3xl mx-auto">
          Conducted 6 interviews with 5 usability test participants to understand shopping behavior, needs, and frustrations.
        </p>
      </div>

      {/* Demographics */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
         <div className="flex flex-col items-center gap-4">
            <div className="flex pl-4">
              <MaterialSymbolsMan />
              <MaterialSymbolsMan />
              <MaterialSymbolsMan />
            </div>
            <p className="text-xl font-['Plus_Jakarta_Sans',sans-serif]">Age: 28 - 50</p>
         </div>
         <div className="flex flex-col items-center gap-4">
            <div className="flex pl-4">
              <MaterialSymbolsWoman />
              <MaterialSymbolsWoman />
              <MaterialSymbolsWoman />
            </div>
            <p className="text-xl font-['Plus_Jakarta_Sans',sans-serif]">Age: 24 - 50</p>
         </div>
      </div>

      {/* Quotes */}
      <div className="space-y-12">
        <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-3xl text-center">Here’s what users had to say...</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             "Quality of the product is the most important thing to me when buying new clothes.",
             "I like when they have the model, and they give the height, weight and what they're wearing. The visual aspect is better than just a description.",
             "I don’t like website difficult to use, with poor-quality photos and a confusing layout.",
             "I prefer a detailed description with size, pictures, and videos when shopping online.",
             "I really appreciate transparency in how products are made and prefers brands that use quality materials."
           ].map((quote, i) => (
             <div key={i} className="bg-[#efefef] p-8 rounded-3xl border border-black/10 flex items-center justify-center text-center min-h-[200px]">
               <p className="font-['Plus_Jakarta_Sans',sans-serif] text-lg italic text-black/80">“{quote}”</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

function UsabilityTestSection() {
  return (
    <div className="w-full bg-[#f9f9f9] py-24">
       <div className="max-w-7xl mx-auto px-4 space-y-16">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-4xl text-center">Usability test of original website</h2>
          
          <div className="max-w-4xl mx-auto text-center space-y-8">
             <p className="text-xl font-['Plus_Jakarta_Sans',sans-serif]">
               Each participant was given a total of <strong>3 tasks</strong> to complete. All tasks were given 1 at a time, so that the user was given ample time to complete each task.
             </p>
             <ol className="list-decimal list-inside text-xl font-['Plus_Jakarta_Sans',sans-serif] text-left inline-block space-y-2">
               <li>Find an item on sale.</li>
               <li>Find a bag or an accessory.</li>
               <li>Find the search button and find “xyz”.</li>
             </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl border border-black/10 text-center min-h-[250px] flex flex-col justify-center">
                <h3 className="font-bold text-5xl mb-4">100%</h3>
                <p className="text-xl">of users requested additional navigation tabs <span className="text-gray-400">(e.g. Sale, Accessories)</span></p>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-black/10 text-center min-h-[250px] flex flex-col justify-center">
                <h3 className="font-bold text-5xl mb-4">66%</h3>
                <p className="text-xl">of users failed the expected task flow.</p>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-black/10 text-center min-h-[250px] flex flex-col justify-center">
                <h3 className="font-bold text-5xl mb-4">100%</h3>
                <p className="text-xl">were unable to locate the search functionality.</p>
             </div>
          </div>
       </div>
    </div>
  );
}

function CompetitiveAnalysis() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 flex flex-col gap-12">
       <div className="text-center space-y-4">
         <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-4xl">Competitive Analysis</h2>
         <p className="text-xl max-w-3xl mx-auto">Benchmarked key e-commerce platforms to assess how product details, filters, and visual content are leveraged to enhance user experience and trust.</p>
       </div>
       
       <div className="flex flex-col lg:flex-row gap-8">
         <div className="flex-1 border-2 border-black rounded-3xl p-10 space-y-6">
            <h3 className="font-bold text-3xl">Feature Inventory</h3>
            <ul className="list-disc pl-5 space-y-4 text-xl">
               <li>Model Photos for context of what the product looks like on a person</li>
               <li>Model Measurements to understand how the item fits on a particular height.</li>
               <li>Detailed descriptions of the item</li>
               <li>Size Guide for those who appreciate certain fit</li>
            </ul>
         </div>
         <div className="flex-1 border-2 border-black rounded-3xl p-10 space-y-6">
            <h3 className="font-bold text-3xl">Task List</h3>
            <ul className="list-disc pl-5 space-y-4 text-xl">
               <li>Shop all</li>
               <li>Accessories tab</li>
               <li>Size Filter</li>
            </ul>
         </div>
       </div>
    </div>
  );
}

function PersonaSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 space-y-16">
      <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-5xl text-center">Synthesis</h2>
      
      <div className="text-center space-y-4">
         <h3 className="font-bold text-4xl">Persona: Alex R.</h3>
         <div className="flex flex-wrap justify-center gap-8 text-xl">
            <span>Age: 28</span>
            <span>Location: Austin, TX</span>
            <span>Occupation: Freelance Creative</span>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="border border-black rounded-2xl p-8 space-y-6">
            <h4 className="font-bold text-2xl text-center">Needs & Goals</h4>
            <ul className="list-disc pl-5 space-y-4 text-lg">
               <li>Access to clear size guides</li>
               <li>Model photography to understand fit</li>
               <li>Effective filtering options</li>
               <li>Transparent material information</li>
            </ul>
         </div>
         <div className="border border-black rounded-2xl p-8 space-y-6">
            <h4 className="font-bold text-2xl text-center">Frustrations</h4>
            <ul className="list-disc pl-5 space-y-4 text-lg">
               <li>Missing or unclear size guides</li>
               <li>Lack of real-life product imagery</li>
               <li>Discrepancy between product quality and price</li>
               <li>Insufficient transparency around materials</li>
               <li>Complicated or unintuitive user interfaces</li>
            </ul>
         </div>
      </div>

      <div className="bg-gray-100 p-12 rounded-3xl text-center space-y-6">
         <h3 className="font-bold text-3xl">Problem Statement</h3>
         <p className="text-2xl leading-relaxed max-w-4xl mx-auto">
            Users need <strong>key details (material, size guide and model photos)</strong> of a product, thoughtfully curated <strong>product organization</strong> and <strong>brand transparency</strong> to better understand a brand's identity and ethics.
         </p>
      </div>
    </div>
  );
}

function DesignSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24 space-y-24">
       <div className="text-center">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-5xl">Design & Ideation</h2>
       </div>

       {/* Wireframes Section (Conceptual) */}
       <div className="space-y-12">
          <div className="text-center space-y-4">
             <h3 className="font-bold text-3xl">Wireframes</h3>
             <p className="text-xl max-w-3xl mx-auto">Integrating ‘Sale’ and ‘Accessories’ into the primary shop navigation improves discoverability and streamlines the browsing experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="aspect-[457/688] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <img src={imgHomePage} className="w-full h-full object-cover" alt="Home Page Wireframe" />
             </div>
             <div className="aspect-[457/688] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <img src={imgTShirtPage} className="w-full h-full object-cover" alt="T-Shirt Page Wireframe" />
             </div>
             <div className="aspect-[457/688] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <img src={imgTShirtProductPage} className="w-full h-full object-cover" alt="Product Page Wireframe" />
             </div>
          </div>
       </div>

       {/* Visual Design */}
       <div className="space-y-16">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-5xl text-center">Visual Design</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             {/* Banner */}
             <div className="rounded-2xl overflow-hidden border border-black">
                 <div className="bg-white p-8 space-y-8">
                     <img src={imgWebsiteLogo2021575XPng1} className="max-w-[200px]" alt="Bleach Logo" />
                     <img src={imgLightningBanner2048XPng1} className="w-full" alt="Banner" />
                     <p className="text-lg">Highlighted banner imagery that aligned with the brand’s messaging and visual identity.</p>
                 </div>
             </div>

             {/* Colors */}
             <div className="space-y-8">
                 <h3 className="font-bold text-3xl">Color Palette</h3>
                 <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border">
                       <div className="w-12 h-12 bg-[#0c0c0c] rounded-full border"></div>
                       <span className="font-bold text-xl">#0C0C0C</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border">
                       <div className="w-12 h-12 bg-[#d0d1d1] rounded-full border"></div>
                       <span className="font-bold text-xl">#D0D1D1</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border">
                       <div className="w-12 h-12 bg-[#f9de30] rounded-full border"></div>
                       <span className="font-bold text-xl">#F9DE30</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border">
                       <div className="w-12 h-12 bg-[#9c9d9d] rounded-full border"></div>
                       <span className="font-bold text-xl">#9C9D9D</span>
                    </div>
                 </div>
             </div>
          </div>
       </div>
    </div>
  );
}

function FinalResults() {
  return (
    <div className="w-full bg-[#f5f5f5] py-24">
       <div className="max-w-7xl mx-auto px-4 space-y-20">
          <div className="text-center space-y-6">
             <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-5xl">Final Results & Takeaways</h2>
             <p className="text-2xl max-w-4xl mx-auto">
                No design is flawless from the start — iteration is essential to refining and elevating the user journey.
             </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-10 rounded-3xl text-center space-y-4 shadow-sm">
                <h3 className="font-bold text-5xl">75%</h3>
                <p className="text-xl">of participants successfully completed tasks.</p>
             </div>
             <div className="bg-white p-10 rounded-3xl text-center space-y-4 shadow-sm">
                <h3 className="font-bold text-5xl">25%</h3>
                <p className="text-xl">encountered issues completing the checkout process.</p>
             </div>
             <div className="bg-white p-10 rounded-3xl text-center space-y-4 shadow-sm">
                <h3 className="font-bold text-5xl">100%</h3>
                <p className="text-xl">agreed the design improvements worked.</p>
             </div>
          </div>

          {/* Mockups */}
          <div className="space-y-12">
             <div className="text-center max-w-3xl mx-auto">
                <p className="text-xl">
                   With these findings in mind, I redesigned areas that needed further improvement while adding features to enhance the search experience.
                </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <DevicesMacBookPro videoSrc="/_videos/v1/afe9a24a417442a676b6c3317ea245fcb1f17008" screenImage={imgScreenChangeMe5} />
                 <DevicesMacBookPro videoSrc="/_videos/v1/00c06191d6b2d2684100e42865e500fa0d83ce1a" screenImage={imgScreenChangeMe5} />
             </div>
          </div>

          {/* Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-4">
                <h3 className="font-bold text-2xl">The importance of design systems</h3>
                <p className="text-lg leading-relaxed">
                   Creating a design system in the beginning allows myself as a designer to not worry about backtracking. Taking time to build the foundation will keep the design leveled, allowing for the creative and analytic process to flow freely.
                </p>
             </div>
             <div className="space-y-4">
                <h3 className="font-bold text-2xl">User needs aren’t always centered around design</h3>
                <p className="text-lg leading-relaxed">
                   Users need information, both visual and text, in order to fully delve into a product or services they may be unfamiliar with. Transparency builds trust.
                </p>
             </div>
          </div>
       </div>
    </div>
  );
}

export default function CaseStudiesBleach() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <HeroSection />
      <ProblemSolutionSection />
      <ResearchSection />
      <UsabilityTestSection />
      <CompetitiveAnalysis />
      <PersonaSection />
      <DesignSection />
      <FinalResults />
    </div>
  );
}
