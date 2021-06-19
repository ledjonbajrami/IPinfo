

	$.getJSON(
    "https://api.ipdata.co?api-key=40de26e8d0a1928889f3df3ef8fe7bec98455755cb1332a8322543fb",
    function(data){
        //api's :) //
    console.log(data);
	
	
	var ip =  data.ip;
	$(".ip").append(ip);
	
   var ISP =  data.asn.name;
	$(".ISP").append(ISP);

	var currency = data.currency.name;
$(".currency").append(currency);
	
      var continent_name =  data.continent_name;
    $(".continent").append(continent_name);  



	var country_name =  data.country_name;
	$(".country").append(country_name);

	var flag = data.flag;
    $(".flag").append(flag);
	
	var city =  data.city;
	$(".city").append(city);
	
	
	
	var latitude =  data.latitude;
	$(".latitude").append(latitude);
	
	var longitude =  data.longitude;
    $(".longitude").append(longitude);
	
    
});


	