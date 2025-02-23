import React from 'react';

const TechnologyStack = () => {
  const technologies = [
    {
      category: "Infrastructure & Cloud",
      items: [
        { name: "AWS", icon: "/icons/AWS.svg" },
        { name: "vSphere", icon: "/icons/vSphere.svg" },
        { name: "Red Hat", icon: "/icons/Red-Hat.svg" },
        { name: "Docker", icon: "/icons/Docker.svg" },
        { name: "Kubernetes", icon: "/icons/Kubernetes.svg" }
      ]
    },
    {
      category: "DevOps & CI/CD",
      items: [
        { name: "Argo CD", icon: "/icons/Argo-CD.svg" },
        { name: "GitLab", icon: "/icons/GitLab.svg" },
        { name: "GitHub", icon: "/icons/GitHub.svg" },
        { name: "Git", icon: "/icons/Git.svg" },
        { name: "Ansible", icon: "/icons/Ansible.svg" }
      ]
    },
    {
      category: "Monitoring & Security",
      items: [
        { name: "Grafana", icon: "/icons/Grafana.svg" },
        { name: "Prometheus", icon: "/icons/Prometheus.svg" },
        { name: "Vault", icon: "/icons/HashiCorp-Vault.svg" },
        { name: "Helm", icon: "/icons/Helm.svg" }
      ]
    },
    {
      category: "Programming & Frameworks",
      items: [
        { name: "Python", icon: "/icons/Python.svg" },
        { name: "FastAPI", icon: "/icons/FastAPI.svg" },
        { name: "Bash", icon: "/icons/Bash.svg" },
        { name: "SQLAlchemy", icon: "/icons/SQLAlchemy.svg" }
      ]
    },
    {
      category: "Data & Storage",
      items: [
        { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
        { name: "MySQL", icon: "/icons/MySQL.svg" },
        { name: "MongoDB", icon: "/icons/MongoDB.svg" }
      ]
    },
    {
      category: "Infrastructure as Code",
      items: [
        { name: "Packer", icon: "/icons/Packer.svg" },
        { name: "Terraform", icon: "/icons/HashiCorp-Terraform.svg" }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-teal-950 to-emerald-950 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((category, index) => (
            <div
              key={index}
              className="bg-teal-900/50 rounded-lg p-6 border border-emerald-800/30"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center space-x-3 p-3 bg-teal-950/50 rounded-lg hover:bg-teal-950/70 transition-colors"
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-8 h-8 text-yellow-400"
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