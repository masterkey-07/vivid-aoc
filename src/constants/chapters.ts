type Chapter = {
  key: string;
  title: string;
  subtitles: string[];
};

export const chapters: Chapter[] = [
  {
    key: "introduction",
    title: "Introdução",
    subtitles: ["Bem Vindo!", "Propósito", "Conteúdo", "Agradecimentos"],
  },
  {
    key: "architecture",
    title: "Arquitetura",
    subtitles: [
      "O que é Arquitetura?",
      "Componentes Específicos",
      "Interação com uma Arquitetura",
      "Perguntas",
    ],
  },
  {
    key: "pipeline",
    title: "Pipeline",
    subtitles: ["Bem Vindo!", "Propósito", "Conteúdo", "Agradecimentos"],
  },
  {
    key: "memory",
    title: "Mémoria",
    subtitles: ["Bem Vindo!", "Propósito", "Conteúdo", "Agradecimentos"],
  },{
    key: "instrucoes",
    title: "Instruções",
    subtitles: ["O que é uma Instrução?", "Interagindo com uma Instrução"],
  }
];
