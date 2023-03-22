const panoVP = $("#pano")[0];
const imgpath = "./asset/HMTpano_000001_000000.jpg"

const panorama = new PANOLENS.ImagePanorama(imgpath);
const viewer = new PANOLENS.Viewer({
    container: panoVP
});

viewer.add(panorama);