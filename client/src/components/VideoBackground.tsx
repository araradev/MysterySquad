import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Function to toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Function to toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    // Set up video
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.addEventListener("loadeddata", () => {
        setVideoLoaded(true);
      });
    }

    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => {
          setVideoLoaded(true);
        });
      }
    };
  }, []);

  return (
    <>
      {/* Video Background with overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-dark bg-opacity-50 z-10"></div>
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/couple-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <source src="/video/couple-background.mp4" type="video/mp4" />
        
        {/* Video controls */}
        <div className="absolute bottom-4 right-4 z-20 bg-dark bg-opacity-50 rounded-full p-2 flex space-x-2">
          <button 
            className="text-white hover:text-primary transition-colors focus:outline-none"
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button 
            className="text-white hover:text-primary transition-colors focus:outline-none"
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoBackground;
