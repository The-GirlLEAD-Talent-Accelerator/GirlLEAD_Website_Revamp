import { useEffect, useRef } from "react";

export default function TabVideo({ videoUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [videoUrl]);

  if (!videoUrl) {
    return (
      <div className="w-full aspect-video rounded-2xl bg-bg-mute flex items-center justify-center mb-10">
        <p className="text-text-muted text-sm">Video unavailable</p>
      </div>
    );
  }

  const posterUrl = videoUrl
    .replace("/video/upload/", "/video/upload/so_4,f_jpg/")
    .replace(".mp4", ".jpg");

  return (
    <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-md">
      <video
        ref={videoRef}
        key={videoUrl}
        className="w-full aspect-video"
        controls
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"        
        x5-video-player-type="h5"   
        preload="auto"
        poster={posterUrl}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "100%",
          display: "block",          
        }}
      >
        {/* MP4 with fragment — forces first frame render on iOS */}
        <source src={`${videoUrl}#t=0.001`} type="video/mp4" />
        {/* Fallback without fragment for Android */}
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}