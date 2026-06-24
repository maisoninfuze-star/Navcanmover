#!/usr/bin/env python3
"""Generate site visuals with fal.ai (flux). Pickup-truck Marketplace pickup/delivery concept."""
import json, os, sys, time, urllib.request, urllib.error, pathlib

FAL_KEY = os.environ.get("FAL_KEY")
if not FAL_KEY:
    sys.exit("FAL_KEY not set")

MODEL = "fal-ai/flux/dev"
OUT = pathlib.Path(__file__).parent / "assets" / "img"
OUT.mkdir(parents=True, exist_ok=True)

# shared style suffix for cohesion: premium, cinematic, real, Montreal, pristine WHITE fleet
STYLE = ("premium cinematic editorial photography, high-end commercial look, refined natural light, "
         "golden-hour warmth, shallow depth of field, high detail, 35mm, polished yet authentic documentary feel, "
         "Montreal Canada, tasteful muted color grade, immaculate")

# Brand fleet — pristine WHITE vehicles, matching the Nav Can logo (white pickup + white cargo van)
PICKUP = "a pristine spotless white pickup truck (clean modern half-ton, like a white Ford F-150)"
VAN = "a pristine spotless white cargo van (clean high-roof panel van, like a white Ram ProMaster)"

JOBS = [
    # id, prompt, image_size
    ("hero",
     f"{PICKUP} loaded with a couch and cardboard boxes in the cargo bed, parked on a sunny Montreal residential street, two friendly young movers smiling, {STYLE}",
     "landscape_16_9"),
    ("band",
     f"{PICKUP} and {VAN} driving together as a clean white delivery fleet across a Montreal bridge at golden hour, city skyline behind, wide cinematic establishing shot, {STYLE}",
     "landscape_16_9"),
    ("kinetic",
     f"Side view of {PICKUP} carrying a large second-hand sofa and a few cardboard boxes strapped down in the bed, driving through a leafy Montreal neighbourhood, gentle motion, {STYLE}",
     "landscape_16_9"),
    ("step1",
     f"Close up of two hands carefully wrapping and strapping a wooden dresser with quilted moving blankets inside the clean bright cargo area of {VAN}, protecting the furniture, {STYLE}",
     "landscape_4_3"),
    ("step2",
     f"{VAN} driving across a Montreal bridge at golden hour, professional on-time delivery, clean and pristine, {STYLE}",
     "landscape_4_3"),
    ("step3",
     f"A friendly uniformed delivery driver unloading a marketplace-bought armchair from {PICKUP} and handing it to a happy customer at an apartment doorway, warm, {STYLE}",
     "landscape_4_3"),
    ("svc1",
     f"A recent-model pristine spotless white cargo van (modern high-roof panel van, like a new white Ford Transit or Ram ProMaster) parked on a typical Montreal Plateau street with triplex staircases, ready to pick up a marketplace purchase, {STYLE}",
     "landscape_4_3"),
    ("svc2",
     f"Two movers lifting a large second-hand sofa into the back of {VAN} outside a house, marketplace furniture haul, big items, {STYLE}",
     "landscape_4_3"),
]


def call(model, payload):
    req = urllib.request.Request(
        f"https://fal.run/{model}",
        data=json.dumps(payload).encode(),
        headers={"Authorization": f"Key {FAL_KEY}", "Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=300) as r:
        return json.loads(r.read().decode())


def download(url, dest):
    with urllib.request.urlopen(url, timeout=120) as r:
        dest.write_bytes(r.read())


def main():
    only = sys.argv[1:]
    for jid, prompt, size in JOBS:
        if only and jid not in only:
            continue
        dest = OUT / f"{jid}.jpg"
        print(f"[{jid}] generating ({size}) ...", flush=True)
        try:
            res = call(MODEL, {
                "prompt": prompt,
                "image_size": size,
                "num_images": 1,
                "enable_safety_checker": True,
                "num_inference_steps": 32,
                "guidance_scale": 3.5,
            })
            url = res["images"][0]["url"]
            download(url, dest)
            print(f"[{jid}] saved -> {dest} ({dest.stat().st_size//1024} KB)", flush=True)
        except urllib.error.HTTPError as e:
            print(f"[{jid}] HTTP {e.code}: {e.read().decode()[:400]}", flush=True)
        except Exception as e:
            print(f"[{jid}] ERROR {e}", flush=True)
        time.sleep(1)


if __name__ == "__main__":
    main()
