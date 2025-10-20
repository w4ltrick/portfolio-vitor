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
      <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Vitor Waltrick</h1>
          <ul className="hidden sm:flex gap-8 text-sm font-medium">
            <li>
              <a href="#sobre" className="hover:text-slate-400 transition">
                Sobre
              </a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-slate-400 transition">
                Projetos
              </a>
            </li>
            <li>
              <a href="#habilidades" className="hover:text-slate-400 transition">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-slate-400 transition">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
              Desenvolvedor Full Stack
            </h2>
            <p className="text-lg sm:text-xl text-slate-400">
              Criando soluções web modernas e eficientes
            </p>
          </div>
          <p className="text-slate-300 max-w-2xl leading-relaxed">
            Sou um desenvolvedor apaixonado por tecnologia, com experiência em desenvolvimento
            full stack. Gosto de criar aplicações que resolvem problemas reais e oferecem uma
            excelente experiência ao usuário.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#contato">
              <Button className="bg-blue-600 hover:bg-blue-700">Entrar em Contato</Button>
            </a>
            <a href="https://github.com/w4ltrick" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-slate-700 text-slate-100 hover:bg-slate-900">
                Ver Projetos
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="bg-slate-900 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-8 text-white">Sobre Mim</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Sou um desenvolvedor full stack com paixão por criar soluções web inovadoras.
                Tenho experiência em desenvolvimento de aplicações utilizando as tecnologias
                mais modernas do mercado.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Meu foco é sempre em entregar código de qualidade, bem estruturado e fácil de
                manter. Gosto de trabalhar em equipe e estou sempre buscando aprender novas
                tecnologias e melhorar minhas habilidades.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-white">
                <Code2 className="w-5 h-5" />
                Especialidades
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Desenvolvimento Frontend com React</li>
                <li>• Desenvolvimento Backend com Python e Node.js</li>
                <li>• Design Responsivo e UX</li>
                <li>• Integração de APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h3 className="text-3xl font-bold mb-12 text-white">Projetos Destacados</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-slate-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 hover:border-slate-600 transition-all bg-slate-800"
            >
              <div className="h-48 bg-slate-700 overflow-hidden">
                <img
                  src={index === 0 ? "/projeto-estacionamento.jpg" : "/projeto-rede-social.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-white group-hover:text-slate-300 transition">
                    {project.title}
                  </h4>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-slate-400 transition" />
                </div>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-slate-700 text-slate-200 px-3 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="w-full justify-start p-0 h-auto text-blue-400 hover:text-blue-300">
                    Ver no GitHub →
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="bg-slate-900 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-12 text-white">Habilidades</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h4 className="font-bold mb-4 flex items-center gap-2 text-white">
                  <Briefcase className="w-5 h-5" />
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-slate-300 text-sm">
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
      <section id="contato" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h3 className="text-3xl font-bold mb-8 text-white">Vamos Conversar</h3>
        <p className="text-slate-300 mb-8 max-w-2xl">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para
          entrar em contato através dos canais abaixo.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:w4ltrick@gmail.com">
            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/vitor-waltrick-b9194029a/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-slate-700 text-slate-100 hover:bg-slate-900 flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/w4ltrick" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-slate-700 text-slate-100 hover:bg-slate-900 flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>© 2025 Vitor Waltrick. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

