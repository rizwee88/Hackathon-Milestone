var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-preview');
var shareableLinkContainer = document.getElementById('Shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadpdfButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeData = {
        username: username,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "<h2><b>Editable Resume</b></h2>\n         <h3>Personal Information</h3>\n         \n         <p>Name:</b><span contenteditable=\"true\">".concat(username, "</span></p>\n         <p>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n         <p>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n         \n         <h3>Education</h3>\n         <p contenteditable=\"true\">").concat(education, "</p>\n         \n         <h3>Experience</h3>\n         <p contenteditable=\"true\">").concat(experience, "</p>\n         \n         <h3>Skills</h3>\n         <p contenteditable=\"true\">").concat(skills, "</p>\n        \n        ");
    resumeDisplayElement.innerHTML = resumeHTML;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
downloadpdfButton.addEventListener('click', function () {
    window.print();
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
