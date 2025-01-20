async function apicall() {
    const url = 'https://api.smartrecruiters.com/feed/publications';

    const options = {
        method: 'GET', 
        headers: {
            'X-SmartToken': 'abc123'
        }
    };

    //get data from the API
    fetch(url, options)
        .then(response => {
            if (!response.ok) { 
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });

}


function displayJobs(data) {
    const container = document.getElementById('jobsContainer');
    container.innerHTML = ''; 
    if (data.results && data.results.length > 0) {
        data.results.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.innerHTML = `
                <h2>${job.jobtitle}</h2>
                <p>${job.company}</p>
                <p>${job.snippet}</p>
                <a href="${job.url}" target="_blank">View Job</a>
            `;
            container.appendChild(jobElement);
        });
    } else {
        container.innerHTML = '<p>No jobs found.</p>';
    }
}