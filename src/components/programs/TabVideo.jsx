// src/components/programs/TabVideo.jsx
export default function TabVideo({ videoUrl }) {
  if (!videoUrl) {
    return (
      <div className="w-full aspect-video rounded-2xl bg-bg-mute flex items-center justify-center mb-10">
        <p className="text-text-muted text-sm">Video unavailable</p>
      </div>
    );
  }

  // Auto-generate poster from the same Cloudinary video URL
  const posterUrl = videoUrl.replace("/video/upload/", "/video/upload/so_3,f_jpg/").replace(".mp4", ".jpg");

  return (
    <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-md">
      <video
        key={videoUrl}
        className="w-full aspect-video"
        controls
        preload="metadata"
        poster={posterUrl}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

