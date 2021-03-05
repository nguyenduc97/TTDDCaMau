require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Search",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "esri/widgets/ScaleBar",
    "esri/widgets/Home",
    "esri/widgets/Locate",   
    "esri/request", 
    "dojo/query",
    "dojo/on",
    "dojo/dom",
    "esri/widgets/LayerList",
    "esri/layers/MapImageLayer",
    "esri/layers/GraphicsLayer",
    "esri/layers/FeatureLayer",
    "dojo/_base/array",
    ],function(Map,MapView,Search,BasemapGallery,Expand,ScaleBar,HomeButton,Locate,esriRequest,query,dom,on,LayerList,MapImageLayer,GraphicsLayer,FeatureLayer,array){
       var map = new Map({
        basemap: "gray-vector",
    });
       var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [107.57, 16.475],
        zoom: 13,
    });
       addCheckLayer("http://103.77.167.158:6080/arcgis/rest/services/DTTM/ThuaDat/FeatureServer");
       //map.addLayers(basemapBDN);
    // tìm kiếm
  //   var search = new Search({
  //     view: view
  // });   
  //   var exPandSearch = new Expand({
  //       view: view,
  //       autoCollapse: true,
  //       content: search,
  //       expanded: false,
  //   });
  //   view.ui.add(exPandSearch, "top-right");
    // ScaleBar
    var scaleBar = new ScaleBar({
      view: view
  });
    view.ui.add(scaleBar, {
        position: "bottom-left"
    });

    //home 
    // var home = new HomeButton({
    //     map: map
    // }, "HomeButton");
    // view.ui.add(home, "top-right");
    // Custom Locate
    $('.mylocation').on('click',function(){
        var locateBtn = new Locate({
            view: view
        });
        locateBtn.locate();
    })
    

    function addCheckLayer(urlLayer) {
            var checkLink = urlLayer.trim() + "/layers";
            var options = { query: { f: 'json' }, responseType: 'json' };
            esriRequest(checkLink, options).then(function (response) {
                var res = response.data;
                var reverse = res.layers.length;
                for (var i = reverse - 1; i < reverse; i--) {
                    var layer = res.layers[i];
                    var temps = new FeatureLayer({
                        url: urlLayer + "/" + layer.id.toString(),
                        outFields: ["*"],
                        visible: true
                    });
                    map.layers.add(temps);
                }
            });
        }
    //Custom Bản đồ
    var BasemapGallerys = new BasemapGallery({
        view: view
    },"ddc_body_baseMap");
    // Custom LayerList
    var layerList = new LayerList({
        view
    },"ddc_layerList");
    // view info click
     view.on("click", function(event) {
        // view.hitTest(event).then(function (response) {
        //     // console.log(response);
        // });
        view.hitTest(event).then(viewInfoPopup);
    });
     function viewInfoPopup(response) {
        var titleField = response.results[0].graphic.layer;
        var checkFieldInfo = response.results[0].graphic.geometry;
        if (checkFieldInfo !== null) {
            var graphics = response.results[0].graphic;
            var fieldInfo = array.map(graphics.layer.fields, function(field) {
                if (field.alias !== "OBJECTID") {
                    return {
                        "fieldName": field.name,
                        "label": field.alias,
                        "visible": true
                    }
                } else {
                    return {
                        "fieldName": field.name,
                        "label": field.alias,
                        "visible": false
                    }
                }
            });
            var template = {
                title: titleField.title,
                content: [{
                    type: "fields",
                    fieldInfos: fieldInfo
                }],
                action: "test"
            };
            graphics.layer.popupTemplate = template;
        }
    };
});