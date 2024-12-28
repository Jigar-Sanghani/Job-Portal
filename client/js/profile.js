document.addEventListener('DOMContentLoaded', () => {
    fetchUserProfile();
    fetchUserApplications();
});

const fetchUserProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/users/login.html';
        return;
    }

    try {
        const response = await fetch('http://localhost:8090/api/users/profile', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const user = await response.json();
            displayUserProfile(user);
        } else {
            alert('Failed to fetch user profile. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching user profile:', error);
        alert('An error occurred. Please try again.');
    }
}

const userProfile = async (user) => {
    const userProfile = document.getElementById('user-profile');
    userProfile.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
    `;
}

async function fetchUserApplications() {
    const token = localStorage.getItem('token');
    if (!token) {
        return;
    }

    try {
        const response = await fetch('http://localhost:8090/api/applications', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const applications = await response.json();
            displayUserApplications(applications);
        } else {
            alert('Failed to fetch user applications. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching user applications:', error);
        alert('An error occurred. Please try again.');
    }
}

const displayUser = async (applications) => {
    const userApplications = document.getElementById('user-applications');
    userApplications.innerHTML = '';

    applications.forEach(app => {
        const appElement = document.createElement('div');
        appElement.classList.add('card', 'mb-3');
        appElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${app.job.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${app.job.company}</h6>
                <p class="card-text">Status: ${app.status}</p>
            </div>
        `;
        userApplications.append(appElement);
    });
}
