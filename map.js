

var map = L.map('map').setView([17.309874, -94.614558],9);
L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: 'Map Data © OpenStreetMap contributors'
}).addTo(map);



     




//AQUI CAMBIAS LOS ESTILOS DE LAS CAPAS, LAGRO, ANCHO 
////SIMBOLOGÍA PUNTOS
 var icono_Central = new L.Icon({
     iconSize: [27, 27], //tamaño del ícono
     iconAnchor: [13, 27], //ancho del ícono
     iconUrl: 'imagenes/centralElectrica.png'
 });

 var icono_Aeropuerto = new L.Icon({
     iconSize: [27, 27], //tamaño del ícono
     iconAnchor: [13, 27], //ancho del ícono
     iconUrl: 'imagenes/aeropuerto.png'
 });
var icono_subestacionE = new L.Icon({
     iconSize: [15, 15], //tamaño del ícono
     iconAnchor: [15, 15], //ancho del ícono
     iconUrl: 'imagenes/puntoRojo.png'
 });

 var icono_ExtracPetrol = new L.Icon({
     iconSize: [27, 27], //tamaño del ícono
     iconAnchor: [27, 27], //ancho del ícono
     iconUrl: 'imagenes/ExtracccionPetrol.png'
 });

 var icono_GeneradorCFE = new L.Icon({
     iconSize: [35, 35], //tamaño del ícono
     iconAnchor: [35, 35], //ancho del ícono
     iconUrl: 'imagenes/generadorElectrico.png'
 });

 var icono_EnergiaRenovable = new L.Icon({
     iconSize: [35, 35], //tamaño del ícono
     iconAnchor: [35, 35], //ancho del ícono
     iconUrl: 'imagenes/EnergiaRenovable.png'
 });



 ////SIMBOLOGIA LINEAS

 var color_ferreo = {
    color: 'brown',
    weight: 2.5,
    opacity: 1.0,
    dashArray: '4,12,20,12',
    lineJoin: 'miter',
    lineCap: 'square'
};


 var color_telefono = {
    color: 'purple',
    weight: 1.5,
    opacity: 1.0,
    dashArray: '5,5',
    lineJoin: 'miter',
    lineCap: 'square'
};


////SIMBOLOGÍA POLIGONOS
var color_parqueInd = {
   weight: 2, // grosor de línea
   color: '#3AF802', // color de línea
   opacity: 1.0, // tansparencia de línea
   fillColor: '#3AF802', // color de relleno
   fillOpacity: 0.4 // transparencia de relleno
 };

 var color_Estados = {
   weight: 2, // grosor de línea
   color: '#760300', // color de línea
   opacity: 1.0, // tansparencia de línea
   fillColor: '#760300', // color de relleno
   fillOpacity: 0.02 // transparencia de relleno
 };

 var color_Municipios = {
   weight: 2, // grosor de línea
   color: '#FB8A00', // color de línea
   opacity: 1.0, // tansparencia de línea
   fillColor: '#FB8A00', // color de relleno
   fillOpacity: 0.02 // transparencia de relleno
 };

 var color_concesMin = {
   weight: 2, // grosor de línea
   color: '#581845', // color de línea
   opacity: 1.0, // tansparencia de línea
   fillColor: '#581845', // color de relleno
   fillOpacity: 0.4 // transparencia de relleno
 };

 // AQUÍ AGREGAS TUS CAPAS JS 


var customOptions =
            {
            'maxWidth': '200',
            'className' : 'custom'
            }
///CAPAS DE PUNTOS NECESITAN UN ICONO (IMAGEN PNG)
   var subestElectrica = L.geoJson(subElectrica, {
        onEachFeature : function(feature, layer){
                var popupContent = ('<b>Nombre de Subestación: </b>'+ feature.properties.nom_estab+
                                    '</br><b>Personal: </b>'+ feature.properties.per_ocu) ;
                layer.bindPopup(popupContent,customOptions)

        },
          pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: icono_subestacionE});
          }
     });

   var extraccionPetrolera = L.geoJson(extracPetrol, {
        onEachFeature : function(feature, layer){
                var popupContent = ('<b>Nombre: </b>'+ feature.properties.nom_estab+
                                    '</br><b>Personal: </b>'+ feature.properties.per_ocu) ;
                layer.bindPopup(popupContent,customOptions)

        },
          pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: icono_ExtracPetrol});
          }
     });

   var minasPuntos = L.geoJson(minasPoint, {
        onEachFeature : function(feature, layer){
                var popupContent = ('<b>Estatus: </b>'+ feature.properties.condicion) ;
                layer.bindPopup(popupContent,customOptions)

        },
          pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {icon: icono_subestacionE});
          }
     });

