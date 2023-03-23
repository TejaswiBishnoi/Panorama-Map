//import ol from "./cdn.js"

const count = 1;
const features = [];
// const e = 18000000;
// for (let i = 0; i < count; ++i) {
//   features[i] = new ol.Feature({
//     'geometry': new ol.geom.Point(ol.proj.fromLonLat([10.93376479, 50.98380407])),
//     'i': i,
//     'size': 10
//   });
// }
//console.log(2 * e * Math.random() - e);
const styles = {
  '10': new ol.style.Style({
    image: new ol.style.Circle({
      radius: 5,
      fill: new ol.style.Fill({color: '#fb615b'}),
      stroke: new ol.style.Stroke({color: '#fff554', width: 2}),
    }),
  }),
  '20': new ol.style.Style({
    image: new ol.style.Circle({
      radius: 7,
      fill: new ol.style.Fill({color: '#007acc'}),
      stroke: new ol.style.Stroke({color: '#ffffff', width: 2}),
    }),
  }),
    '30': new ol.style.Style({
    image: new ol.style.Circle({
      radius: 5,
      fill: new ol.style.Fill({color: '#90a4ae'}),
      stroke: new ol.style.Stroke({color: '#ffffff', width: 1}),
    }),
  }),
};

const vectorSource = new ol.source.Vector({
  features: features,
  wrapX: false,
});
const vector = new ol.layer.Vector({
  source: vectorSource,
  style: function (feature) {
    return styles[feature.get('size')];
  },
});

var attribution = new ol.control.Attribution({
    collapsible: false
});

var map = new ol.Map({
    controls: ol.control.defaults({attribution: false}).extend([attribution]),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        vector
    ],
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([10.93376479, 50.98380407]),
        maxZoom: 18,
        zoom: 16
    })
});

// setTimeout(()=>{
//     var x = new ol.Feature({
//     'geometry': new ol.geom.Point(ol.proj.fromLonLat([10.93376479, 50.98380407])),
//     'i': 0,
//     'size': 20
//   });
//   //vectorSource.addFeature(x);
//   features[0].set('size', 20)
//   console.log(features[0]);
// }, 1000)
