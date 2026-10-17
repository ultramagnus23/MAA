// Home page hero video. See docs/ADMIN_GUIDE.md for how to replace it.
//
// To use a video: put the files in public/hero/ and list them below, best
// format first. Leave `video` empty to show the still poster image only.

export const heroConfig = {
  video: [] as { src: string; type: string }[],
  // Example once the files are added:
  // video: [
  //   { src: "/hero/hero.webm", type: "video/webm" },
  //   { src: "/hero/hero.mp4", type: "video/mp4" },
  // ],

  // Shown behind the text while the video loads, and instead of it when the
  // video is missing, switched off or the visitor prefers reduced motion.
  poster: "/team-photos/08.jpeg",
};