//CLUSTER DE PUNTOS PARA CENTRAL ELÉCTRICA
    var centrales = L.markerClusterGroup();
    
    const geojsonGroup = L.geoJSON(centralcita, {
        onEachFeature : function(feature, layer){
            var popupContent = ('<b>Central Eléctrica:</b>'+ feature.properties.nombre+
                                '</br><b>Ciudad:</b>'+ feature.properties.Ciudad +
                                '</br><b>Propietario:</b>'+ feature.properties.Propietari +
                                '</br><b>Operador:</b>'+ feature.properties.Operador +
                                '</br><b>Tipo:</b>'+ feature.properties.FuentePrim) ;
            layer.bindPopup(popupContent,customOptions)

        },
        pointToLayer: function (feature, latlng) {
            return new L.marker(latlng, { 
                     icon: icono_Central
         }); 
                }, 
               
            });
    centrales.addLayer(geojsonGroup);


//TERMINA CLUSTER DE PUNTOS PARA CENTROS CULTURALES Y DEPORTIVOS

//CLUSTER DE PUNTOS PARA AEROPUERTOS
    var aeropuertos = L.markerClusterGroup();
    const geojsonGroupAereo = L.geoJSON(Aeropuerto, {
        onEachFeature : function(feature, layer){
            var popupContent = ('<b>Nombre aeródromo:</b>'+ feature.properties.nom_aerop+
                                '</br><b>Tipo:</b>'+ feature.properties.tipo +
                                '</br><b>Tamaño de pista:</b>'+ feature.properties.tam_pista) ;
            layer.bindPopup(popupContent,customOptions)

        },
        pointToLayer: function (feature, latlng) {
            return new L.marker(latlng, { 
                     icon: icono_Aeropuerto
         }); 
                }, 
               
            });
    aeropuertos.addLayer(geojsonGroupAereo);


//TERMINA CLUSTER DE PUNTOS PARA AEROPUERTOS

//CLUSTER DE PUNTOS PARA GENERADORES CFE
    var generadoresElec = L.markerClusterGroup();
    const geojsonGroupGenerCFE = L.geoJSON(generadoresCFE, {
        onEachFeature : function(feature, layer){
            var popupContent = ('<b>Generador CFE: </b>'+ feature.properties.NOMBRE+
                                '</br><b>Tipo: </b>'+ feature.properties.PROCESO) ;
            layer.bindPopup(popupContent,customOptions)

        },
        pointToLayer: function (feature, latlng) {
            return new L.marker(latlng, { 
                     icon: icono_GeneradorCFE
         }); 
                }, 
               
            });
    generadoresElec.addLayer(geojsonGroupGenerCFE);


//TERMINA CLUSTER DE PUNTOS PARA GENERADORES CFE

//CLUSTER DE PUNTOS PARA ENERGÍA RENOVABLE
    var centralElecRen = L.markerClusterGroup();
    const geojsonGroupEnerRenov = L.geoJSON(energiaRenovable, {
        onEachFeature : function(feature, layer){
            var popupContent = ('<b>Central de Energía Renovable: </b>'+ feature.properties.Instalacio+
                                '</br><b>Propietario: </b>'+ feature.properties.Propietari+
                                '</br><b>Operador: </b>'+ feature.properties.Operador+
                                '</br><b>Tipo: </b>'+ feature.properties.FuentePrim) ;
            layer.bindPopup(popupContent,customOptions)

        },
        pointToLayer: function (feature, latlng) {
            return new L.marker(latlng, { 
                     icon: icono_EnergiaRenovable
            }); 
        }, 
               
    });
    centralElecRen.addLayer(geojsonGroupEnerRenov);


//TERMINA CLUSTER DE PUNTOS PARA ENERGÍA RENOVABLE



//CAPA DE LÍNEAS
    var lineaFerrea = L.geoJson(ferrocarril,{
       style: color_ferreo
     });

    var lineaTelefono = L.geoJson(telefono,{
       style: color_telefono
     });


