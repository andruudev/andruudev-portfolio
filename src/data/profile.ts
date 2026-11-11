export type Copy = { en: string; es: string };
export const copy = (en: string, es: string): Copy => ({ en, es });
export interface ProfileEntry { title: Copy; organization: string; status: Copy; description: Copy; }
export const education: ProfileEntry[] = [
  { title: copy('Software Development', 'Desarrollo de Software'), organization: 'Pontificia Universidad Católica del Ecuador', status: copy('Currently studying', 'En curso'), description: copy('Building a foundation in software development, programming and application design to complement my work in cloud infrastructure.', 'Formándome en desarrollo de software, programación y diseño de aplicaciones para complementar mi trabajo en infraestructura cloud.') },
  { title: copy('Marketing', 'Marketing'), organization: 'Instituto Universitario ISMAC', status: copy('Currently studying', 'En curso'), description: copy('Connecting technology with communication, strategy and an understanding of the people behind each product.', 'Conectando la tecnología con la comunicación, la estrategia y las personas detrás de cada producto.') },
];
export const leadership: ProfileEntry[] = [
  { title: copy('Microsoft Student Ambassador', 'Microsoft Student Ambassador'), organization: 'Microsoft · Ecuador', status: copy('Community', 'Comunidad'), description: copy('Sharing technical knowledge and helping students connect with developer communities through learning and collaboration.', 'Compartiendo conocimiento técnico y acercando a estudiantes a comunidades de desarrollo mediante el aprendizaje y la colaboración.') },
  { title: copy('AWS Student Builder Group Leader', 'Líder de AWS Student Builder Group'), organization: 'PUCE · awspuce.com', status: copy('Cloud community', 'Comunidad cloud'), description: copy('Creating spaces to learn AWS, explore cloud architectures and build alongside other students.', 'Creando espacios para aprender AWS, explorar arquitecturas cloud y construir junto a otros estudiantes.') },
  { title: copy('Creative Director', 'Director creativo'), organization: 'velitty.com', status: copy('Technology & creativity', 'Tecnología y creatividad'), description: copy('Bringing a product and communication perspective to technical ideas and digital experiences.', 'Aportando una perspectiva de producto y comunicación a las ideas técnicas y las experiencias digitales.') },
];
export const events = [
  { name: 'GDG DevFest 2026', year: '2026', role: copy('Staff', 'Staff'), icon: 'code-xml', code: 'GDG', description: copy('Part of the event staff, contributing to the experience of the developer community.', 'Parte del staff del evento, contribuyendo a la experiencia de la comunidad de desarrolladores.') },
  { name: 'AWS Community Day Ecuador 2026', year: '2026', role: copy('Staff', 'Staff'), icon: 'cloud', code: 'AWS', description: copy('Supporting an event that brings together the AWS community in Ecuador to share knowledge and connect.', 'Apoyando un encuentro de la comunidad AWS en Ecuador para compartir conocimiento y conectar.') },
  { name: 'NASA Space Apps Challenge', year: '', role: copy('Speaker · AWS', 'Ponente · AWS'), icon: 'orbit', code: 'NASA', description: copy('Delivered a talk about AWS for participants in the NASA Space Apps Challenge.', 'Impartí una charla sobre AWS para participantes del NASA Space Apps Challenge.') },
];
export const stack = [
  { title: copy('Cloud foundations', 'Fundamentos cloud'), icon: 'cloud', tools: ['AWS · VPC, IAM, EC2, S3', 'EKS · ECS · Lambda', 'CloudFront · Route 53'] },
  { title: copy('Infrastructure as Code', 'Infraestructura como Código'), icon: 'blocks', tools: ['Terraform · OpenTofu', 'Ansible · Linux', 'Python · Bash'] },
  { title: copy('Delivery & platforms', 'Entrega y plataformas'), icon: 'git-branch', tools: ['Docker · Kubernetes · Helm', 'GitHub Actions · Argo CD', 'OIDC · Trivy · GitOps'] },
  { title: copy('Reliability & visibility', 'Confiabilidad y visibilidad'), icon: 'activity', tools: ['OpenTelemetry', 'Prometheus · Grafana · Loki', 'CloudWatch · SLOs'] },
];
