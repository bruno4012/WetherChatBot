class UI {

  populateUI(data) {

    var celsius = data.main.temp;
    console.log(celsius);
    //de-structure vars
    let productTrip;
    //add them to inner HTML
    if (celsius > 10 && celsius < 16){
      productTrip =  `You are going to ${data.name} and the wether is not that warm their, today is ${Math.round(data.main.temp)} degrees.
                         You can bring with you the folowing clothes jumper, T-shirt and some jeans on your trip

 `;
}
     if (celsius > 0 && celsius < 10 ){
      productTrip = `
              ou are going to ${data.name} and the wether is cold their, today is ${Math.round(data.main.temp)} degrees.
              You can bring heavy duty clothes, good jacket on your trip.
      `;
    }
      if (celsius > 16 && celsius < 25 ){
        productTrip= `
        
       You are going to ${data.name} and the wether is good their, today is ${Math.round(data.main.temp)} degrees.
       You can bring some T-shirt, sweatshirt and your shorts on your trip.

       `;
     }
       if (celsius > 25){
        productTrip = `
                 You are going to ${data.name} and the wether is really hot their, today is ${Math.round(data.main.temp)} degrees.
           You can bring you top, shorts and bikini on your trip. 
        `;
      };

      //send back answer 
      trip(data,productTrip)
    };

    
}