//CAPA DE POLÍGONOS
    ///////CAPA DE PARQUES INDUSTRIALES//////
    function popup_ParqueInd(feature, layer) { 
        if (feature.properties && feature.properties.Name) 
        { 
        layer.bindPopup('<p><b>PODEBIS:</b>'+feature.properties.Name+'</p'); 
        } 
    }

    var parquesIndustriales = L.geoJson(Parque_ind,{
      style: color_parqueInd,onEachFeature: popup_ParqueInd
    }).addTo(map);

    /////////CAPA DE ESTADOS//////////
    var PoligonoEdos = L.geoJson(Estados,{
      style: color_Estados
    });

    /////////CAPA DE MUNICIPIOS//////////
    function popup_Muni(feature, layer) { 
        if (feature.properties && feature.properties.NOMGEO) 
        { 
        layer.bindPopup('<p><b>Municipio:</b>'+feature.properties.NOMGEO+'</p'); 
        } 
    }

    var PoligonoMun = L.geoJson(Muni,{
      style: color_Municipios,onEachFeature: popup_Muni
    });



    /////////CAPA DE CONCESIONES MINERAS//////////
    function popup_Conces(feature, layer) { 
        if (feature.properties && feature.properties.titulo) 
        { 
        layer.bindPopup('<p><b>Nombre del Lote:</b>'+feature.properties.nombrelote+'</p'); 
        } 
    }

    var ConcesionMinera = L.geoJson(concesionesMin,{
      style: color_concesMin,onEachFeature: popup_Conces
    });


    map.pm.addControls({  
      position: 'topleft',  
      drawCircleMarker: false,  
      drawPolyline: false,
    });




    

//AQUÍ PUEDES AGREGAR MÁS MAPAS BASE (AHORITA SOLO HAY DOS)
var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});




