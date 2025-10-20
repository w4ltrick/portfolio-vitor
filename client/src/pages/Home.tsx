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
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vitor Waltrick</h1>
          <ul className="hidden sm:flex gap-8 text-sm font-medium">
            <li>
              <a href="#sobre" className="hover:text-slate-600 transition">
                Sobre
              </a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-slate-600 transition">
                Projetos
              </a>
            </li>
            <li>
              <a href="#habilidades" className="hover:text-slate-600 transition">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-slate-600 transition">
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
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Desenvolvedor Full Stack
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Criando soluções web modernas e eficientes
            </p>
          </div>
          <p className="text-slate-700 max-w-2xl leading-relaxed">
            Sou um desenvolvedor apaixonado por tecnologia, com experiência em desenvolvimento
            full stack. Gosto de criar aplicações que resolvem problemas reais e oferecem uma
            excelente experiência ao usuário.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#contato">
              <Button className="bg-slate-900 hover:bg-slate-800">Entrar em Contato</Button>
            </a>
            <a href="https://github.com/w4ltrick" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Ver Projetos</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-8">Sobre Mim</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Sou um desenvolvedor full stack com paixão por criar soluções web inovadoras.
                Tenho experiência em desenvolvimento de aplicações utilizando as tecnologias
                mais modernas do mercado.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Meu foco é sempre em entregar código de qualidade, bem estruturado e fácil de
                manter. Gosto de trabalhar em equipe e estou sempre buscando aprender novas
                tecnologias e melhorar minhas habilidades.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Especialidades
              </h4>
              <ul className="space-y-2 text-slate-700">
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
        <h3 className="text-3xl font-bold mb-12">Projetos Destacados</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-slate-300 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-bold group-hover:text-slate-600 transition">
                  {project.title}
                </h4>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition" />
              </div>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="w-full justify-start p-0 h-auto">
                  Ver no GitHub →
                </Button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-12">Habilidades</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-slate-700 text-sm">
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
        <h3 className="text-3xl font-bold mb-8">Vamos Conversar</h3>
        <p className="text-slate-700 mb-8 max-w-2xl">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para
          entrar em contato através dos canais abaixo.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:w4ltrick@gmail.com">
            <Button className="bg-slate-900 hover:bg-slate-800 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/vitor-waltrick-b9194029a/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/w4ltrick" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-sm">
          <p>© 2025 Vitor Waltrick. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

