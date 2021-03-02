require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Search",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "esri/widgets/ScaleBar",
    "esri/widgets/Home",
    "esri/widgets/Locate",    
    "dojo/query",
    "dojo/on",
    "dojo/dom",
    "esri/widgets/LayerList",
    ],function(Map,MapView,Search,BasemapGallery,Expand,ScaleBar,HomeButton,Locate,query,dom,on,LayerList){
    	var map = new Map({
            basemap: "gray-vector"
        });
        var view = new MapView({
            container: "viewDiv",
            map: map,
            center: [107.57, 16.475],
            zoom: 13,
        });
    // tìm kiếm
    var search = new Search({
      view: view
  });   
    var exPandSearch = new Expand({
        view: view,
        autoCollapse: true,
        content: search,
        expanded: false,
    });
    view.ui.add(exPandSearch, "top-right");

    // Bản đồ
    var BasemapGallerys = new BasemapGallery({
      view: view
  });
    var exPandGallery = new Expand({
        view: view,
        autoCollapse: true,
        content: BasemapGallerys,
        expanded: false,
    });
    view.ui.add(exPandGallery, "top-right");

    // ScaleBar
    var scaleBar = new ScaleBar({
      view: view
  });
    view.ui.add(scaleBar, {
    	position: "bottom-left"
    });

    //home 
    var home = new HomeButton({
        map: map
    }, "HomeButton");
    view.ui.add(home, "top-right");
    // Custom Locate
    $('.mylocation').on('click',function(){
            var locateBtn = new Locate({
                view: view
            });
            locateBtn.locate();
        })
    // SetupMap();
    // function SetupMap() {
    //     $('.mylocation').on('click',function(){
    //         var locateBtn = new Locate({
    //             view: view
    //         });
    //         locateBtn.locate();
    //     })
    // };



});


