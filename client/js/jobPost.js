document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('post-job-form');
    form.addEventListener('submit', postJob);
});

const postJob = async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    const token = localStorage.getItem('token');
    if (!token) {
        alert('Please login to post a job');
        window.location.href = '/users/login.html';
        return;
    }

    try {
        const response = await fetch('http://localhost:8090/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title, company, location, description })
        });

        if (response.ok) {
            alert('Job posted successfully!');
            window.location.href = '/jobs/list.html';
        } else {
            alert('Failed to post job. Please try again.');
        }
    } catch (error) {
        console.error('Error posting job:', error);
        alert('An error occurred. Please try again.');
    }
}
