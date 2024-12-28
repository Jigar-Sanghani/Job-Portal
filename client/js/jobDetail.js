document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('id');
    if (jobId) {
        fetchJobDetails(jobId);
    }
});

const fetchJobDetails = async (jobId) => {
    try {
        const response = await fetch(`http://localhost:8090/api/jobs/${jobId}`);
        const job = await response.json();
        displayJobDetails(job);
    } catch (error) {
        console.error('Error fetching job details:', error);
    }
}

const displayJobDetails = async (job) => {
    const jobDetails = document.getElementById('job-details');
    jobDetails.innerHTML = `
        <h2>${job.title}</h2>
        <h3>${job.company}</h3>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Description:</strong> ${job.description}</p>
    `;

    const applyBtn = document.getElementById('apply-btn');
    applyBtn.addEventListener('click', () => applyForJob(job._id));
}

const applyForJob = async (jobId) => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Please login to apply for this job');
        window.location.href = '/users/login.html';
        return;
    }

    try {
        const response = await fetch('http://localhost:8090/api/applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ jobId })
        });

        if (response.ok) {
            alert('Application submitted successfully!');
        } else {
            alert('Failed to submit application. Please try again.');
        }
    } catch (error) {
        console.error('Error applying for job:', error);
        alert('An error occurred. Please try again.');
    }
}
