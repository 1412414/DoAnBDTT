 // Set up size 
 var width = 750;
var height = width;
       
        // Set up projection that map is using 
        var projection = d3.geoMercator()
            .center([-122.433701, 37.767683]) 
            // San Francisco, roughly   
            .scale(225000)     
            .translate([width / 2, height / 2]); 

        // Add an svg element to the DOM 
        var svg = d3.select("#svg").append("svg")    
            .attr("width", width)  
            .attr("height", height); 

        // Add svg map at correct size
        svg.append("image")           
            .attr("width", width)           
            .attr("height", height)          
            .attr("xlink:href", "images/SanFranciscoCityWeb-Illustrator.svg");  

        d3.csv("csv/trees.csv", function(data) {
            console.log(data[0]);

            // Get Species
            SelectSpecies = [];
            exist = 0;
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < SelectSpecies.length; j++) {
                    if (SelectSpecies[j] == data[i].qSpecies) {
                        exist = 1;
                        break;
                    }
                }

                if (exist == 0) {
                    SelectSpecies.push(data[i].qSpecies);
                }
                else {
                    exist = 0;
                }
            } 

            // Sort SelectSpecies
            SelectSpecies.sort();

            // Add Species to Select
            for (var j = 0; j < SelectSpecies.length; j++) {
                $("#SelectSpecies").append("<option>" + SelectSpecies[j] + "</option>");
            }

            // Get PlotSize
            PlotSize = [];
            exist = 0;
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < PlotSize.length; j++) {
                    if (PlotSize[j] == data[i].PlotSize.toUpperCase()) {
                        exist = 1;
                        break;
                    }
                }

                if (exist == 0) {
                    PlotSize.push(data[i].PlotSize.toUpperCase());
                }
                else {
                    exist = 0;
                }
            } 

            // Sort PlotSize
            PlotSize.sort();

            // Add PlotSize to checkbox
            for (var j = 0; j < PlotSize.length; j++) {
                $("#SelectPlotSize").append("<option>" + PlotSize[j] + "</option>");
            }

            // Add Trees
            var g = svg.append("g");

            var circle = g.selectAll("circle")
                .data(data).enter()  
                .append("svg:circle")
                .attr("r", 2).attr("stroke", "black").attr("stroke-width", 0.5).attr("fill", "green")
                .attr("id", function(d) {
                    return d.TreeID;
                })
                .attr("species", function(d) {
                    return d.qSpecies;
                })
                .attr("plotsize", function(d) {
                    return d.PlotSize.toUpperCase();
                })
                .attr("cx", function(d) {
                    return projection([d.Longitude, data.Latitude])[0];
                })
                .attr("cy", function(d) {
                    return projection([d.Longitude, d.Latitude])[1];
                })
                .append("svg:title")
                .text(function(d) {
                    return d.TreeID;
                });

            // When clicking a circle
            $("circle").click(function() {
                var id = this.id;
                
                for (var i = 0; i < data.length; i++) {
                    if (data[i].TreeID == id) {
                        $("#TreeID").text(data[i].TreeID);
                        $("#Longitude").text(data[i].Longitude);
                        $("#Latitude").text(data[i].Latitude);
                        $("#PlotSize").text(data[i].PlotSize.toUpperCase());
                        $("#Address").text(data[i].qAddress);
                        $("#SiteInfo").text(data[i].qSiteInfo);
                        $("#Species").text(data[i].qSpecies);

                        break;
                    }
                }
            });

            // When selecting a species
            $("#SelectSpecies").change(function() {
                var SpeciesSelected = this.value;
                var PlotSizeSelected = $("#SelectPlotSize").find(":selected").text();

                if (SpeciesSelected == "All" && PlotSizeSelected == "All") {
                    $("circle").show();
                }
                else { 
                    if (SpeciesSelected == "All") {
                        $("circle").hide();
                        $("[plotsize='" + PlotSizeSelected + "']").show();
                    }
                    else {
                        if (PlotSizeSelected == "All") {
                            $("circle").hide();
                            $("[species='" + SpeciesSelected + "']").show();
                        }
                        else {
                            $("circle").hide();
                            $("[species='" + SpeciesSelected + "'][plotsize='" + PlotSizeSelected + "']").show();
                        }
                    }     
                }
            });

            // When selecting a plotsize
            $("#SelectPlotSize").change(function() {
                var SpeciesSelected = $("#SelectSpecies").find(":selected").text();
                var PlotSizeSelected = this.value;

                if (SpeciesSelected == "All" && PlotSizeSelected == "All") {
                    $("circle").show();
                }
                else { 
                    if (SpeciesSelected == "All") {
                        $("circle").hide();
                        $("[plotsize='" + PlotSizeSelected + "']").show();
                    }
                    else {
                        if (PlotSizeSelected == "All") {
                            $("circle").hide();
                            $("[species='" + SpeciesSelected + "']").show();
                        }
                        else {
                            $("circle").hide();
                            $("[species='" + SpeciesSelected + "'][plotsize='" + PlotSizeSelected + "']").show();
                        }
                    }     
                }
            });
        });