    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeDisplayEliment = document.getElementById('resume-preview') as HTMLDivElement
    form.addEventListener('submit', (event:Event ) =>{
        event.preventDefault();

        const name =(document.getElementById('name')as HTMLInputElement).value
        const email =(document.getElementById('email')as HTMLInputElement).value
        const phone =(document.getElementById('phone')as HTMLInputElement).value
        const education =(document.getElementById('education')as HTMLInputElement).value
        const experience =(document.getElementById('experience')as HTMLInputElement).value
        const skills =(document.getElementById('skills')as HTMLInputElement).value

        const resumeHTML =
        `<h2><b>Resume</b></h2>
         <h3>Personal Information</h3>
         
         <p>Name: ${name}</p>
         <p>Email: ${email}</p>
         <p>Phone: ${phone}</p>
         
         <h3>Education</h3>
         <p>${education}</p>
         
         <h3>Experience</h3>
         <p>${experience}</p>
         
         <h3>Skills</h3>
         <p>${skills}</p>
        
        `;
        if(resumeDisplayEliment){
         resumeDisplayEliment.innerHTML = resumeHTML;
        }else{
            console.log("Error: Resume preview element not found");
        }

    })