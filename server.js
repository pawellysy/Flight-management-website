const express = require('express');

const app = express();

var customersList = [];
app.use(express.json({limit: 'lmb'}));
app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];
  console.log('fetching')

  res.json(customers);
});
app.post('/api/addFlight', (request, response ) => {
  const data =request.body;
  response.json({
    status:'success',
    content:data
})
});




const port = 5000;

app.listen(port, () => `Server running on port ${port}`)