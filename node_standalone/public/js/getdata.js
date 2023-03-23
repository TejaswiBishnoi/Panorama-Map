var lines = [];
$(function(){
    $(document).prop('title', "Map")
})
$.get("http://localhost:5000/asset/coordinates.txt").done((data)=>{
    lines = data.split('\n').slice(1);
    for (var i = 0; i < lines.length; i++){
        const line = lines[i].split(' ');
        const fileloc = line[0].replace("\"", '').slice(2);
        const coord = [parseFloat(line[2]), parseFloat(line[3])]
        const fet = new ol.Feature({
            'geometry': new ol.geom.Point(ol.proj.fromLonLat(coord)),
            'i': i,
            'size': 10,
            'fileloc': './asset/' + fileloc.substring(0, fileloc.length - 1)
        });
        //console.log('adding')
        vectorSource.addFeature(fet);
        if (i == 0) console.log(fileloc.substring(0, fileloc.length - 1))
    }
})
var currentCoord = null
var isLoaded = false
map.on("click", (e)=>{
    //console.log(map.getFeaturesAtPixel(e.pixel));
    var x = map.getFeaturesAtPixel(e.pixel);    
    if (x!= null && x.length != 0){
        if (currentCoord != null){
            if(isLoaded){
                console.log("Call")
                viewer.remove(panorama);
                panorama.dispose();
                const lnk = x[0].get('fileloc');
                $.ajax({
                    type: "HEAD",
                    async: false,
                    url: lnk,
                }).done(()=>{
                    currentCoord.set('size', 10)
                    currentCoord = x[0];
                    currentCoord.set('size', 20)
                    viewer.remove(panorama)
                    panorama = new PANOLENS.ImagePanorama(lnk);
                    viewer.add(panorama);                
                }).fail(()=>{
                    currentCoord.set('size', 10)
                    currentCoord = x[0];
                    currentCoord.set('size', 20)
                    isLoaded = false;
                    $("#pano").addClass("hidden");
                    $("#missing").removeClass("hidden");
                });
            }
            else{
                console.log("Call")
                const lnk = x[0].get('fileloc');
                $.ajax({
                    type: "HEAD",
                    async: false,
                    url: lnk,
                }).done(()=>{
                    currentCoord.set('size', 10)
                    isLoaded = true;
                    currentCoord = x[0];
                    currentCoord.set('size', 20)
                    viewer.remove(panorama)
                    panorama = new PANOLENS.ImagePanorama(lnk);
                    $("#missing").addClass("hidden");
                    $("#pano").removeClass("hidden");
                    viewer.add(panorama);          
                }).fail(()=>{
                    currentCoord.set('size', 10)
                    currentCoord = x[0];
                    currentCoord.set('size', 20)
                    isLoaded = false;
                });
            }
        }
        else{
            const lnk = x[0].get('fileloc');
            $.ajax({
                type: "HEAD",
                async: false,
                url: lnk,
            }).done(()=>{
                currentCoord = x[0];
                currentCoord.set('size', 20)
                panorama = new PANOLENS.ImagePanorama(lnk);
                console.log(panorama)
                $("#notsel").addClass("hidden");
                $("#pano").removeClass("hidden");
                viewer = new PANOLENS.Viewer({
                    container: $("#pano")[0]
                });
                viewer.add(panorama);   
                //viewer.add(panorama);
                isLoaded = true;
            }).fail(()=>{
                currentCoord = x[0];
                currentCoord.set('size', 20)
                isLoaded = false;
                $("#notsel").addClass("hidden");
                $("#missing").removeClass("hidden");
            });
        }
    }
})

