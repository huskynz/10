// Fetch JSON from the specified URL
fetch('http://localhost:4321/api/status')
    .then(response => {
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON from the response
    })
    .then(data => {
        // Log the fetched JSON data
        console.log(data);
    })
    .catch(error => {
        // Log any errors that occur during the fetch
        console.error('There was a problem with the fetch operation:', error);
    });
