// Fetch data from JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
    })
    .then(posts => {
        // Log the title of each post to the console
        posts.forEach(post => {
            console.log(post.title);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error); // Handle any errors
    });
