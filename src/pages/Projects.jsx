export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Pad a 100 Girls',
      description: 'Making sure we provide sanitary pads and menstrual health education for 100 secondary school girls.',
      image: '/Images/Pad.jpg'
    },
    {
      id: 2,
      title: 'Food Support',
      description: 'Providing foodstuff and essential household items for widows and single mothers in the community.',
      image: '/Images/carry.jpg'
    },
    {
      id: 3,
      title: 'Medical Outreach',
      description: 'Organizing free medical checkups and providing basic medicine to remote populations.',
      image: '/Images/community.jpg'
    },
    {
      id: 4,
      title: 'Wheelchair Donation',
      description: 'Giving the gift of mobility by donating wheelchairs to physically challenged individuals.',
      image: '/Images/wheels.jpg'
    },
    {
      id: 5,
      title: 'Back to School',
      description: 'Equipping underprivileged children with school bags, uniforms, and stationary.',
      image: '/Images/boys.jpg'
    },
    {
      id: 6,
      title: 'Hospital Support',
      description: 'Creating awareness and offering support to patients in public welfare hospitals.',
      image: '/Images/General hopsital.jpg'
    }
  ];

  return (
    <div className="page-animate">
      <div className="page-header" style={{ backgroundImage: "url('/Images/projects.jpg')" }}>
        <div className="page-header-overlay glass-dark">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="hero-title animate-fade-in-up">Our Projects</h1>
            <p className="hero-subtitle animate-fade-in-up delay-100">See the impact of our interventions across various communities.</p>
          </div>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card glass animate-fade-in-up delay-${(index % 3) * 100}`}
              >
                <div className="project-img-wrapper">
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href="/donate" className="read-more-link" style={{marginTop: '10px'}}>Support this &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
