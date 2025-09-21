// Using actual portfolio picture from local folder
const heroImage = "/portfolio-picture.jpg";

export function Hero() {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-[0.9] tracking-tight">
            Hey There,
            <br />I'm Jino
          </h1>
          
          <div className="space-y-6 max-w-md">
            <p className="text-base leading-relaxed text-black">
              A passionate full-stack developer and designer
              who creates meaningful digital experiences
              through clean code and thoughtful design.
            </p>
            
            <p className="text-sm leading-relaxed text-gray-500">
              I specialize in building modern web
              applications from concept to deployment,
              combining technical expertise with creative
              vision to deliver exceptional user experiences.
            </p>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md">
            <img 
              src={heroImage}
              alt="Jino Butaslac Professional Photo"
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}