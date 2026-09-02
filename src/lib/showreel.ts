// Real Daniekeys Studios client motion work + graphics samples, hosted on
// Cloudinary. Single source of truth for the homepage FeaturedWorkSection, the
// /portfolio Motion Reel, and the /showreel page.
//
// Cloudinary delivery is optimised at the URL level:
//   - video: `q_auto` (adaptive quality) + a width cap so the muted autoplay
//     preview stays light; the lightbox pulls a larger `lightboxSrc`.
//   - images: `f_auto,q_auto` (modern format + adaptive quality) + width cap.
// The `.mp4` extension is kept for universal <video> compatibility.
//
// TITLES ARE DERIVED FROM THE CLOUDINARY FILENAMES — they are best-guess
// labels, not confirmed campaign names. Correct them here before launch.

const BASE = "https://res.cloudinary.com/www-daniekeys-com";

const video = (path: string, width: number) =>
  `${BASE}/video/upload/q_auto,w_${width}/${path}.mp4`;

// First frame as a poster image so the card is never blank before buffering,
// and so it's what shows under prefers-reduced-motion.
const poster = (path: string) =>
  `${BASE}/video/upload/so_0,f_auto,q_auto,w_960/${path}.jpg`;

const image = (path: string, width: number) =>
  `${BASE}/image/upload/f_auto,q_auto,w_${width}/${path}.jpg`;

export type ClipOrientation = "landscape" | "portrait";

export interface ShowreelClip {
  id: string;
  title: string;
  category: string;
  orientation: ClipOrientation;
  src: string; // capped-width preview used for muted inline autoplay
  lightboxSrc: string; // larger variant for the unmuted fullscreen modal
  poster: string;
}

interface RawClip {
  id: string;
  title: string;
  category: string;
  orientation: ClipOrientation;
  path: string; // Cloudinary public id including the `v…/` version segment
}

const RAW_CLIPS: RawClip[] = [
  {
    id: "animated-beverage-commercial",
    title: "Animated Beverage Commercial",
    category: "Commercial",
    orientation: "landscape",
    path: "v1788314554/Animated_beverage_commercial_mot__202609010015_hahebe",
  },
  {
    id: "fast-food-commercial-storyboard",
    title: "Fast-Food Commercial Storyboard",
    category: "Commercial",
    orientation: "landscape",
    path: "v1788314554/Fast-food_commercial_storyboard___202608312056_x5wffs",
  },
  {
    id: "lovable-brand-spot",
    title: "Lovable — Brand Spot",
    category: "Product / Brand",
    orientation: "landscape",
    path: "v1788314559/LOVABLE_-REFINED_hpbllf",
  },
  {
    id: "pastel-teen-assassin-anime-sequence",
    title: "Pastel Teen Assassin — Anime Sequence",
    category: "Anime / Stylised",
    orientation: "landscape",
    path: "v1788314554/Pastel_teen_assassin_anime_sequence_202609010007_xcyazh",
  },
  {
    id: "character-walk-cycle",
    title: "Character Walk Cycle",
    category: "Motion Graphics",
    orientation: "landscape",
    path: "v1788314554/Character_walking_in_motion_grap__202608312339_ebhqay",
  },
  {
    id: "medbankr-app",
    title: "MedBankr App",
    category: "Product / App",
    orientation: "landscape",
    path: "v1788314560/MEDBANKR_APP_2_u90w2g",
  },
  {
    id: "mars-concept-film",
    title: "Mars — Concept Film",
    category: "Motion Graphics",
    orientation: "landscape",
    path: "v1787222316/mars_wyl4ag",
  },
  {
    id: "vertical-motion-sample",
    title: "Vertical Motion Sample",
    category: "Social / Vertical",
    orientation: "portrait",
    path: "v1788315696/Video_20260825_053726_601_fef35o",
  },
];

export const showreelClips: ShowreelClip[] = RAW_CLIPS.map((clip) => {
  const previewWidth = clip.orientation === "portrait" ? 720 : 1280;
  const lightboxWidth = clip.orientation === "portrait" ? 1080 : 1600;
  return {
    id: clip.id,
    title: clip.title,
    category: clip.category,
    orientation: clip.orientation,
    src: video(clip.path, previewWidth),
    lightboxSrc: video(clip.path, lightboxWidth),
    poster: poster(clip.path),
  };
});

export interface GraphicSample {
  id: string;
  title: string;
  src: string;
  lightboxSrc: string;
}

interface RawGraphic {
  id: string;
  title: string;
  path: string;
}

const RAW_GRAPHICS: RawGraphic[] = [
  {
    id: "poster-concept-01",
    title: "Poster Concept 01",
    path: "v1788315684/Gemini_Generated_Image_ewulioewulioewul_x4ddcg",
  },
  {
    id: "key-visual-01",
    title: "Key Visual 01",
    path: "v1788315682/274ea1c02feef936ba398c94f13f86a6_brzbul",
  },
  {
    id: "key-visual-02",
    title: "Key Visual 02",
    path: "v1788315682/734c845c1adba733229d55f489d38f3d_tq7mqa",
  },
  {
    id: "christmas-bite-key-art",
    title: "Christmas Bite — Campaign Key Art",
    path: "v1788315681/christmas-bite_sg3gwb",
  },
];

export const graphicSamples: GraphicSample[] = RAW_GRAPHICS.map((graphic) => ({
  id: graphic.id,
  title: graphic.title,
  src: image(graphic.path, 900),
  lightboxSrc: image(graphic.path, 1400),
}));
