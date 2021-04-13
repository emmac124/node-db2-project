// STRETCH

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('cars').truncate() 
      .then(function () {
        // Inserts seed entries
        return knex('cars').insert([
          {vin: "1GT2654", make: "Toyota", model: "Tacoma", mileage: 46000, transmission: "automatic"},
          {vin: "51615YDG5", make: "Honda", model: "CR-V", mileage: 140000, transmission: "automatic"},
        ]);
      });
  };
  