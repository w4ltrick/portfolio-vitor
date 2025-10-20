import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Controle de Estacionamento",
      description: "Sistema de controle de estacionamento desenvolvido em JavaScript",
      link: "https://github.com/w4ltrick/controle-estacionamento",
      tech: ["JavaScript"],
    },
    {
      title: "Rede Social",
      description: "Plataforma de rede social desenvolvida em Python",
      link: "https://github.com/w4ltrick/Rede_Social",
      tech: ["Python"],
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "JavaScript"] },
    { category: "Backend", items: ["Python", "Node.js", "JavaScript"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-950 backdrop-blur-sm">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-100 hover:text-slate-50 transition-colors duration-300">
            Vitor Waltrick
          </h1>
          <ul className="hidden sm:flex gap-8 text-sm font-medium">
            <li>
              <a
                href="#sobre"
                className="text-slate-100 hover:text-slate-50 transition-colors duration-300 relative group"
              >
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-100 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="text-slate-100 hover:text-slate-50 transition-colors duration-300 relative group"
              >
                Projetos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-100 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#habilidades"
                className="text-slate-100 hover:text-slate-50 transition-colors duration-300 relative group"
              >
                Habilidades
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-100 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="text-slate-100 hover:text-slate-50 transition-colors duration-300 relative group"
              >
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-100 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-slate-950">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-100 hover:text-slate-50 transition-colors duration-300">
              Desenvolvedor Full Stack
            </h2>
            <p className="text-lg sm:text-xl text-slate-100 hover:text-slate-50 transition-colors duration-300">
              Criando soluções web modernas e eficientes
            </p>
          </div>
          <p className="text-slate-100 max-w-2xl leading-relaxed hover:text-slate-50 transition-colors duration-300">
            Sou um desenvolvedor apaixonado por tecnologia, com experiência em desenvolvimento
            full stack. Gosto de criar aplicações que resolvem problemas reais e oferecem uma
            excelente experiência ao usuário.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#contato">
              <Button className="bg-slate-950 hover:bg-slate-900 text-slate-100 border border-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Entrar em Contato
              </Button>
            </a>
            <a href="https://github.com/w4ltrick" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-slate-700 text-slate-100 hover:text-slate-50 hover:bg-slate-900 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Ver Projetos
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="bg-slate-950 py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-8 text-slate-100 hover:text-slate-50 transition-colors duration-300">
            Sobre Mim
          </h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-slate-100 leading-relaxed hover:text-slate-50 transition-colors duration-300">
                Sou um desenvolvedor full stack com paixão por criar soluções web inovadoras.
                Tenho experiência em desenvolvimento de aplicações utilizando as tecnologias
                mais modernas do mercado.
              </p>
              <p className="text-slate-100 leading-relaxed hover:text-slate-50 transition-colors duration-300">
                Meu foco é sempre em entregar código de qualidade, bem estruturado e fácil de
                manter. Gosto de trabalhar em equipe e estou sempre buscando aprender novas
                tecnologias e melhorar minhas habilidades.
              </p>
            </div>
            <div className="bg-slate-950 rounded-lg p-6 border border-slate-700 hover:border-slate-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-slate-100 hover:text-slate-50 transition-colors duration-300">
                <Code2 className="w-5 h-5" />
                Especialidades
              </h4>
              <ul className="space-y-2 text-slate-100">
                <li className="hover:text-slate-50 transition-colors duration-300 hover:translate-x-1">
                  • Desenvolvimento Frontend com React
                </li>
                <li className="hover:text-slate-50 transition-colors duration-300 hover:translate-x-1">
                  • Desenvolvimento Backend com Python e Node.js
                </li>
                <li className="hover:text-slate-50 transition-colors duration-300 hover:translate-x-1">
                  • Design Responsivo e UX
                </li>
                <li className="hover:text-slate-50 transition-colors duration-300 hover:translate-x-1">
                  • Integração de APIs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-slate-950">
        <h3 className="text-3xl font-bold mb-12 text-slate-100 hover:text-slate-50 transition-colors duration-300">
          Projetos Destacados
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-slate-600 bg-slate-950"
            >
              <div className="h-48 bg-slate-900 overflow-hidden relative">
                <img
                  src={index === 0 ? "/projeto-estacionamento.jpg" : "/projeto-rede-social.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-slate-100 group-hover:text-slate-50 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <ExternalLink className="w-5 h-5 text-slate-100 group-hover:text-slate-50 transition-all duration-300 transform group-hover:scale-125 group-hover:rotate-45" />
                </div>
                <p className="text-slate-100 mb-4 text-sm leading-relaxed group-hover:text-slate-50 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-slate-900 text-slate-100 px-3 py-1 rounded text-xs font-medium hover:bg-slate-800 hover:text-slate-50 transition-all duration-300 transform hover:scale-110 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto text-slate-100 hover:text-slate-50 transition-all duration-300 group/link"
                  >
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                      Ver no GitHub →
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="bg-slate-950 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-12 text-slate-100 hover:text-slate-50 transition-colors duration-300">
            Habilidades
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-slate-950 rounded-lg p-6 border border-slate-700 hover:border-slate-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                <h4 className="font-bold mb-4 flex items-center gap-2 text-slate-100 hover:text-slate-50 transition-colors duration-300">
                  <Briefcase className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className="text-slate-100 text-sm hover:text-slate-50 transition-all duration-300 hover:translate-x-1"
                    >
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-slate-950">
        <h3 className="text-3xl font-bold mb-8 text-slate-100 hover:text-slate-50 transition-colors duration-300">
          Vamos Conversar
        </h3>
        <p className="text-slate-100 mb-8 max-w-2xl hover:text-slate-50 transition-colors duration-300">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para
          entrar em contato através dos canais abaixo.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:w4ltrick@gmail.com">
            <Button className="bg-slate-950 hover:bg-slate-900 text-slate-100 border border-slate-700 flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Mail className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              Email
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/vitor-waltrick-b9194029a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-slate-700 text-slate-100 hover:text-slate-50 hover:bg-slate-900 hover:border-slate-600 flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Linkedin className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/w4ltrick" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-slate-700 text-slate-100 hover:text-slate-50 hover:bg-slate-900 hover:border-slate-600 flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Github className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              GitHub
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-100 py-8 border-t border-slate-700 hover:text-slate-50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>© 2025 Vitor Waltrick. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

