var customOptions =
                    {
                    'maxWidth': '200',
                    'className' : 'custom'
                    }

        var icono_Alimentos = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/IndustriaAlimentaria.png'
         });
        var icono_Tabaco = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/BebidasTabaco.png'
         });
        var icono_insumoTex = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/Textiles.png'
         });
        var icono_fabricaTex = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/Telas.png'
         });
        var icono_Ropa = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/Ropa.png'
         });
        var icono_Cuero = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/CueroPiel.png'
         });
        var icono_Madera = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/Madera.png'
         });
        var icono_Papel = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/Papel.png'
         });
        var icono_Petroleo = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/PetroleoCarbon.png'
         });
        var icono_Impresion = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/Impresion.png'
         });
        var icono_Quimica = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/IndustriaQuimica.png'
         });
        var icono_Plastic = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/PlasticoHule.png'
         });
        var icono_NoMetal = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/NoMetalicos.png'
         });
         var icono_MetalBasic = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/MetalicoBasico.png'
         }); 
         var icono_Metalico = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/ProductosMetalicos.png'
         }); 
         var icono_Maquinaria = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/Maquinaria.png'
         });   
         var icono_EquipoComp = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/FabricaComputo.png'
         });
         var icono_FabricAcces = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/EquipoElectrico.png'
         }); 
         var icono_equipoTrans = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/EquipoTransporte.png'
         });
         var icono_muebles = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/Muebles.png'
         }); 
         var icono_otros = new L.Icon({
             iconSize: [27, 27], //tamaño del ícono
             iconAnchor: [13, 27], //ancho del ícono
             iconUrl: 'imagenes/ManufacOtros.png'
         });     


        //CLUSTER DE PUNTOS PARA INDUSTRIA ALIMENTARIA 
            var indusAlimentaria = L.markerClusterGroup();
            
            const geojsonGroupIndAlimentaria = L.geoJSON(indAlimentaria, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Industria Alimentaria </b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Alimentos
                 }); 
                        }, 
                       
                    });
            indusAlimentaria.addLayer(geojsonGroupIndAlimentaria);

            //**************************************************************************//
             var indusAlimentariaPequ = L.markerClusterGroup();
            
            const geojsonGroupIndAlimentariaPeq = L.geoJSON(indAlimentariaMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Industria Alimentaria </b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Alimentos
                 }); 
                        }, 
                       
                    });
            indusAlimentariaPequ.addLayer(geojsonGroupIndAlimentariaPeq);

        //TERMINA CLUSTER DE PUNTOS PARA INDUSTRIA ALIMENTARIA 

        //CLUSTER DE PUNTOS PARA INDUSTRIA TABACO Y BEBIDAS 
            var indusTabaco = L.markerClusterGroup();
            
            const geojsonGroupIndTabaco = L.geoJSON(tabaco, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Industria de las bebidas y del tabaco</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Tabaco
                 }); 
                        }, 
                       
                    });
            indusTabaco.addLayer(geojsonGroupIndTabaco);

            //**************************************************************************//
            var indusTabacoPeq = L.markerClusterGroup();
            
            const geojsonGroupIndTabacoPeq = L.geoJSON(tabacoMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Industria de las bebidas y del tabaco</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Tabaco
                 }); 
                        }, 
                       
                    });
            indusTabacoPeq.addLayer(geojsonGroupIndTabacoPeq);

            
        //TERMINA CLUSTER DE PUNTOS PARA INDUSTRIA TABACO Y BEBIDAS 

         //CLUSTER DE PUNTOS PARA INSUMOS TEXTILES           
           var indusTextilPeq = L.markerClusterGroup();
            
            const geojsonGroupIndTextilPeq = L.geoJSON(insumTextilMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de insumos textiles y acabado de textiles</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_insumoTex
                 }); 
                        }, 
                       
                    });
            indusTextilPeq.addLayer(geojsonGroupIndTextilPeq);
        //TERMINA CLUSTER DE PUNTOS PARA INSUMOS TEXTILES

        //CLUSTER DE PUNTOS PARA FABRICACIÓN PRODUCTOS TEXTILES          
           var fabricaTextilPeq = L.markerClusterGroup();
            
            const geojsonGroupFabricaTextilPeq = L.geoJSON(indusTextilMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de productos textiles, excepto prendas de vestir</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)
                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_fabricaTex
                            }); 
                        },       
            });
            fabricaTextilPeq.addLayer(geojsonGroupFabricaTextilPeq);
        //TERMINA CLUSTER DE PUNTOS PARA FABRICACIÓN PRODUCTOS TEXTILES 

        //CLUSTER DE PUNTOS PARA FABRICACIÓN PRENDAS DE VESTIR          
           var fabricaRopaPeq = L.markerClusterGroup();
            
            const geojsonGroupFabricaRopaPeq = L.geoJSON(indusRopaMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de prendas de vestir</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Ropa
                        }); 
                },          
            });
            fabricaRopaPeq.addLayer(geojsonGroupFabricaRopaPeq);
            //*************************************************************//

            var fabricaRopaGrande = L.markerClusterGroup();
            
            const geojsonGroupFabricaRopaGrande = L.geoJSON(indusRopaMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de prendas de vestir</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Ropa
                        }); 
                },            
            });
            fabricaRopaGrande.addLayer(geojsonGroupFabricaRopaGrande);
        //TERMINA CLUSTER DE PUNTOS PARA FABRICACIÓN PRENDAS DE VESTIR 

        //CLUSTER DE PUNTOS PARA CUERO        
           var fabricaCuero = L.markerClusterGroup();
            
            const geojsonGroupFabricaCuero = L.geoJSON(indusCueroMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Curtido y acabado de cuero y piel</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)
                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Cuero
                            }); 
                        },       
            });
            fabricaCuero.addLayer(geojsonGroupFabricaCuero);
        //TERMINA CLUSTER DE PUNTOS PARA CUERO 

         //CLUSTER DE PUNTOS PARA INDUSTRIA MADERA          
           var fabricaMaderaPeq = L.markerClusterGroup();
            
            const geojsonGroupFabricaMaderaPeq = L.geoJSON(indusMaderaMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Industria de la madera</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Madera
                        }); 
                },          
            });
            fabricaMaderaPeq.addLayer(geojsonGroupFabricaMaderaPeq);
            //*************************************************************//

            var fabricaMaderaGrande = L.markerClusterGroup();
            
            const geojsonGroupFabricaMaderaGrande = L.geoJSON(indusMaderaMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Industria de la madera</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Madera
                        }); 
                },            
            });
            fabricaMaderaGrande.addLayer(geojsonGroupFabricaMaderaGrande);
        //TERMINA CLUSTER DE PUNTOS PARA INDUSTRIA MADERA

        //CLUSTER DE PUNTOS PARA PAPEL      
           var fabricaPapel = L.markerClusterGroup();
            
            const geojsonGroupFabricaPapel = L.geoJSON(indusPapelMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Curtido y acabado de cuero y piel</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)
                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Papel
                            }); 
                        },       
            });
            fabricaPapel.addLayer(geojsonGroupFabricaPapel);
        //TERMINA CLUSTER DE PUNTOS PARA PAPEL

        //CLUSTER DE PUNTOS PARA PETROLEO Y CARBÓN      
           var fabricaPetrol = L.markerClusterGroup();
            
            const geojsonGroupFabricaPetrol = L.geoJSON(derivadosPetrolMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de productos derivados del petroleo y el carbón</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)
                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Petroleo
                            }); 
                        },       
            });
            fabricaPetrol.addLayer(geojsonGroupFabricaPetrol);
        //TERMINA CLUSTER DE PUNTOS PARA PETROLEO Y CARBÓN

        //CLUSTER DE PUNTOS PARA INDUSTRIA IMPRESIÓN          
           var fabricaImpresPeq = L.markerClusterGroup();
            
            const geojsonGroupFabricaImpresPeq = L.geoJSON(indusImpresMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Impresión e industrias conexas</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Impresion
                        }); 
                },          
            });
            fabricaImpresPeq.addLayer(geojsonGroupFabricaImpresPeq);
            //*************************************************************//

            var fabricaImpresGrande = L.markerClusterGroup();
            
            const geojsonGroupFabricaImpresGrande = L.geoJSON(indusImpresMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Impresión e industrias conexas</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Impresion
                        }); 
                },            
            });
            fabricaImpresGrande.addLayer(geojsonGroupFabricaImpresGrande);
        //TERMINA CLUSTER DE PUNTOS PARA INDUSTRIA IMPRESIÓN

        //CLUSTER DE PUNTOS PARA INDUSTRIA QUIMICA          
           var fabricaQuimiPeq = L.markerClusterGroup();
            
            const geojsonGroupFabricaQuimiPeq = L.geoJSON(indusQuimicaMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Industria química</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Quimica
                        }); 
                },          
            });
            fabricaQuimiPeq.addLayer(geojsonGroupFabricaQuimiPeq);
            //*************************************************************//

            var fabricaQuimiGrande = L.markerClusterGroup();
            
            const geojsonGroupFabricaQuimiGrande = L.geoJSON(indusQuimicaMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Industria química</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Quimica
                        }); 
                },            
            });
            fabricaQuimiGrande.addLayer(geojsonGroupFabricaQuimiGrande);
        //TERMINA CLUSTER DE PUNTOS PARA INDUSTRIA QUIMICA

        //CLUSTER DE PUNTOS PARA INDUSTRIA PLASTICO Y HULE          
           var fabricaPlasticPeq = L.markerClusterGroup();
            
            const geojsonGroupFabricaPlasticPeq = L.geoJSON(indusPlaticMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Industria del plástico y del hule</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Plastic
                        }); 
                },          
            });
            fabricaPlasticPeq.addLayer(geojsonGroupFabricaPlasticPeq);
            //*************************************************************//

            var fabricaPlasticGrande = L.markerClusterGroup();
            
            const geojsonGroupFabricaPlasticGrande = L.geoJSON(indusPlaticMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Industria del plástico y del hule</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Plastic
                        }); 
                },            
            });
            fabricaPlasticGrande.addLayer(geojsonGroupFabricaPlasticGrande);
        //TERMINA CLUSTER DE PUNTOS PARA INDUSTRIA PLASTICO Y HULE

        //CLUSTER DE PUNTOS PARA INDUSTRIA NO METALES          
           var fabricaNoMetalPeq = L.markerClusterGroup();
            
            const geojsonGroupFabricaNoMetalPeq = L.geoJSON(noMetalMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de productos a base de minerales no metálicos</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_NoMetal
                        }); 
                },          
            });
            fabricaNoMetalPeq.addLayer(geojsonGroupFabricaNoMetalPeq);
            //*************************************************************//

            var fabricaNoMetalGrande = L.markerClusterGroup();
            
            const geojsonGroupFabricaNoMetalGrande = L.geoJSON(noMetalMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de productos a base de minerales no metálicos</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_NoMetal
                        }); 
                },            
            });
            fabricaNoMetalGrande.addLayer(geojsonGroupFabricaNoMetalGrande);
        //TERMINA CLUSTER DE PUNTOS PARA INDUSTRIA NO METALES

        //CLUSTER DE PUNTOS PARA INDUSTRIA METALES BÁSICOS        
           var fabricaNoMetalBPeq = L.markerClusterGroup();
            
            const geojsonGroupFabricaNoMetalBPeq = L.geoJSON(noMetalMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Industrias metálicas básicas</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_MetalBasic
                        }); 
                },          
            });
            fabricaNoMetalBPeq.addLayer(geojsonGroupFabricaNoMetalBPeq);
            //*************************************************************//

            var fabricaNoMetalBGrande = L.markerClusterGroup();
            
            const geojsonGroupFabricaNoMetalBGrande = L.geoJSON(noMetalMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Industrias metálicas básicas</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_MetalBasic
                        }); 
                },            
            });
            fabricaNoMetalBGrande.addLayer(geojsonGroupFabricaNoMetalBGrande);
        //TERMINA CLUSTER DE PUNTOS PARA INDUSTRIA METALES BÁSICOS 

        //CLUSTER DE PUNTOS PARA INDUSTRIA METALICOS      
           var fabricaMetalicoPeq = L.markerClusterGroup();
            
            const geojsonGroupFabricaMetalicoPeq = L.geoJSON(fabriMetalMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de productos metálicos</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Metalico
                        }); 
                },          
            });
            fabricaMetalicoPeq.addLayer(geojsonGroupFabricaMetalicoPeq);
            //*************************************************************//

            var fabricaMetalicoGrande = L.markerClusterGroup();
            
            const geojsonGroupFabricaMetalicoGrande = L.geoJSON(fabMetalMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de productos metálicos</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Metalico
                        }); 
                },            
            });
            fabricaMetalicoGrande.addLayer(geojsonGroupFabricaMetalicoGrande);
        //TERMINA CLUSTER DE PUNTOS PARA INDUSTRIA METALICOS

        //CLUSTER DE PUNTOS PARA MAQUINARIA      
           var fabricaMaquinariaPeq = L.markerClusterGroup();
            
            const geojsonGroupFabricaMaquinariaPeq = L.geoJSON(maquinariaMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de maquinaria y equipo</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Maquinaria
                        }); 
                },          
            });
            fabricaMaquinariaPeq.addLayer(geojsonGroupFabricaMaquinariaPeq);
            //*************************************************************//

            var fabricaMaquinariaGrande = L.markerClusterGroup();
            
            const geojsonGroupFabricaMaquinariaGrande = L.geoJSON(maquinariaMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de maquinaria y equipo</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_Maquinaria
                        }); 
                },            
            });
            fabricaMaquinariaGrande.addLayer(geojsonGroupFabricaMaquinariaGrande);
        //TERMINA CLUSTER DE PUNTOS PARA MAQUINARIA

        //CLUSTER DE PUNTOS PARA EQUIPO COMPU      
           var equipoCompuPeq = L.markerClusterGroup();
            
            const geojsonGroupEquipoCompuPeq = L.geoJSON(equipoCompuMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de equipo de computación, comunicación, medición y de otros equipos, componentes y accesorios electrónicos</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_EquipoComp
                        }); 
                },          
            });
            equipoCompuPeq.addLayer(geojsonGroupEquipoCompuPeq);
            
        //TERMINA CLUSTER DE PUNTOS PARA EQUIPO COMPU

        //CLUSTER DE PUNTOS PARA EQUIPO ELECTRICO      
           var equipoElectriGrande = L.markerClusterGroup();
            
            const geojsonGroupEquipoElectriGrande = L.geoJSON(fabricAccesoriMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de accesorios, aparatos eléctricos y equipo de generación de energía eléctrica</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_FabricAcces
                        }); 
                },          
            });
            equipoElectriGrande.addLayer(geojsonGroupEquipoElectriGrande);
            
        //TERMINA CLUSTER DE PUNTOS PARA EQUIPO ELECTRICO

        //CLUSTER DE PUNTOS PARA EQUIPO TRANSPORTE     
           var fabricaEquiTransPeq = L.markerClusterGroup();
            
            const geojsonGroupFabricaEquiTransPeq = L.geoJSON(equipoTransportMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de equipo de transporte</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_equipoTrans
                        }); 
                },          
            });
            fabricaEquiTransPeq.addLayer(geojsonGroupFabricaEquiTransPeq);
            //*************************************************************//

            var fabricaEquiTransGrande = L.markerClusterGroup();
            
            const geojsonGroupFabricaEquiTransGrande = L.geoJSON(equipoTransportMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de equipo de transporte</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_equipoTrans
                        }); 
                },            
            });
            fabricaEquiTransGrande.addLayer(geojsonGroupFabricaEquiTransGrande);
        //TERMINA CLUSTER DE PUNTOS PARA EQUIPO TRANSPORTE

        //CLUSTER DE PUNTOS PARA MUEBLES      
           var equipoMueblesPeq = L.markerClusterGroup();
            
            const geojsonGroupEquipoMueblesPeq = L.geoJSON(fabriMueblesMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Fabricación de muebles, colchones y persianas</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_muebles
                        }); 
                },          
            });
            equipoMueblesPeq.addLayer(geojsonGroupEquipoMueblesPeq);
            
        //TERMINA CLUSTER DE PUNTOS PARA MUEBLES

        //CLUSTER DE PUNTOS PARA OTRAS INDUSTRIAS
           var OtrasPeq = L.markerClusterGroup();
            
            const geojsonGroupOtrasPeq = L.geoJSON(otrasIndusMenos10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Otras industrias manufactureras</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_otros
                        }); 
                },          
            });
            OtrasPeq.addLayer(geojsonGroupOtrasPeq);
            //*************************************************************//

            var fabricaOtrasGrande = L.markerClusterGroup();
            
            const geojsonGroupFabricaOtrasGrande = L.geoJSON(otrasIndusMas10, {
                onEachFeature : function(feature, layer){
                    var popupContent = ('<b>Tipo de industria: <font color="red">Otras industrias manufactureras</b><b></font></b>'+
                                        '</br><b>Actividad: </b>'+ feature.properties.nombre_act+
                                        '</br><b>Nombre establecimiento: </b>'+ feature.properties.nom_estab+
                                        '</br><b>Personal ocupado: </b>'+ feature.properties.per_ocu) ;
                    layer.bindPopup(popupContent,customOptions)

                },
                pointToLayer: function (feature, latlng) {
                    return new L.marker(latlng, { 
                             icon: icono_otros
                        }); 
                },            
            });
            fabricaOtrasGrande.addLayer(geojsonGroupFabricaOtrasGrande);
        //TERMINA CLUSTER DE PUNTOS PARA OTRAS INDUSTRIAS