export type Project = {
  slug: string
  title: string
  shortTitle: string
  category: string
  description: string
  problem: string
  solution: string
  highlights: string[]
  stack: string[]
  status: string
  accent: string
  videoUrl?: string
  demoUrl?: string
  images?: string[]
}

export const projects: Project[] = [
  {
    slug: 'mp-govtech-educacao',
    title: 'MP GOVTECH EDUCAÇÃO',
    shortTitle: 'MP GOVTECH',
    category: 'GovTech • Gestão Educacional',
    description: 'Plataforma integrada e modular para gestão educacional municipal, com autenticação, perfis, permissões, indicadores e módulos administrativos e pedagógicos.',
    problem: 'Processos educacionais e administrativos espalhados entre planilhas, sistemas desconectados e rotinas manuais dificultam a visão integrada da rede.',
    solution: 'Uma plataforma única, preparada para múltiplas instituições, reunindo módulos, dashboards, controle de acesso e fluxos digitais em um ambiente responsivo.',
    highlights: ['Arquitetura modular', 'Multi-tenant', 'Perfis e permissões', 'Dashboards', 'Integrações com IA', 'Responsivo'],
    stack: ['React', 'TypeScript', 'Firebase', 'Firestore', 'APIs', 'IA'],
    status: 'Em evolução',
    accent: '#0b5cff'
  },
  {
    slug: 'sigae-alimentacao-escolar',
    title: 'SIGAE — Alimentação Escolar',
    shortTitle: 'SIGAE',
    category: 'Gestão Pública • Alimentação Escolar',
    description: 'Sistema de gestão de estoque, solicitações, expedição, recebimento e rastreabilidade da alimentação escolar.',
    problem: 'O controle manual de estoque e distribuição aumenta o risco de divergências, perdas, falhas de rastreabilidade e demora na conferência.',
    solution: 'Fluxos digitais para estoque central e escolar, remessas, recebimentos, inventários e movimentações com registros auditáveis.',
    highlights: ['Estoque', 'Solicitações', 'Expedição', 'Recebimento', 'Inventário', 'Rastreabilidade'],
    stack: ['React', 'TypeScript', 'Firebase', 'Firestore'],
    status: 'Protótipo funcional',
    accent: '#f59e0b'
  },
  {
    slug: 'monitoramento-pedagogico',
    title: 'Sistema de Monitoramento Pedagógico',
    shortTitle: 'Monitoramento',
    category: 'Educação • Dados',
    description: 'Acompanhamento de escolas, visitas técnicas, ciclos, diagnósticos, indicadores, intervenções e relatórios.',
    problem: 'Acompanhamentos pedagógicos fragmentados dificultam a comparação entre ciclos e a continuidade dos encaminhamentos.',
    solution: 'Um fluxo estruturado para registrar diagnóstico, evidências, orientações, responsáveis, prazos e evolução da escola ao longo do tempo.',
    highlights: ['Ciclos de monitoramento', 'Indicadores', 'Histórico', 'Planos de ação', 'Relatórios', 'Dashboards'],
    stack: ['React', 'TypeScript', 'Firebase', 'Firestore', 'IA'],
    status: 'Protótipo funcional',
    accent: '#10b981'
  },
  {
    slug: 'gabarita-ia',
    title: 'Gabarita IA — Provas e Avaliações',
    shortTitle: 'Gabarita IA',
    category: 'EdTech • Avaliação',
    description: 'Criação e organização de avaliações, geração de questões, versões de prova, cartões-resposta e análise de resultados.',
    problem: 'Elaborar, aplicar, corrigir e analisar avaliações consome tempo e dificulta a devolutiva rápida ao professor.',
    solution: 'Automação do ciclo avaliativo, com apoio de IA na criação, organização e leitura pedagógica dos resultados.',
    highlights: ['Banco de questões', 'IA generativa', 'Versões de prova', 'QR Code', 'Correção', 'Relatórios'],
    stack: ['React', 'TypeScript', 'Firebase', 'IA', 'APIs'],
    status: 'Em desenvolvimento',
    accent: '#7c3aed'
  },
  {
    slug: 'quizsala',
    title: 'QuizSala',
    shortTitle: 'QuizSala',
    category: 'EdTech • Gamificação',
    description: 'Aplicação de quizzes com ranking, controle de tempo, questões objetivas, V/F e dissertativas.',
    problem: 'Atividades digitais nem sempre oferecem retorno imediato, engajamento e acompanhamento simples do desempenho dos estudantes.',
    solution: 'Uma experiência gamificada de aplicação de questões com ranking, tempo de resposta e recursos para professores e alunos.',
    highlights: ['Ranking', 'Tempo', 'Importação', 'IA', 'Múltiplos tipos de questão', 'Perfis professor/aluno'],
    stack: ['React', 'Firebase', 'Firestore', 'IA'],
    status: 'Protótipo funcional',
    accent: '#8b5cf6'
  },
  {
    slug: 'gerador-certificados',
    title: 'Gerador de Certificados',
    shortTitle: 'Certificados',
    category: 'Automação • Gestão Documental',
    description: 'Geração de certificados em lote com dados importados, modelos personalizados e QR Code de validação.',
    problem: 'Emitir certificados manualmente para grupos maiores gera retrabalho e aumenta o risco de erros.',
    solution: 'Automação da geração e validação dos certificados com modelos reutilizáveis e exportação organizada.',
    highlights: ['Importação de dados', 'Modelos', 'QR Code', 'Validação', 'PDF', 'Geração em lote'],
    stack: ['Web', 'PDF', 'QR Code', 'Automação'],
    status: 'Protótipo funcional',
    accent: '#06b6d4'
  },
  {
    slug: 'pai-pei',
    title: 'Sistema PAI/PEI',
    shortTitle: 'PAI/PEI',
    category: 'Educação Inclusiva • Documentação',
    description: 'Estruturação e acompanhamento de planos individualizados, registros pedagógicos, histórico e apoio de IA com validação humana.',
    problem: 'Documentos individualizados podem se tornar inconsistentes e difíceis de acompanhar quando não há uma estrutura comum.',
    solution: 'Fluxos orientados para elaboração, revisão, histórico e acompanhamento, preservando a validação pedagógica humana.',
    highlights: ['Formulários estruturados', 'Histórico', 'Acompanhamento', 'IA assistiva', 'Validação humana', 'Documentos'],
    stack: ['React', 'TypeScript', 'Firebase', 'IA'],
    status: 'Em planejamento',
    accent: '#ec4899'
  },
  {
    slug: 'indicadores-educacionais',
    title: 'Indicadores Educacionais',
    shortTitle: 'Indicadores',
    category: 'Educação • Business Intelligence',
    description: 'Painéis para acompanhamento de desempenho, frequência, avaliações e indicadores por escola, turma, aluno e habilidade.',
    problem: 'Dados educacionais dispersos dificultam a identificação rápida de prioridades e tendências.',
    solution: 'Dashboards e visões consolidadas para transformar dados em acompanhamento pedagógico e apoio à tomada de decisão.',
    highlights: ['Dashboards', 'Escolas', 'Turmas', 'Alunos', 'Habilidades', 'Comparativos'],
    stack: ['React', 'TypeScript', 'Dashboards', 'Dados'],
    status: 'Em evolução',
    accent: '#2563eb'
  },
  {
    slug: 'planejador-bncc-computacao',
    title: 'Planejador de Aulas — BNCC Computação',
    shortTitle: 'Planejador',
    category: 'EdTech • Planejamento Pedagógico',
    description: 'Ferramenta para apoiar o planejamento de aulas e atividades alinhadas à BNCC Computação.',
    problem: 'Transformar habilidades curriculares em atividades práticas e adequadas à realidade escolar exige tempo de planejamento e organização.',
    solution: 'Um fluxo orientado para selecionar habilidades, estruturar objetivos, atividades e materiais com apoio digital.',
    highlights: ['BNCC Computação', 'Planos de aula', 'Atividades', 'Habilidades', 'Apoio pedagógico', 'Organização'],
    stack: ['Web', 'IA', 'Educação Digital'],
    status: 'Em evolução',
    accent: '#14b8a6'
  },
  {
    slug: 'gerador-atividades-avaliacoes',
    title: 'Gerador de Atividades e Avaliações',
    shortTitle: 'Atividades',
    category: 'EdTech • Conteúdo',
    description: 'Ferramenta para estruturar atividades, avaliações e materiais pedagógicos com apoio de IA.',
    problem: 'Professores precisam adaptar atividades a diferentes objetivos, turmas e níveis de aprendizagem.',
    solution: 'Geração orientada de materiais pedagógicos com possibilidade de revisão e adaptação pelo professor.',
    highlights: ['Atividades', 'Avaliações', 'Adaptação', 'IA', 'Gabaritos', 'Planejamento'],
    stack: ['Web', 'IA', 'Automação'],
    status: 'Em desenvolvimento',
    accent: '#6366f1'
  },
  {
    slug: 'frequencia-desempenho',
    title: 'Análise de Frequência e Desempenho',
    shortTitle: 'Frequência',
    category: 'Educação • Dados',
    description: 'Solução para acompanhar frequência, resultados escolares e situações que exigem atenção pedagógica.',
    problem: 'Frequência e desempenho costumam ser analisados separadamente, dificultando a identificação de padrões e prioridades.',
    solution: 'Painéis que aproximam indicadores de participação e aprendizagem para apoiar o acompanhamento das equipes.',
    highlights: ['Frequência', 'Desempenho', 'Alertas', 'Turmas', 'Indicadores', 'Acompanhamento'],
    stack: ['Web', 'Dashboards', 'Dados'],
    status: 'Em evolução',
    accent: '#0ea5e9'
  },
  {
    slug: 'dashboards-avaliacoes',
    title: 'Dashboards de Avaliações Educacionais',
    shortTitle: 'Avaliações',
    category: 'Educação • Avaliação',
    description: 'Painéis de resultados por escola, turma, aluno, habilidade e ciclo avaliativo.',
    problem: 'Relatórios extensos dificultam a leitura rápida de avanços, lacunas e habilidades prioritárias.',
    solution: 'Visualizações organizadas para comparar resultados e apoiar reuniões pedagógicas e planos de intervenção.',
    highlights: ['Escolas', 'Turmas', 'Alunos', 'Habilidades', 'Comparativos', 'Relatórios'],
    stack: ['Web', 'Dashboards', 'Dados'],
    status: 'Em evolução',
    accent: '#3b82f6'
  },
  {
    slug: 'gestao-documental',
    title: 'Gestão Documental',
    shortTitle: 'Documentos',
    category: 'MP GOVTECH • Gestão Administrativa',
    description: 'Módulo para organizar documentos, modelos, emissões e rotinas documentais da gestão educacional.',
    problem: 'Documentos institucionais dispersos dificultam padronização, localização e controle das versões utilizadas.',
    solution: 'Um ambiente estruturado para centralizar modelos, documentos emitidos e recursos de automação documental.',
    highlights: ['Documentos', 'Modelos', 'Organização', 'Histórico', 'Emissão', 'Automação'],
    stack: ['Web', 'PDF', 'Automação'],
    status: 'Em planejamento',
    accent: '#64748b'
  },
  {
    slug: 'formacao-continuada',
    title: 'Formação Continuada',
    shortTitle: 'Formação',
    category: 'MP GOVTECH • Desenvolvimento Profissional',
    description: 'Módulo para organizar formações, participantes, registros, materiais e acompanhamento das ações formativas.',
    problem: 'A gestão de formações pode ficar fragmentada entre listas, arquivos, certificados e relatórios separados.',
    solution: 'Centralização do ciclo formativo, do planejamento ao registro de participação e evidências.',
    highlights: ['Formações', 'Participantes', 'Materiais', 'Registros', 'Certificados', 'Acompanhamento'],
    stack: ['Web', 'Dados', 'Automação'],
    status: 'Em planejamento',
    accent: '#22c55e'
  },
  {
    slug: 'programas-premiacoes',
    title: 'Programas e Premiações',
    shortTitle: 'Programas',
    category: 'MP GOVTECH • Gestão de Programas',
    description: 'Módulo para acompanhar regras, ciclos, resultados, classificações e premiações de programas educacionais.',
    problem: 'Programas com muitos critérios e ciclos exigem acompanhamento cuidadoso para manter rastreabilidade dos resultados.',
    solution: 'Registro estruturado de critérios, resultados e consolidações por ciclo, escola e público participante.',
    highlights: ['Ciclos', 'Critérios', 'Resultados', 'Classificações', 'Premiações', 'Histórico'],
    stack: ['Web', 'Dados', 'Relatórios'],
    status: 'Em planejamento',
    accent: '#eab308'
  },
  {
    slug: 'video-ai',
    title: 'VIDEO AI',
    shortTitle: 'VIDEO AI',
    category: 'Inteligência Artificial • Mídia',
    description: 'Projeto para apoiar a criação e organização de vídeos gerados com inteligência artificial.',
    problem: 'Produções com IA em múltiplas cenas exigem organização de roteiro, continuidade visual e gerenciamento das gerações.',
    solution: 'Um fluxo para estruturar cenas, storyboard, prompts e continuidade do conteúdo produzido por modelos generativos.',
    highlights: ['Storyboard', 'Cenas', 'Prompts', 'Continuidade visual', 'IA generativa', 'Organização'],
    stack: ['Web', 'IA', 'APIs'],
    status: 'Em planejamento',
    accent: '#d946ef'
  }
]
