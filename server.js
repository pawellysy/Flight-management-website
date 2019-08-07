const express = require('express');
const Datastore = require('nedb');

const app = express();



app.use(express.json({limit: '1mb'}));

const Flights = new Datastore ('Flights.db');
Flights.loadDatabase();
const Passagers = new Datastore('Passagers.db')
Passagers.loadDatabase();




app.post('/api/addFlight', (request, response ) => {
  const data =request.body;
  Flights.insert(data)
  response.json({

    data : data
  }
    
)
});



app.post('/api/addCustomer', (request, response) => {
  const data = request.body;
  Passagers.insert(data)
  response.json({
    data:data
  })
})


  app.get('/api/getCustomers', (request, response) =>
  {
    Passagers.find({}, (err, data) => {
     
      response.json(data)
    })


  })

  app.get('/api/getFlights', (request, response) =>{
      Passagers.find({}, (err, data) => {
        response.json(data)
      })
  })


  

  





const port = 5000;

app.listen(port, () => `Server running on port ${port}`)