const panoVP = $("#pano")[0];
console.log(panoVP)
const imgpath = "./asset/HMTpano_000001_000000.jpg"
                
var panorama = new PANOLENS.ImagePanorama(imgpath);
var viewer = null;

viewer.add(panorama);