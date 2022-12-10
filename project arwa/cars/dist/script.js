// Javascript Object = contains collections of car details
    var cars = [{
      brand: "Audi A3",
      image: "https://imgctcf.aeplcdn.com/thumbs/p-nc-a-ver11/images/car-data/big/audi-a3-default.jpg",
      version: "35 TDI Premium Plus",
      year: "2019",
      mileage: "17/19 KMPL",
      interior: "Red",
      gears: "5",
      price: "₹50.6 Lakh",
      fuel: "petrol"
    },
    {
      brand: "Audi A5 Cabriolet",
      image: "https://imgctcf.aeplcdn.com/thumbs/p-nc-a-ver11/images/car-data/big/audi-a5-cabriolet-default.jpg",
      version: "2.0 TDI",
      year: "2019",
      mileage: "15 KMPL",
      interior: "White",
      gears: "5",
      price: "₹69.48 Lakh",
      fuel: "Diesel"
    },
    {
      brand: "Audi Q7",
      image: "https://imgctcf.aeplcdn.com/thumbs/p-nc-a-ver11/images/car-data/big/audi-q7-default.jpg",
      version: "45 TDI Black Styling",
      year: "2018",
      mileage: "12 KMPL",
      interior: "Blue",
      gears: "5",
      price: "₹81.12 Lakh",
      fuel: "Petrol"
    },
    {
      brand: "Audi R8",
      image: "https://imgctcf.aeplcdn.com/thumbs/p-nc-a-ver11/images/car-data/big/audi-r8-default.jpg",
      version: "5.2 V10 Plus",
      year: "2018",
      mileage: "6 KMPL",
      interior: "Red",
      gears: "5",
      price: "₹99.12 Lakh",
      fuel: "Diesel"
    },
    {
      brand: "Audi RS5",
      image: "https://imgctcf.aeplcdn.com/thumbs/p-nc-a-ver11/images/car-data/big/audi-rs5-default.jpg",
      version: "Coupe",
      year: "2016",
      mileage: "12 KMPL",
      interior: "White",
      gears: "5",
      price: "₹111.12 Lakh",
      fuel: "Petrol"
    }
    ];

    // Initial function call for Initial car display
    carDetail(0)

    // Common function for finding the elements and updating the values
    function carDetail(index) {
      $(".car-name").text(cars[index].brand);
      $(".car-price").text(cars[index].price);
      $(".car-version").text(cars[index].version);
      $(".car-year").text(cars[index].year);
      $(".car-mileage").text(cars[index].mileage);
      $(".car-interior").text(cars[index].interior);
      $(".car-gears").text(cars[index].gears);
      $(".car-fuel").text(cars[index].fuel);
      $(".car-large").html("<img class='car-image-large' src='" + cars[index].image + "' />");
    }

    // looping the car collections data and appending to the UI
    var collection = $(".car-collections");
    for (var i = 0; i < cars.length; i++) {
      console.log(cars[i]);
      collection.append("<img class='car-image-small' src='" + cars[i].image + "' id='" + i + "'/>");
    }

    // click function for changing the car large image when I click the small cars
    $(document).on("click", ".car-image-small", function () {
      var id = $(this).attr("id");
      console.log("--- car click " + id)
      carDetail(id);
    })