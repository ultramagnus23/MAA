# Admin guide

For the Ministry team members who maintain the website.

## Home page hero video

The home page has a full-width hero with the Ministry's title and buttons in front of it. It can play a background video. Until a video is added, it shows a still photo instead, so the page always looks complete.

### Where it is set

All hero media is set in one file: `src/data/hero.ts`. You do not need to change any other file.

```ts
export const heroConfig = {
  video: [
    { src: "/hero/hero.webm", type: "video/webm" },
    { src: "/hero/hero.mp4", type: "video/mp4" },
  ],
  poster: "/hero/hero-poster.jpg",
};
```

- `video`: the video files, best format first. Leave it as `[]` to show the still image only.
- `poster`: the still image. It shows while the video loads and whenever the video does not play. The default is a Ministry team photo (`/team-photos/08.jpeg`).

### How to add or replace the video

1. Export the video in the formats below. Use footage of the Ministry or Ashoka that the team owns or has permission to use. Do not use stock or unrelated footage without approval.
2. Create a folder `public/hero/` if it does not exist, and put the files in it, for example `hero.webm`, `hero.mp4` and `hero-poster.jpg`.
3. Update `src/data/hero.ts` as shown above.
4. Run the site (`npm run dev`) and check the home page on a computer and a phone.
5. Commit and push to `main`. To go back to the still image, set `video: []`.

To replace the video later, overwrite the files in `public/hero/` with the same names. If the names change, update `src/data/hero.ts`. Visitors who already loaded the page may see the old file until their browser cache refreshes, so a new file name is the quickest way to force the change.

### Recommended settings

| Item | Recommendation |
| --- | --- |
| Length | 10 to 20 seconds, made to loop smoothly |
| Size | 1920 x 1080 at most (1280 x 720 is fine) |
| File size | Under 4 MB each, 8 MB at the very most |
| Formats | WebM (VP9) and MP4 (H.264). Both are needed for all browsers |
| Audio | None. Remove the audio track. The video always plays muted |
| Frame rate | 24 or 30 frames per second |
| Poster image | JPEG, 1920 x 1080, under 200 KB. Use a clear frame from the video |
| Content | Calm, steady shots. Avoid flashing or fast movement. Avoid important detail at the edges, because the video is cropped to fit the screen |

Example commands with ffmpeg (free software), for a file called `input.mp4`:

```bash
ffmpeg -i input.mp4 -an -vf "scale=1920:-2,fps=30" -c:v libx264 -crf 28 -preset slow -movflags +faststart public/hero/hero.mp4
ffmpeg -i input.mp4 -an -vf "scale=1920:-2,fps=30" -c:v libvpx-vp9 -crf 36 -b:v 0 public/hero/hero.webm
ffmpeg -i input.mp4 -ss 00:00:02 -vframes 1 -vf "scale=1920:-2" -q:v 4 public/hero/hero-poster.jpg
```

### What visitors see

- **Video plays:** most visitors on a computer or phone. It plays silently, on a loop, inside the page. A "Pause video" button appears in the corner so anyone can stop it.
- **Still image only:** when no video is set, the video file is missing or cannot load, the visitor has "reduce motion" switched on in their device settings, or their device has data saver on.
- The video loads only after the page has appeared, so it does not slow down the first view. The still image loads first.

### Checks before publishing a new video

- The title and buttons are easy to read at every point in the loop.
- The menu bar stays clear and the buttons can be clicked.
- The page still loads quickly on a phone.
- The video has no sound and nothing flashes quickly.
