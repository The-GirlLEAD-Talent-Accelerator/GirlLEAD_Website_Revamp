const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const BASE   = `https://res.cloudinary.com/${CLOUD}/image/upload`;

export const imgUrl = (path, transforms = "f_auto,q_auto") =>
  `${BASE}/${transforms}/${path}`;

export const faceUrl = (path, size = 200) =>
  `${BASE}/w_${size},h_${size},c_fill,g_face,f_auto,q_auto/${path}`;