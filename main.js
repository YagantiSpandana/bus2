var buses=[
  {serNo:"2948",TravName:" amaravathi",fr:"Hyderabad",to:"Chennai",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" super Luxury",fr:"Hyderabad",to:"Tirupati",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:"Volva",fr:"Hyderabad",to:"Banglore",ArT:"31/01/2024",DeT:"01/02/2024",fare:"485",type:"NON AC",NoS:"35"},
  {serNo:"2948",TravName:" amaravathi",fr:"Hyderabad",to:"Vizag",ArT:"29/01/2024",DeT:"30/01/2024",fare:"6755",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Volva",fr:"Chennai",to:"Hyderabad",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"32"},
  {serNo:"2948",TravName:" Indra",fr:"Chennai",to:"Tirupati",ArT:"31/01/2024",DeT:"01/02/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" amaravathi",fr:"Chennai",to:"Banglore",ArT:"30/01/2024",DeT:"31/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" super Luxury",fr:"Chennai",to:"Vizag",ArT:"29/01/2024",DeT:"30/01/2024",fare:"515",type:"AC",NoS:"40"},
  {serNo:"2948",TravName:" Indra",fr:"Tirupati",to:"Hyderabad",ArT:"31/01/2024",DeT:"01/02/2024",fare:"435",type:"AC",NoS:"35"},
  {serNo:"5739",TravName:" Volva",fr:"Tirupati",to:"Chennai",ArT:"29/01/2024",DeT:"30/01/2024",fare:"749",type:"NON AC",NoS:"35"},
  {serNo:"2948",TravName:" Amaravathi",fr:"Tirupati",to:"Banglore",ArT:"29/01/2024",DeT:"30/01/2024",fare:"849",type:"AC",NoS:"35"},
  {serNo:"5489",TravName:" Volva",fr:"Tirupati",to:"Vizag",ArT:"31/01/2024",DeT:"01/02/2024",fare:"348",type:"AC",NoS:"33"},
  {serNo:"2459",TravName:" amaravathi",fr:"Banglore",to:"Hyderabad",ArT:"30/01/2024",DeT:"31/01/2024",fare:"238",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" super Luxury",fr:"Banglore",to:"Chennai",ArT:"29/01/2024",DeT:"30/01/2024",fare:"307",type:"AC",NoS:"35"},
  {serNo:"5355",TravName:" Indra",fr:"Banglore",to:"Tirupati",ArT:"29/01/2024",DeT:"30/01/2024",fare:"494",type:"AC",NoS:"35"},
  {serNo:"8467",TravName:" amaravathi",fr:"Banglore",to:"Vizag",ArT:"29/01/2024",DeT:"30/01/2024",fare:"408",type:"AC",NoS:"42"},
  {serNo:"2456",TravName:" Volva",fr:"Vizag",to:"Hyderabad",ArT:"31/01/2024",DeT:"01/02/2024",fare:"533",type:"NON AC",NoS:"35"},
  {serNo:"6483",TravName:" super Luxury",fr:"Vizag",to:"Chennai",ArT:"29/01/2024",DeT:"30/01/2024",fare:"255",type:"AC",NoS:"35"},
  {serNo:"4385",TravName:" amaravathi",fr:"Vizag",to:"Banglore",ArT:"30/01/2024",DeT:"31/01/2024",fare:"754",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Super Luxury",fr:"Vizag",to:"Tirupati",ArT:"29/01/2024",DeT:"30/01/2024",fare:"367",type:"AC",NoS:"42"},
  {serNo:"2948",TravName:" amaravathi",fr:"Hyderabad",to:"Chennai",ArT:"29/01/2024",DeT:"01/02/2024",fare:"356",type:"AC",NoS:"35"},
  {serNo:"4925",TravName:" super Luxury",fr:"Hyderabad",to:"Tirupati",ArT:"29/01/2024",DeT:"30/01/2024",fare:"356",type:"NON AC",NoS:"35"},
  {serNo:"2948",TravName:"super Luxury",fr:"Hyderabad",to:"Banglore",ArT:"29/01/2024",DeT:"30/01/2024",fare:"965",type:"AC",NoS:"34"},
  {serNo:"5639",TravName:" amaravathi",fr:"Hyderabad",to:"Vizag",ArT:"30/01/2024",DeT:"31/01/2024",fare:"357",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Volva",fr:"Chennai",to:"Hyderabad",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Indra",fr:"Chennai",to:"Tirupati",ArT:"31/01/2024",DeT:"01/02/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"4729",TravName:" amaravathi",fr:"Chennai",to:"Banglore",ArT:"30/01/2024",DeT:"31/01/2024",fare:"732",type:"AC",NoS:"42"},
  {serNo:"2948",TravName:" super Luxury",fr:"Chennai",to:"Vizag",ArT:"29/01/2024",DeT:"30/01/2024",fare:"256",type:"AC",NoS:"35"},
  {serNo:"4629",TravName:" amaravathi",fr:"Tirupati",to:"Hyderabad",ArT:"29/01/2024",DeT:"30/01/2024",fare:"754",type:"AC",NoS:"35"},
  {serNo:"4820",TravName:" Volva",fr:"Tirupati",to:"Chennai",ArT:"29/01/2024",DeT:"30/01/2024",fare:"633",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Indra",fr:"Tirupati",to:"Banglore",ArT:"31/01/2024",DeT:"01/02/2024",fare:"743",type:"NON AC",NoS:"35"},
  {serNo:"2948",TravName:" Amaravati",fr:"Tirupati",to:"Vizag",ArT:"29/01/2024",DeT:"30/01/2024",fare:"632",type:"AC",NoS:"53"},
  {serNo:"4638",TravName:" amaravathi",fr:"Banglore",to:"Hyderabad",ArT:"30/01/2024",DeT:"31/01/2024",fare:"642",type:"AC",NoS:"35"},
  {serNo:"4820",TravName:" super Luxury",fr:"Banglore",to:"Chennai",ArT:"29/01/2024",DeT:"30/01/2024",fare:"257",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Indra",fr:"Banglore",to:"Tirupati",ArT:"31/01/2024",DeT:"01/02/2024",fare:"744",type:"AC",NoS:"35"},
  {serNo:"8929",TravName:" amaravathi",fr:"Banglore",to:"Vizag",ArT:"29/01/2024",DeT:"30/01/2024",fare:"536",type:"AC",NoS:"35"},
  {serNo:"3629",TravName:" Volva",fr:"Vizag",to:"Hyderabad",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Amaravathi",fr:"Vizag",to:"Chennai",ArT:"30/01/2024",DeT:"31/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" amaravathi",fr:"Vizag",to:"Banglore",ArT:"31/01/2024",DeT:"01/02/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"36484",TravName:" Super Luxury",fr:"Vizag",to:"Tirupati",ArT:"29/01/2024",DeT:"30/01/2024",fare:"743",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Indra",fr:"Hyderabad",to:"Chennai",ArT:"30/01/2024",DeT:"31/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"4728",TravName:" super Luxury",fr:"Hyderabad",to:"Tirupati",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:"Volva",fr:"Hyderabad",to:"Banglore",ArT:"31/01/2024",DeT:"01/02/2024",fare:"415",type:"NON AC",NoS:"35"},
  {serNo:"2948",TravName:" amaravathi",fr:"Hyderabad",to:"Vizag",ArT:"29/01/2024",DeT:"30/01/2024",fare:"632",type:"AC",NoS:"35"},
  {serNo:"4629",TravName:" Volva",fr:"Chennai",to:"Hyderabad",ArT:"30/01/2024",DeT:"31/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"13829",TravName:" Indra",fr:"Chennai",to:"Tirupati",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" amaravathi",fr:"Chennai",to:"Banglore",ArT:"31/01/2024",DeT:"01/02/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" super Luxury",fr:"Chennai",to:"Vizag",ArT:"30/01/2024",DeT:"01/01/2024",fare:"643",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" amaravathi",fr:"Tirupati",to:"Hyderabad",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"32749",TravName:" Volva",fr:"Tirupati",to:"Chennai",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Indra",fr:"Tirupati",to:"Banglore",ArT:"31/01/2024",DeT:"01/02/2024",fare:"415",type:"NON AC",NoS:"35"},
  {serNo:"2948",TravName:" Indra",fr:"Tirupati",to:"Vizag",ArT:"29/01/2024",DeT:"30/01/2024",fare:"643",type:"AC",NoS:"35"},
  {serNo:"3729",TravName:" amaravathi",fr:"Banglore",to:"Hyderabad",ArT:"30/01/2024",DeT:"31/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" super Luxury",fr:"Banglore",to:"Chennai",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Indra",fr:"Banglore",to:"Tirupati",ArT:"29/01/2024",DeT:"30/01/2024",fare:"534",type:"AC",NoS:"54"},
  {serNo:"2948",TravName:" amaravathi",fr:"Banglore",to:"Vizag",ArT:"31/01/2024",DeT:"01/02/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"3820",TravName:" Volva",fr:"Vizag",to:"Hyderabad",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" super Luxury",fr:"Vizag",to:"Chennai",ArT:"30/01/2024",DeT:"31/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"3639",TravName:" amaravathi",fr:"Vizag",to:"Banglore",ArT:"29/01/2024",DeT:"30/01/2024",fare:"543",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" amaravathi",fr:"Vizag",to:"Tirupati",ArT:"31/01/2024",DeT:"01/02/2024",fare:"415",type:"AC",NoS:"47"},
  {serNo:"2948",TravName:" Indra",fr:"Hyderabad",to:"Chennai",ArT:"30/01/2024",DeT:"31/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" super Luxury",fr:"Hyderabad",to:"Tirupati",ArT:"29/01/2024",DeT:"30/01/2024",fare:"643",type:"AC",NoS:"35"},
  {serNo:"3749",TravName:"super Luxury",fr:"Hyderabad",to:"Banglore",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" amaravathi",fr:"Hyderabad",to:"Vizag",ArT:"31/01/2024",DeT:"01/02/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Volva",fr:"Chennai",to:"Hyderabad",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"NON AC",NoS:"35"},
  {serNo:"2948",TravName:" Indra",fr:"Chennai",to:"Tirupati",ArT:"29/01/2024",DeT:"30/01/2024",fare:"532",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" amaravathi",fr:"Chennai",to:"Banglore",ArT:"30/01/2024",DeT:"31/01/2024",fare:"415",type:"AC",NoS:"47"},
  {serNo:"2948",TravName:" super Luxury",fr:"Chennai",to:"Vizag",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"3629",TravName:" amaravathi",fr:"Tirupati",to:"Hyderabad",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"NON AC",NoS:"35"},
  {serNo:"2948",TravName:" Volva",fr:"Tirupati",to:"Chennai",ArT:"31/01/2024",DeT:"01/02/2024",fare:"532",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Indra",fr:"Tirupati",to:"Banglore",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Volva",fr:"Tirupati",to:"Vizag",ArT:"30/01/2024",DeT:"31/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Super Luxury",fr:"Banglore",to:"Hyderabad",ArT:"29/01/2024",DeT:"30/01/2024",fare:"455",type:"AC",NoS:"35"},
  {serNo:"3729",TravName:" super Luxury",fr:"Banglore",to:"Chennai",ArT:"29/01/2024",DeT:"30/01/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" Indra",fr:"Banglore",to:"Tirupati",ArT:"30/01/2024",DeT:"31/01/2024",fare:"415",type:"NON AC",NoS:"28"},
  {serNo:"4827",TravName:" amaravathi",fr:"Banglore",to:"Vizag",ArT:"30/01/2024",DeT:"31/01/2024",fare:"415",type:"NON AC",NoS:"35"},
  {serNo:"2948",TravName:" Amaravathi",fr:"Vizag",to:"Hyderabad",ArT:"29/01/2024",DeT:"30/01/2024",fare:"532",type:"AC",NoS:"47"},
  {serNo:"3829",TravName:" super Luxury",fr:"Vizag",to:"Chennai",ArT:"31/01/2024",DeT:"01/02/2024",fare:"415",type:"AC",NoS:"35"},
  {serNo:"2948",TravName:" amaravathi",fr:"Vizag",to:"Banglore",ArT:"30/01/2024",DeT:"31/01/2024",fare:"415",type:"AC",NoS:"46"},
  {serNo:"37388",TravName:" Volva",fr:"Vizag",to:"Tirupati",ArT:"30/01/2024",DeT:"31/01/2024",fare:"643",type:"NON AC",NoS:"35"},
  ];
  function search(){
    var count=0;
    var f=document.getElementById("f1").value;
    var t=document.getElementById("f2").value;
    var d=document.getElementById("dates").value;
            var data="<table>"+"<tr>"+"<th>"+"S.NO"+"</th>"+"<th>"+"SER.NO"+"</th>"+ 
                    "<th>"+"TRAVELS NAME"+"</th>"+"<th>"+"FROM"+
                        "</th>"+"<th>"+"TO"+"</th>"+"<th>"+"ARRIVAL DATE"+"</th>"+"<th>"+"DEPATURE DATE"+"</th>"
                        +"<th>"+"PRICE"+"</th>"+"<th>"+"AC/NON AC"+"</th>"+"<th>"+"NO OF SEATS"+"</th>"+"</tr>"+"</table>";
            for(var i=0;i<buses.length;i++){
              if(buses[i].fr == f && buses[i].to == t && buses[i].ArT == d){
                count=count+1;
                if(buses[i].type=="AC"){
                  buses[i].type=1;
                }
                else{
                  buses[i].type=0;
                }
                data = data+"<table>"+ "<tr>"+"<td>"+count+"</td>"+"<td>"+buses[i].serNo+"</td>"+ 
                    "<td>"+buses[i].TravName+"</td>"+"<td>"+buses[i].fr+
                        "</td>"+"<td>"+buses[i].to+"</td>"+"<td>"+buses[i].ArT+"</td>"
                        +"<td>"+buses[i].DeT+"</td>"+"<td>"+buses[i].fare+"</td>"+"<td>"+buses[i].type+"</td>"
                        +"<td>"+buses[i].NoS+"</td>"+"</tr>"+"</table>";
            }
          }
            document.getElementById("adding").innerHTML=data;
            return false;
        }