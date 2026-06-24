#!/usr/bin/env python3
"""Generate a short hero clip (image-to-video) with fal.ai Kling v1.6, from hero.jpg.
Designed to be scroll-scrubbed: slow, smooth, continuous motion."""
import base64, json, os, sys, urllib.request, pathlib

FAL_KEY = os.environ.get("FAL_KEY")
if not FAL_KEY:
    sys.exit("FAL_KEY not set")

MODEL = "fal-ai/kling-video/v1.6/standard/image-to-video"
HERE = pathlib.Path(__file__).parent
SRC = HERE / "assets" / "img" / "hero.jpg"
OUT_DIR = HERE / "assets" / "video"
OUT_DIR.mkdir(parents=True, exist_ok=True)
OUT = OUT_DIR / "hero.mp4"

PROMPT = ("Slow smooth cinematic camera push-in on a pristine white pickup truck loaded with boxes on a sunny "
          "Montreal residential street, two friendly movers chatting and smiling gently, leaves swaying, "
          "subtle natural movement, steady gentle motion, no warping, photorealistic, documentary feel")

def main():
    data_uri = "data:image/jpeg;base64," + base64.b64encode(SRC.read_bytes()).decode()
    payload = {
        "prompt": PROMPT,
        "image_url": data_uri,
        "duration": "5",
        "cfg_scale": 0.5,
        "negative_prompt": "blur, distort, low quality, warping, morphing, extra limbs, fast motion, glitch",
    }
    req = urllib.request.Request(
        f"https://fal.run/{MODEL}",
        data=json.dumps(payload).encode(),
        headers={"Authorization": f"Key {FAL_KEY}", "Content-Type": "application/json"},
        method="POST",
    )
    print("generating hero video (this can take 1-3 min) ...", flush=True)
    with urllib.request.urlopen(req, timeout=600) as r:
        res = json.loads(r.read().decode())
    url = res["video"]["url"]
    print("video ready:", url, flush=True)
    with urllib.request.urlopen(url, timeout=300) as r:
        OUT.write_bytes(r.read())
    print(f"saved -> {OUT} ({OUT.stat().st_size//1024} KB)", flush=True)

if __name__ == "__main__":
    main()
