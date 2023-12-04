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
      "Quiz",
    ],
  },
  {
    key: "pipeline",
    title: "Pipeline",
    subtitles: ["Introdução", "Conteúdo", "Simulação do Pipeline", "Quiz"],
  },
  {
    key: "memory",
    title: "Mémoria",
    subtitles: ["Introdução", "Conteúdo", "Simulação de Memória Cache", "Quiz"],
  },
];
