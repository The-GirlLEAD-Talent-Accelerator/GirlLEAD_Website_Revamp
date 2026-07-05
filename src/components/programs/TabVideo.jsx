import { useState, useEffect } from "react";

export default function TabVideo({ videoKey }) {
  const [videoUrl, setVideoUrl] = useState(null);
  const [posterUrl, setPosterUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!videoKey) return;

    setLoading(true);
    setError(false);
    setVideoUrl(null);

    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/media/video?key=${encodeURIComponent(videoKey)}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch video");
        return res.json();
      })
      .then(data => {
        setVideoUrl(data.videoUrl);
        setPosterUrl(data.posterUrl ?? null);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [videoKey]);

  if (loading) {
    return (
      <div className="w-full aspect-video rounded-2xl bg-bg-mute animate-pulse mb-10" />
    );
  }

  if (error || !videoUrl) {
    return (
      <div className="w-full aspect-video rounded-2xl bg-bg-mute flex items-center justify-center mb-10">
        <p className="text-text-muted text-sm">Video unavailable</p>
      </div>
    );
  }

  return (
    <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-md">
      <video
        key={videoUrl}      // forces re-mount when tab changes
        className="w-full aspect-video"
        controls
        preload="metadata"
        poster={posterUrl ?? undefined}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}