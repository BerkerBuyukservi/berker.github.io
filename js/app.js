(function () {
  const container = document.querySelector("#positionCards");
  const template = document.querySelector("#job-card-template");

  if (!container || !template) {
    return;
  }

  const jobs = [
    {
      department: "Technology",
      title: "Frontend Developer",
      summary: "Builds product interfaces with Bootstrap, HTML, CSS, and JavaScript.",
      type: "Hybrid",
      location: "Newport"
    },
    {
      department: "Marketing",
      title: "Digital Marketing Specialist",
      summary: "Tracks campaign performance and prepares growth reports.",
      type: "Remote",
      location: "United Kingdom"
    },
    {
      department: "Operations",
      title: "Operations Coordinator",
      summary: "Organizes daily workflows and supports coordination between teams.",
      type: "On-site",
      location: "Bristol"
    },
    {
      department: "People",
      title: "People Operations Assistant",
      summary: "Supports interview scheduling, documents, and onboarding steps.",
      type: "Hybrid",
      location: "Cardiff"
    }
  ];

  jobs.forEach((job) => {
    const card = template.content.cloneNode(true);
    card.querySelector(".job-department").textContent = job.department;
    card.querySelector(".job-title").textContent = job.title;
    card.querySelector(".job-summary").textContent = job.summary;
    card.querySelector(".job-type").textContent = job.type;
    card.querySelector(".job-location").textContent = job.location;
    container.appendChild(card);
  });
})();
