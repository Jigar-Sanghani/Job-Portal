document.addEventListener('DOMContentLoaded', () => {
    updateNavigation();
});

const updateNavigation = () => {
    const nav = document.querySelector('nav');
    const isLoggedIn = localStorage.getItem('token');

    if (isLoggedIn) {
        nav.innerHTML = `
            <a class="navbar-brand" href="/">Job Portal</a>
            <div class="navbar-nav ml-auto">
                <a class="nav-item nav-link" href="/jobs/list.html">Jobs</a>
                <a class="nav-item nav-link" href="/jobs/post.html">Post Job</a>
                <a class="nav-item nav-link" href="/users/profile.html">Profile</a>
                <a class="nav-item nav-link" href="#" onclick="logout()">Logout</a>
            </div>
        `;
    } else {
        nav.innerHTML = `
            <a class="navbar-brand" href="/">Job Portal</a>
            <div class="navbar-nav ml-auto">
                <a class="nav-item nav-link" href="/jobs/list.html">Jobs</a>
                <a class="nav-item nav-link" href="/users/login.html">Login</a>
                <a class="nav-item nav-link" href="/users/register.html">Register</a>
            </div>
        `;
    }
}

const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
}
