# Medical Bills Post and Get Requests

## Running the server

Open a terminal in the folder of the server. Run the following commands:

```
npm install
node server.js
```

After this you should see:

```
Server started at port: 3000
```

If there are any errors, it's possible the port is already being used and you may need to manually change the port number.

## Creating requests

The request URL should be ```localhost:3000/items```.

For the GET request you should receive a JSON of the list of medical bills in memory since the server has started.

For the POST request you must include the following in the request body: **name**, **address**, **hospital**, **date**, and **bill**.

For example it can look like this:

```
{
    "name": "Mihad Khondker",
    "address": "123 ABC St,
    "hospital": "New York Hospital",
    "date": "02/16/2023",
    "bill": "$893.42"
}
```

There a few flaws to this, as in a real-world case this would be handled by a database, where the request parameters would be strictly typed. The data would be far more useful and safe if the inputs were properly validated, such as the bill having to be a floating point number or the name contains all valid alphabetic characters. However, I hope this basic example showcases the understanding of creating API endpoints and handling requests. 