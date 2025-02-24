import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TechnologyStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTech, setSelectedTech] = useState([]); // Stores selected tech for comparison

  const technologies = [
    {
      category: "Infrastructure & Cloud",
      items: [
        {
          name: "AWS",
          icon: "./icons/AWS.svg",
          description: "Amazon Web Services offers a comprehensive suite of cloud services.",
          features: [
            "Scalable computing power",
            "Extensive storage options",
            "Global content delivery",
            "Robust security measures"
          ],
          link: "https://aws.amazon.com/"
        },
        {
          name: "Azure",
          icon: "./icons/Azure.svg",
          description: "Microsoft Azure provides a wide range of cloud solutions.",
          features: [
            "Integrated with Microsoft tools",
            "Supports various programming languages",
            "Advanced analytics services",
            "Hybrid cloud capabilities"
          ],
          link: "https://azure.microsoft.com/"
        },
        {
          name: "Google Cloud",
          icon: "./icons/Google-Cloud.svg",
          description: "Google Cloud Platform offers innovative cloud solutions.",
          features: [
            "Leading data analytics tools",
            "Machine learning services",
            "High-performance computing",
            "Global network infrastructure"
          ],
          link: "https://cloud.google.com/"
        },
        {
            "name": "VMware vSphere",
            "icon": "./icons/vSphere.svg",
            "description": "VMware vSphere is an enterprise-grade virtualization platform that transforms physical data centers into aggregated computing infrastructures.",
            "features": [
              "Centralized virtualization management",
              "Resource optimization and allocation",
              "High availability and fault tolerance",
              "Advanced security features and VM encryption"
            ],
            "link": "https://www.vmware.com/products/vsphere.html"
          },
          {
            "name": "Red Hat",
            "icon": "./icons/Red-Hat.svg",
            "description": "Red Hat provides enterprise open-source software solutions, including Linux platforms, cloud computing, and middleware services.",
            "features": [
              "Enterprise Linux distribution",
              "OpenShift container platform",
              "Ansible automation",
              "Hybrid cloud solutions"
            ],
            "link": "https://www.redhat.com/"
          }
      ]
    },
    {
      category: "Containerization & Orchestration",
      items: [
        {
          name: "Docker",
          icon: "./icons/Docker.svg",
          description: "Docker enables developers to containerize applications.",
          features: [
            "Lightweight virtualization",
            "Consistent environments",
            "Rapid deployment",
            "Portability"
          ],
          link: "https://www.docker.com/"
        },
        {
          name: "Kubernetes",
          icon: "./icons/Kubernetes.svg",
          description: "Kubernetes automates deployment, scaling, and management of containers.",
          features: [
            "Automated rollouts/rollbacks",
            "Service discovery",
            "Load balancing",
            "Self-healing capabilities"
          ],
          link: "https://kubernetes.io/"
        },
        {
          name: "OpenShift",
          icon: "./icons/Openshift.svg",
          description: "OpenShift is a Kubernetes-based platform with added developer tools.",
          features: [
            "Developer-friendly workflows",
            "Integrated CI/CD",
            "Multi-cloud support",
            "Enhanced security"
          ],
          link: "https://www.openshift.com/"
        },
        {
          name: "Rancher",
          icon: "./icons/Rancher.svg",
          description: "Rancher simplifies Kubernetes cluster management.",
          features: [
            "Centralized management",
            "Multi-cluster deployment",
            "Integrated monitoring",
            "Access control"
          ],
          link: "https://rancher.com/"
        },
        {
          name: "Helm",
          icon: "./icons/Helm.svg",
          description: "Helm is a package manager for Kubernetes applications.",
          features: [
            "Simplifies deployments",
            "Manages Kubernetes charts",
            "Version control",
            "Easy rollbacks"
          ],
          link: "https://helm.sh/"
        }
      ]
    },
    {
      category: "CI/CD & Automation",
      items: [
        {
          name: "Jenkins",
          icon: "./icons/Jenkins.svg",
          description: "Jenkins is an open-source automation server for CI/CD.",
          features: [
            "Plugin extensibility",
            "Distributed builds",
            "Automated testing",
            "Custom pipelines"
          ],
          link: "https://www.jenkins.io/"
        },
        {
          name: "GitLab CI/CD",
          icon: "./icons/GitLab.svg",
          description: "GitLab CI/CD offers integrated continuous integration and delivery.",
          features: [
            "Built-in version control",
            "Automated pipelines",
            "Container registry",
            "Scalable workflows"
          ],
          link: "https://docs.gitlab.com/ee/ci/"
        },
        {
          name: "CircleCI",
          icon: "./icons/CircleCI.svg",
          description: "CircleCI provides fast, efficient CI/CD pipelines.",
          features: [
            "Cloud and self-hosted options",
            "Parallel job execution",
            "Docker support",
            "Custom workflows"
          ],
          link: "https://circleci.com/"
        },
        
        {
          name: "Bamboo",
          icon: "./icons/Bamboo.svg",
          description: "Bamboo automates build, test, and deployment processes.",
          features: [
            "Atlassian integration",
            "Automated merging",
            "Parallel testing",
            "Deployment projects"
          ],
          link: "https://www.atlassian.com/software/bamboo"
        }
      ]
    },
    {
      category: "Monitoring & Logging",
      items: [
        {
          name: "Prometheus",
          icon: "./icons/Prometheus.svg",
          description: "Prometheus is an open-source monitoring and alerting toolkit.",
          features: [
            "Time-series database",
            "Multi-dimensional data model",
            "Powerful query language",
            "Alerting rules"
          ],
          link: "https://prometheus.io/"
        },
        {
          name: "Grafana",
          icon: "./icons/Grafana.svg",
          description: "Grafana provides rich dashboards and visualizations.",
          features: [
            "Customizable dashboards",
            "Alerting system",
            "Supports multiple data sources",
            "Real-time monitoring"
          ],
          link: "https://grafana.com/"
        },
        {
          name: "Datadog",
          icon: "./icons/datadog.svg",
          description: "Datadog is a cloud-scale monitoring and analytics platform.",
          features: [
            "Real-time metrics",
            "Log management",
            "Distributed tracing",
            "AI-driven alerts"
          ],
          link: "https://www.datadoghq.com/"
        },
        {
          name: "ELK Stack",
          icon: "./icons/elkstack.svg",
          description: "ELK (Elasticsearch, Logstash, Kibana) is a popular logging and analytics solution.",
          features: [
            "Powerful search",
            "Log aggregation",
            "Real-time data analysis",
            "Customizable dashboards"
          ],
          link: "https://www.elastic.co/elk-stack"
        },
        {
          name: "Splunk",
          icon: "./icons/splunk2.svg",
          description: "Splunk offers comprehensive log management and analysis.",
          features: [
            "Machine data processing",
            "Real-time monitoring",
            "Alerting and reporting",
            "Scalable architecture"
          ],
          link: "https://www.splunk.com/"
        }
      ]
    },
    {
      category: "Security & DevSecOps",
      items: [
        {
          name: "Vault",
          icon: "./icons/HashiCorp-Vault.svg",
          description: "Vault secures and manages secrets and sensitive data.",
          features: [
            "Dynamic secrets",
            "Encryption as a service",
            "Access control policies",
            "Audit logging"
          ],
          link: "https://www.vaultproject.io/"
        },
        {
          name: "SonarQube",
          icon: "./icons/SonarQube.svg",
          description: "SonarQube inspects code quality and security vulnerabilities.",
          features: [
            "Static code analysis",
            "Continuous inspection",
            "Multi-language support",
            "Customizable quality gates"
          ],
          link: "https://www.sonarqube.org/"
        },
        {
          name: "Wiz",
          icon: "./icons/wiz.svg",
          description: "Wiz is a cloud security platform that identifies vulnerabilities.",
          features: [
            "Comprehensive risk analysis",
            "Real-time scanning",
            "Seamless integration",
            "Actionable insights"
          ],
          link: "https://www.wiz.io/"
        },
        {
          name: "Aqua Security",
          icon: "./icons/aquasec.svg",
          description: "Aqua Security provides end-to-end security for containerized and cloud-native applications.",
          features: [
            "Container scanning",
            "Runtime protection",
            "Vulnerability management",
            "Compliance monitoring"
          ],
          link: "https://www.aquasec.com/"
        },

      ]
    },
    {
      category: "SaaS Solutions",
      items: [
        {
          name: "ServiceNow",
          icon: "./icons/Servicenow2.svg",
          description: "ServiceNow streamlines IT service management.",
          features: [
            "Incident management",
            "Automated workflows",
            "Self-service portals",
            "Integrated asset management"
          ],
          link: "https://www.servicenow.com/"
        },
        {
          name: "Snowflake",
          icon: "./icons/snowflake.svg",
          description: "Snowflake is a cloud-based data warehousing solution.",
          features: [
            "Seamless scaling",
            "Data sharing capabilities",
            "Concurrent processing",
            "Secure data storage"
          ],
          link: "https://www.snowflake.com/"
        },
        {
          name: "Tableau",
          icon: "./icons/tableau.svg",
          description: "Tableau provides powerful business intelligence and data visualization tools.",
          features: [
            "Interactive dashboards",
            "Data blending",
            "Real-time analytics",
            "User-friendly interface"
          ],
          link: "https://www.tableau.com/"
        },
        {
          name: "Databricks",
          icon: "./icons/databricks.svg",
          description: "Databricks offers a unified analytics platform powered by Apache Spark.",
          features: [
            "Collaborative notebooks",
            "Scalable data processing",
            "ML integration",
            "Unified data analytics"
          ],
          link: "https://databricks.com/"
        }
      ]
    },
    {
      category: "Languages & Frameworks",
      items: [
        {
          name: "Python",
          icon: "./icons/Python.svg",
          description: "Python is a versatile, high-level programming language.",
          features: [
            "Easy to learn",
            "Vast libraries",
            "Cross-platform",
            "Strong community support"
          ],
          link: "https://www.python.org/"
        },
        {
          name: "FastAPI",
          icon: "./icons/FastAPI.svg",
          description: "FastAPI is a modern web framework for building APIs with Python.",
          features: [
            "High performance",
            "Easy integration",
            "Automatic docs generation",
            "Type hints support"
          ],
          link: "https://fastapi.tiangolo.com/"
        },
    
        {
          name: "React",
          icon: "./icons/React.svg",
          description: "React is a library for building interactive user interfaces.",
          features: [
            "Component-based architecture",
            "Virtual DOM",
            "Reusable components",
            "Strong community"
          ],
          link: "https://reactjs.org/"
        },

        {
            name: "Bash",
            icon: "./icons/Bash.svg",
            description: "Bash (Bourne Again Shell) is a powerful Unix shell and command language interpreter that serves as the default shell for most Linux distributions and macOS.",
            features: [
                "Command line scripting and automation",
                "Shell programming with variables and functions",
                "Process management and job control",
                "Advanced text processing and file manipulation"
            ],
            link: "https://www.gnu.org/software/bash/"
          }
      ]
    },
    {
      category: "Databases & Storage",
      items: [
        {
          name: "PostgreSQL",
          icon: "./icons/PostgresSQL.svg",
          description: "PostgreSQL is a powerful, open-source relational database.",
          features: [
            "ACID compliance",
            "Extensible",
            "Advanced indexing",
            "Robust SQL support"
          ],
          link: "https://www.postgresql.org/"
        },
        {
          name: "MySQL",
          icon: "./icons/MySQL.svg",
          description: "MySQL is a widely-used open-source relational database.",
          features: [
            "High performance",
            "Scalability",
            "Ease of use",
            "Strong community"
          ],
          link: "https://www.mysql.com/"
        },
        {
          name: "MongoDB",
          icon: "./icons/MongoDB.svg",
          description: "MongoDB is a leading NoSQL database for modern applications.",
          features: [
            "Flexible document model",
            "Horizontal scaling",
            "High availability",
            "Rich query language"
          ],
          link: "https://www.mongodb.com/"
        },
        {
          name: "Redis",
          icon: "./icons/Redis.svg",
          description: "Redis is an in-memory data structure store used as a database, cache, and message broker.",
          features: [
            "Ultra-fast performance",
            "Rich data types",
            "Persistence options",
            "Pub/Sub capabilities"
          ],
          link: "https://redis.io/"
        }
      ]
    },
    {
      category: "I.A.C. & Config Management",
      items: [
        {
          name: "Packer",
          icon: "./icons/Packer.svg",
          description: "Packer automates the creation of machine images.",
          features: [
            "Multi-provider support",
            "Automated image creation",
            "Template-based",
            "Consistent environments"
          ],
          link: "https://www.packer.io/"
        },
        {
          name: "Terraform",
          icon: "./icons/HashiCorp-Terraform.svg",
          description: "Terraform is an infrastructure as code tool for building, changing, and versioning infrastructure safely.",
          features: [
            "Declarative configuration",
            "Execution plans",
            "Resource graph",
            "Modular design"
          ],
          link: "https://www.terraform.io/"
        },
        {
          name: "Ansible",
          icon: "./icons/Ansible.svg",
          description: "Ansible automates configuration management and application deployment.",
          features: [
            "Agentless architecture",
            "Playbook-driven",
            "Idempotency",
            "Extensive modules"
          ],
          link: "https://www.ansible.com/"
        }
      ]
    },
    {
      category: "Version Control",
      items: [
        {
          name: "Git",
          icon: "./icons/Git.svg",
          description: "Git is a distributed version control system for tracking code changes.",
          features: [
            "Branching and merging",
            "Distributed architecture",
            "High performance",
            "Robust community"
          ],
          link: "https://git-scm.com/"
        },
        {
          name: "GitHub",
          icon: "./icons/GitHub.svg",
          description: "GitHub is a code hosting platform for version control and collaboration.",
          features: [
            "Pull requests",
            "Issue tracking",
            "Community engagement",
            "Integrated CI/CD"
          ],
          link: "https://github.com/"
        },
        {
          name: "GitLab",
          icon: "./icons/GitLab.svg",
          description: "GitLab offers integrated version control and CI/CD pipelines.",
          features: [
            "Built-in CI/CD",
            "Code review",
            "Project management",
            "Self-hosted options"
          ],
          link: "https://about.gitlab.com/"
        }
      ]
    },
    {
      category: "Web Servers & Proxies",
      items: [
        {
          name: "Apache",
          icon: "./icons/Apache.svg",
          description: "Apache HTTP Server is a widely-used web server software.",
          features: [
            "Modular architecture",
            "Cross-platform",
            "Robust community",
            "Extensive documentation"
          ],
          link: "https://httpd.apache.org/"
        },
        {
          name: "NGINX",
          icon: "./icons/NGINX.svg",
          description: "NGINX is a high-performance web server and reverse proxy.",
          features: [
            "Efficient static content serving",
            "Load balancing",
            "High concurrency",
            "Low resource usage"
          ],
          link: "https://www.nginx.com/"
        }
      ]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSelectTech = (tech) => {
    setSelectedTech((prev) => {
      if (prev.some((item) => item.name === tech.name)) {
        return prev.filter((item) => item.name !== tech.name);
      }
      return prev.length < 2 ? [...prev, tech] : [prev[1], tech];
    });
  };

  return (
    <div className="bg-gradient-to-b from-teal-950 to-emerald-950 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl font-bold text-white text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          Technology Stack
        </h2>
        <div className="flex justify-center mb-8">
          <Link to="/" className="text-lg text-yellow-300 hover:text-yellow-500 transition duration-300">
            ← Back to Home
          </Link>
        </div>

        {/* Comparison Panel */}
        {selectedTech.length > 0 && (
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-2xl text-white font-semibold mb-4">Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedTech.map((tech, index) => (
                <div key={index} className="p-4 border border-teal-500 rounded-lg bg-gray-800 shadow-md">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-4">
                      <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                      <h4 className="text-lg text-yellow-200">{tech.name}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{tech.description}</p>
                    <ul className="list-disc ml-5 text-gray-400 text-sm">
                      {tech.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <a href={tech.link} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                      Learn more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-gradient-to-br from-teal-900/80 to-teal-950/90 rounded-lg p-6 border border-emerald-800/30 shadow-xl shadow-teal-950/50 hover:shadow-2xl hover:shadow-emerald-900/50 hover:-translate-y-2 transition-all duration-700 ease-out transform-gpu"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`flex items-center space-x-3 p-3 rounded-lg shadow-md cursor-pointer transition-all duration-300 ease-out transform-gpu ${selectedTech.some((item) => item.name === tech.name) ? "bg-teal-700 scale-105" : "bg-teal-800 hover:scale-105"}`}
                    onClick={() => handleSelectTech(tech)}
                  >
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
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
