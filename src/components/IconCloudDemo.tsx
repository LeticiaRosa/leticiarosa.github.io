import { IconCloud } from './magicui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'nextdotjs',
  'tailwindcss',
  'styledcomponents',
  'git',
  'github',
  'gitlab',
  'visualstudiocode',
  'figma',
  'firebase',
  'vercel',
  'amazonaws',
];

export function IconCloudDemo() {
  // Cores personalizadas para melhor contraste
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/6c63ff`); // Usando cor roxa que combina com seu tema

  return (
    <div className="flex h-[250px] w-[100px] items-center justify-center max-[720px]:hidden">
      <IconCloud images={images} />
    </div>
  );
}
