ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([691903.461645, 6147331.446194, 706407.170445, 6157000.585394]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMapsSatelit_1 = new ol.layer.Tile({
            'title': 'Google Maps Satelit',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Projektafgrnsning_Kge_3_2024_2 = new ol.format.GeoJSON();
var features_Projektafgrnsning_Kge_3_2024_2 = format_Projektafgrnsning_Kge_3_2024_2.readFeatures(json_Projektafgrnsning_Kge_3_2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Projektafgrnsning_Kge_3_2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projektafgrnsning_Kge_3_2024_2.addFeatures(features_Projektafgrnsning_Kge_3_2024_2);
var lyr_Projektafgrnsning_Kge_3_2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projektafgrnsning_Kge_3_2024_2, 
                style: style_Projektafgrnsning_Kge_3_2024_2,
                popuplayertitle: "Projektafgrænsning_Køge_§3_2024",
                interactive: true,
                title: '<img src="styles/legend/Projektafgrnsning_Kge_3_2024_2.png" /> Projektafgrænsning_Køge_§3_2024'
            });
var format_Ny_natur_overblik_3 = new ol.format.GeoJSON();
var features_Ny_natur_overblik_3 = format_Ny_natur_overblik_3.readFeatures(json_Ny_natur_overblik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Ny_natur_overblik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ny_natur_overblik_3.addFeatures(features_Ny_natur_overblik_3);
var lyr_Ny_natur_overblik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ny_natur_overblik_3, 
                style: style_Ny_natur_overblik_3,
                popuplayertitle: "Ny_natur_overblik",
                interactive: true,
                title: '<img src="styles/legend/Ny_natur_overblik_3.png" /> Ny_natur_overblik'
            });
var format_Beskyttedenaturtyper_ifokusomrder_2024_4 = new ol.format.GeoJSON();
var features_Beskyttedenaturtyper_ifokusomrder_2024_4 = format_Beskyttedenaturtyper_ifokusomrder_2024_4.readFeatures(json_Beskyttedenaturtyper_ifokusomrder_2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_Beskyttedenaturtyper_ifokusomrder_2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beskyttedenaturtyper_ifokusomrder_2024_4.addFeatures(features_Beskyttedenaturtyper_ifokusomrder_2024_4);
var lyr_Beskyttedenaturtyper_ifokusomrder_2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beskyttedenaturtyper_ifokusomrder_2024_4, 
                style: style_Beskyttedenaturtyper_ifokusomrder_2024_4,
                popuplayertitle: "Beskyttede naturtyper_i fokusområder_2024",
                interactive: true,
    title: 'Beskyttede naturtyper_i fokusområder_2024<br />\
    <img src="styles/legend/Beskyttedenaturtyper_ifokusomrder_2024_4_0.png" /> Eng<br />\
    <img src="styles/legend/Beskyttedenaturtyper_ifokusomrder_2024_4_1.png" /> Mose<br />\
    <img src="styles/legend/Beskyttedenaturtyper_ifokusomrder_2024_4_2.png" /> Overdrev<br />\
    <img src="styles/legend/Beskyttedenaturtyper_ifokusomrder_2024_4_3.png" /> Sø<br />\
    <img src="styles/legend/Beskyttedenaturtyper_ifokusomrder_2024_4_4.png" /> <br />'
        });
var group_Exporteredetilindtastning = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Exporterede til indtastning"});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleMapsSatelit_1.setVisible(true);lyr_Projektafgrnsning_Kge_3_2024_2.setVisible(true);lyr_Ny_natur_overblik_3.setVisible(true);lyr_Beskyttedenaturtyper_ifokusomrder_2024_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleMapsSatelit_1,lyr_Projektafgrnsning_Kge_3_2024_2,lyr_Ny_natur_overblik_3,lyr_Beskyttedenaturtyper_ifokusomrder_2024_4];
lyr_Projektafgrnsning_Kge_3_2024_2.set('fieldAliases', {'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', 'år': 'år', });
lyr_Ny_natur_overblik_3.set('fieldAliases', {'Objekt_id': 'Objekt_id', 'Oprettet': 'Oprettet', 'Shape_area': 'Shape_area', 'Natyp_navn': 'Natyp_navn', 'Ny natur': 'Ny natur', 'Vedlighold': 'Vedlighold', 'Driftsspor': 'Driftsspor', 'Arealstruk': 'Arealstruk', 'Farve/jord': 'Farve/jord', 'Ortoårsta': 'Ortoårsta', 'Konflikt': 'Konflikt', 'Note': 'Note', 'FeltID': 'FeltID', });
lyr_Beskyttedenaturtyper_ifokusomrder_2024_4.set('fieldAliases', {'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Natyp_kode': 'Natyp_kode', 'Natyp_navn': 'Natyp_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Sagsbeh': 'Sagsbeh', 'Gl_sys_ref': 'Gl_sys_ref', 'Besig_dato': 'Besig_dato', 'Journalnr': 'Journalnr', 'Vedligehol': 'Vedligehol', 'Vedligeh_1': 'Vedligeh_1', 'Navn': 'Navn', 'Fredning': 'Fredning', 'forsøg': 'forsøg', });
lyr_Projektafgrnsning_Kge_3_2024_2.set('fieldImages', {'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', 'år': '', });
lyr_Ny_natur_overblik_3.set('fieldImages', {'Objekt_id': 'TextEdit', 'Oprettet': 'TextEdit', 'Shape_area': 'TextEdit', 'Natyp_navn': 'TextEdit', 'Ny natur': 'TextEdit', 'Vedlighold': 'TextEdit', 'Driftsspor': 'TextEdit', 'Arealstruk': 'TextEdit', 'Farve/jord': 'TextEdit', 'Ortoårsta': 'TextEdit', 'Konflikt': 'TextEdit', 'Note': 'TextEdit', 'FeltID': 'TextEdit', });
lyr_Beskyttedenaturtyper_ifokusomrder_2024_4.set('fieldImages', {'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Natyp_kode': 'TextEdit', 'Natyp_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Sagsbeh': 'TextEdit', 'Gl_sys_ref': 'TextEdit', 'Besig_dato': 'TextEdit', 'Journalnr': 'TextEdit', 'Vedligehol': 'TextEdit', 'Vedligeh_1': 'TextEdit', 'Navn': 'TextEdit', 'Fredning': 'TextEdit', 'forsøg': 'Range', });
lyr_Projektafgrnsning_Kge_3_2024_2.set('fieldLabels', {'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', 'år': 'no label', });
lyr_Ny_natur_overblik_3.set('fieldLabels', {'Objekt_id': 'no label', 'Oprettet': 'no label', 'Shape_area': 'no label', 'Natyp_navn': 'no label', 'Ny natur': 'no label', 'Vedlighold': 'no label', 'Driftsspor': 'no label', 'Arealstruk': 'no label', 'Farve/jord': 'no label', 'Ortoårsta': 'no label', 'Konflikt': 'no label', 'Note': 'no label', 'FeltID': 'no label', });
lyr_Beskyttedenaturtyper_ifokusomrder_2024_4.set('fieldLabels', {'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'inline label - always visible', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'inline label - always visible', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Natyp_kode': 'no label', 'Natyp_navn': 'inline label - always visible', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Sagsbeh': 'no label', 'Gl_sys_ref': 'no label', 'Besig_dato': 'no label', 'Journalnr': 'no label', 'Vedligehol': 'no label', 'Vedligeh_1': 'no label', 'Navn': 'inline label - always visible', 'Fredning': 'inline label - always visible', 'forsøg': 'no label', });
lyr_Beskyttedenaturtyper_ifokusomrder_2024_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});