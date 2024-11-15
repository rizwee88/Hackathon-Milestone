    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeDisplayElement = document.getElementById('resume-preview') as HTMLDivElement;
    const shareableLinkContainer = document.getElementById('Shareable-link-container') as HTMLDivElement;
    const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
    const downloadpdfButton = document.getElementById('download-pdf') as HTMLButtonElement;


    form.addEventListener('submit', (event:Event ) =>{
        event.preventDefault();

        const username =(document.getElementById('username')as HTMLInputElement).value
        const email =(document.getElementById('email')as HTMLInputElement).value
        const phone =(document.getElementById('phone')as HTMLInputElement).value
        const education =(document.getElementById('education')as HTMLInputElement).value
        const experience =(document.getElementById('experience')as HTMLInputElement).value
        const skills =(document.getElementById('skills')as HTMLInputElement).value

        const resumeData = {
            username,
            email,
            phone,
            education,
            experience,
            skills
            };
            localStorage.setItem(username, JSON.stringify(resumeData));



        const resumeHTML =
        `<h2><b>Editable Resume</b></h2>
         <h3>Personal Information</h3>
         
         <p>Name:</b><span contenteditable="true">${username}</span></p>
         <p>Email:</b><span contenteditable="true">${email}</span></p>
         <p>Phone:</b><span contenteditable="true">${phone}</span></p>
         
         <h3>Education</h3>
         <p contenteditable="true">${education}</p>
         
         <h3>Experience</h3>
         <p contenteditable="true">${experience}</p>
         
         <h3>Skills</h3>
         <p contenteditable="true">${skills}</p>
        
        `;
        resumeDisplayElement.innerHTML = resumeHTML;
        const shareableURL =
        `${window.location.origin}?username=${encodeURIComponent(username)}`;
        shareableLinkContainer.style.display = 'block';
        shareableLinkElement.href = shareableURL;
        shareableLinkElement.textContent = shareableURL;
    });
    
    downloadpdfButton.addEventListener('click', () => {window.print();
    });
    // Prefill the form based on the username in the URL
    window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
    
   
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value =
    username;
    (document.getElementById('name') as HTMLInputElement).value =
    resumeData.name;
    (document.getElementById('email') as HTMLInputElement).value =
    resumeData.email;
    (document.getElementById('phone') as HTMLInputElement).value =
    resumeData.phone;
    (document.getElementById('education') as HTMLTextAreaElement).value =
    resumeData.education;
    (document.getElementById('experience') as HTMLTextAreaElement).value
    = resumeData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value =
    resumeData.skills;
    }
    }
});