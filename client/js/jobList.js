document.addEventListener('DOMContentLoaded', () => {
    fetchJobs();
});

const fetchJobs = async () => {
    try {
        const response = await fetch('http://localhost:8090/api/jobs');
        const jobs = await response.json();
        displayJobs(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
    }
}

const displayJobs = (jobs) => {
    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = '';

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('col-md-4', 'mb-4');
        jobElement.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${job.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${job.company}</h6>
                    <p class="card-text">${job.location}</p>
                    <a href="/view/jobDetail.html?id=${job._id}" class="btn btn-primary">View Details</a>
                </div>
            </div>
        `;
        jobListings.append(jobElement);
    });
}
