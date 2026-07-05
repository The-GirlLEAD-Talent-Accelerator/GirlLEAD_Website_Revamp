import { useEffect, useRef } from "react";

export default function TabVideo({ videoUrl }) {
  const videoRef = useRef(null);

  // Force video to reload when URL changes — fixes mobile frozen frame bug
  useEffect(() => {
    if (videoRef.current && videoUrl) {
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

  // Auto-generate poster from the same Cloudinary video URL
  const posterUrl = videoUrl
    .replace("/video/upload/", "/video/upload/so_1,f_jpg/")
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
        preload="auto"
        poster={posterUrl}
        style={{ objectFit: "contain" }}
      >
        <source src={`${videoUrl}#t=0.001`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}