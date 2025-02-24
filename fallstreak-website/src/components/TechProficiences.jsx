import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TechnologyStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const technologies = [
    {
      category: "Infrastructure & Cloud",
      items: [
        { name: "AWS", icon: "./icons/AWS.svg" },
        { name: "Azure", icon: "./icons/Azure.svg" },
        { name: "Google Cloud", icon: "./icons/Google-Cloud.svg" },
        { name: "vSphere", icon: "./icons/vSphere.svg" },
        { name: "Red Hat", icon: "./icons/Red-Hat.svg" }
      ]
    },
    {
      category: "Containerization",
      items: [
        { name: "Docker", icon: "./icons/Docker.svg" },
        { name: "Kubernetes", icon: "./icons/Kubernetes.svg" },
        { name: "Helm", icon: "./icons/Helm.svg" },
        { name: "Rancher", icon: "./icons/Rancher.svg" }
      ]
    },

    {
      category: "DevOps & CI/CD",
      items: [
        { name: "Argo CD", icon: "./icons/Argo-CD.svg" },
        { name: "Jenkins", icon: "./icons/Jenkins.svg" },
        { name: "Azure DevOps", icon: "./icons/Azure-Devops.svg" },
        { name: "GitLab CI/CD", icon: "./icons/GitLab.svg" },
        { name: "GitHub Actions", icon: "./icons/GitHub.svg" },
      ]
    },
    {
      category: "Monitoring & Observability",
      items: [
        { name: "Grafana", icon: "./icons/Grafana.svg" },
        { name: "Prometheus", icon: "./icons/Prometheus.svg" },
        { name: "OpenTelemetry", icon: "./icons/OpenTelemetry.svg" },
        { name: "Datadog", icon: "./icons/datadog.svg" },
        { name: "Jaeger", icon: "./icons/Jaeger-Tracing.svg" }
      ]
    },
    {
      category: "Security & DevSecOps",
      items: [
        { name: "Vault", icon: "./icons/HashiCorp-Vault.svg" },
        { name: "SonarQube", icon: "./icons/SonarQube.svg" },
        { name: "Wiz", icon: "./icons/wiz.svg" },
        { name: "Splunk", icon: "./icons/splunk2.svg" },
        { name: "Aqua", icon: "./icons/aquasec.svg" }
      ]
    },
    {
      category: "SaaS Solutions",
      items: [
        { name: "ServiceNow", icon: "./icons/Servicenow2.svg" },
        { name: "Snowflake", icon: "./icons/snowflake.svg" },
        { name: "Tableau", icon: "./icons/tableau.svg" },
        { name: "Databricks", icon: "./icons/databricks.svg" },
      ]
    },
    {
      category: "Languages & Frameworks",
      items: [
        { name: "Python", icon: "./icons/Python.svg" },
        { name: "FastAPI", icon: "./icons/FastAPI.svg" },
        { name: "Bash", icon: "./icons/Bash.svg" },
        { name: "SQLAlchemy", icon: "./icons/SQLAlchemy.svg" }
      ]
    },
    {
      category: "Databases & Storage",
      items: [
        { name: "PostgreSQL", icon: "./icons/PostgresSQL.svg" },
        { name: "MySQL", icon: "./icons/MySQL.svg" },
        { name: "MongoDB", icon: "./icons/MongoDB.svg" },
        { name: "Redis", icon: "./icons/Redis.svg" }
      ]
    },
    {
      category: "I.A.C. & Config Management",
      items: [
        { name: "Packer", icon: "./icons/Packer.svg" },
        { name: "Terraform", icon: "./icons/HashiCorp-Terraform.svg" },
        { name: "Ansible", icon: "./icons/Ansible.svg" },
      ]
    },

    {
        category: "Version Control ",
        items: [
          { name: "GitLab", icon: "./icons/GitLab.svg" },
          { name: "GitHub", icon: "./icons/GitHub.svg" },
          { name: "Git", icon: "./icons/Git.svg" },
        ]
      },
      {
        category: "Web Servers & Proxies",
        items: [
          { name: "Apache", icon: "./icons/Apache.svg" },
          { name: "NGINX", icon: "./icons/NGINX.svg" }
        ]
      },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageError = (e) => {
    console.error(`Failed to load icon: ${e.target.src}`);
    e.target.style.display = 'none';
  };

  return (
    <div className="bg-gradient-to-b from-teal-950 to-emerald-950 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl font-bold text-white text-center mb-12 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} 
          transition-all duration-1000 ease-out`}>
          Technology Stack
        </h2>
        <div className="flex justify-center mb-8">
          <Link to="/" className="text-lg text-yellow-300 hover:text-yellow-500 transition duration-300">← Back to Home</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-teal-900/80 to-teal-950/90 rounded-lg p-6 
                border border-emerald-800/30 shadow-xl shadow-teal-950/50
                hover:shadow-2xl hover:shadow-emerald-900/50 hover:-translate-y-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                transition-all duration-700 ease-out transform-gpu`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center space-x-3 p-3 
                      bg-gradient-to-r from-teal-950/80 to-teal-900/50 
                      rounded-lg shadow-md shadow-teal-950/30
                      hover:bg-teal-950/70 hover:scale-105 
                      hover:shadow-lg hover:shadow-emerald-900/30
                      hover:-translate-y-1 hover:translate-x-1
                      transition-all duration-300 ease-out cursor-pointer
                      transform-gpu"
                  >
                    <img 
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-8 transform hover:rotate-12 transition-transform duration-300"
                      onError={handleImageError}
                      loading="eager"
                    />
                    <span className="text-yellow-100">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