//ESTE ES EL CONTROL QUE PRENDE Y APAGA CAPAS

        var baseTree = [
            {
                label: 'Vista de Calles',
                layer: osmBase,
            },
            {
                label: 'Vista satélite',
                layer: Esri_WorldImagery,
            },
            {
                label: 'Mapa Topográfico',
                layer: OpenTopoMap,
            },

        ];

        var capas = [
            {
                label: 'OpenStreeMap',
                layer: osmBase,
            },
        ]

        
        var overlaysTree = {
            label: 'Infraestructura Itsmo',
            selectAllCheckbox: 'Un/select all',
            children: [
                 {label: '<b>Límites geográficos</b>', 
                 selectAllCheckbox: 'De/seleccionar todo',
                 children: [
                    {label: 'Parques Industriales', layer: parquesIndustriales},
                    {label: 'Municipios', layer: PoligonoMun},
                    {label: 'Estados', layer: PoligonoEdos},
                    
                ]},

                {label: '<b>Comunicación</b>',
                selectAllCheckbox: 'De/seleccionar todo', 
                children: [
                    {label: 'Aeródromos', layer: aeropuertos},
                    {label: 'Línea Ferrea', layer: lineaFerrea},
                    {label: 'Línea Telefonica', layer: lineaTelefono},
                ]},

                {label: '<b>Energía</b>',
                selectAllCheckbox: 'De/seleccionar todo', 
                children: [
                    {label: 'Centrales Eléctricas', layer: centrales},
                    {label: 'Subestación Eléctrica', layer: subestElectrica},
                    {label: 'Generadores CFE', layer: generadoresElec},
                    {label: 'Extracción de petroleo y gas', layer: extraccionPetrolera},
                    {label: 'Centrales eléctricas energía renovable', layer: centralElecRen},
                    {label: 'Minas', layer: minasPuntos},
                ]},

                {label: '<b>Minería</b>', 
                 selectAllCheckbox: 'De/seleccionar todo',
                 children: [
                    {label: 'Minas', layer: minasPuntos},
                    {label: 'Concesiones', layer: ConcesionMinera},                  
                ]},

                 {label: '<b>Manufacturas</b>',
                    selectAllCheckbox: 'De/seleccionar todo',
                    children: [
                         {label: 'Industria alimentaria', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: indusAlimentaria},
                            {label: '10 o menos empleados', layer: indusAlimentariaPequ},
                        ]},
                        {label: 'Industria de las bebidas y del tabaco', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: indusTabaco},
                            {label: '10 o menos empleados', layer: indusTabacoPeq},
                        ]},
                        {label: 'Fabricación de insumos textiles <br> y acabado de textiles', selectAllCheckbox: true, children: [
                            {label: '10 o menos empleados', layer: indusTextilPeq},
                        ]},
                        {label: 'Fabricación de productos textiles,<br> excepto prendas de vestir', selectAllCheckbox: true, children: [
                            {label: '10 o menos empleados', layer: fabricaTextilPeq},
                        ]},
                        {label: 'Fabricación de prendas de vestir', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: fabricaRopaGrande},
                            {label: '10 o menos empleados', layer: fabricaRopaPeq},
                        ]},
                        {label: 'Curtido y acabado de cuero y piel', selectAllCheckbox: true, children: [
                            {label: '10 o menos empleados', layer: fabricaCuero},
                        ]},
                        {label: 'Industria de la madera', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: fabricaMaderaGrande},
                            {label: '10 o menos empleados', layer: fabricaMaderaPeq},
                        ]},
                        {label: 'Industria del papel', selectAllCheckbox: true, children: [
                            {label: '10 o menos empleados', layer: fabricaPapel},
                        ]},
                        {label: 'Fabricación de productos derivados <br>del petroleo y el carbón', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: fabricaPetrol},
                        ]},
                        {label: 'Impresión e industrias conexas', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: fabricaImpresGrande},
                            {label: '10 o menos empleados', layer: fabricaImpresPeq},
                        ]},
                        {label: 'Industria química', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: fabricaQuimiGrande},
                            {label: '10 o menos empleados', layer: fabricaQuimiPeq},
                        ]},
                        {label: 'Industria del plástico y del hule', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: fabricaPlasticGrande},
                            {label: '10 o menos empleados', layer: fabricaPlasticPeq},
                        ]},
                        {label: 'Fabricación de productos a <br>base de minerales no metálicos', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: fabricaNoMetalGrande},
                            {label: '10 o menos empleados', layer: fabricaNoMetalPeq},
                        ]},
                        {label: 'Industrias metálicas básicas', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: fabricaNoMetalBGrande},
                            {label: '10 o menos empleados', layer: fabricaNoMetalBPeq},
                        ]},
                        {label: 'Fabricación de productos metálicos', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: fabricaMetalicoGrande},
                            {label: '10 o menos empleados', layer: fabricaMetalicoPeq},
                        ]},
                        {label: 'Fabricación de maquinaria y equipo', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: fabricaMaquinariaGrande},
                            {label: '10 o menos empleados', layer: fabricaMaquinariaPeq},
                        ]},
                        {label: 'Fabricación de equipo de computación,<br> comunicación, medición y de otros equipos,<br> componentes y accesorios electrónicos', selectAllCheckbox: true, children: [
                            {label: '10 o menos empleados', layer: equipoCompuPeq},
                        ]},
                        {label: 'Fabricación de accesorios, aparatos<br> eléctricos y equipo de generación<br> de energía eléctrica', selectAllCheckbox: true, children: [
                            {label: '10 o menos empleados', layer: equipoElectriGrande},
                        ]},
                        {label: 'Fabricación de equipo de transporte', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: fabricaEquiTransGrande},
                            {label: '10 o menos empleados', layer: fabricaEquiTransPeq},
                        ]},
                        {label: 'Fabricación de muebles,<br> colchones y persianas', selectAllCheckbox: true, children: [
                            {label: '10 o menos empleados', layer: equipoMueblesPeq},
                        ]},
                        {label: 'Otras industrias manufactureras', selectAllCheckbox: true, children: [
                            {label: 'Mas de 10 empleados', layer: fabricaOtrasGrande},
                            {label: '10 o menos empleados', layer: OtrasPeq},
                        ]},
                    ],
                },
                
            ]
        }


        var lay = L.control.layers.tree(baseTree, overlaysTree,capas,
            {
                namedToggle: true,
                selectorBack: true,
                closedSymbol: '&#8862; &#x1f5c0;',
                openedSymbol: '&#8863; &#x1f5c1;',
                collapseAll: 'Collapse all',
                expandAll: 'Expand all',
                collapsed: true,
            });

        lay.addTo(map).collapseTree().expandSelected().collapseTree(true);
        L.DomEvent.on(L.DomUtil.get('onlysel'), 'click', function() {
            lay.collapseTree(false).expandSelected(false);
        });


