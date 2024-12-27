export default function Testimonials() {
    return (
      <div className="max-w-7xl px-4 py-8">
        <h2 className="max-w-7xl pl-4 ml-4 text-xl md:text-5xl font-bold text-black font-sans">
          Testimonials:
        </h2>
        <div className="grid grid-cols-1 p-6 ml-10 h-80 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              videoSrc: "/video1.mp4",
              title: "Dr Nitin Butani's Story",
              description: "Dr Nitin Butani , Director",
            },
            {
              videoSrc: "/video2.mp4",
              title: "Mr Om Prakash Singh's Story",
              description: "Mr Om Prakash Singh ,High Court Allahabad.",
            },
            {
              videoSrc: "/video3.mp4",
              title: "Dr Dev Raj Singh's Story",
              description: "Dr. Dev Raj Singh , MD at DRS Hospital Prayagraj",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-2xl shadow-black border-4 border-black"
            >
              <video
                className="w-full h-auto"
                controls
                src={item.videoSrc}
                title={item.title}
              ></video>
              <p className="text-center mt-4 text-black font-semibold ">
                {item.title}
              </p>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity pointer-events-none">
                <p className="text-white text-center px-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  