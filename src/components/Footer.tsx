import { DiscordLogo, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

export function Footer() {
  const handleSocialMediaClick = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = 'https://www.facebook.com/leticia.rosa.14811/';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/itsleety/';
        break;
      case 'linkedin':
        url = 'https://www.linkedin.com/in/leticia-rosa-oliveira-miranda';
        break;
      case 'github':
        url = 'https://github.com/LeticiaRosa';
        break;
      case 'discord':
        url = 'https://discord.gg/wXvQheuaS4';
        break;
      default:
        break;
    }
    window.open(url, '_blank');
  };
  return (
    <footer className="container-section bg-purple w-full text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">
        <div>
          <span className="font-bold whitespace-nowrap">TODOS OS DIREITOS RESERVADOS.</span>
        </div>
        <div className="flex gap-2">
          <LinkedinLogo className="cursor-pointer" size={32} onClick={() => handleSocialMediaClick('linkedin')} />
          <GithubLogo className="cursor-pointer" size={32} onClick={() => handleSocialMediaClick('github')} />
          <DiscordLogo className="cursor-pointer" size={32} onClick={() => handleSocialMediaClick('discord')} />
          <FacebookLogo className="cursor-pointer" size={32} onClick={() => handleSocialMediaClick('facebook')} />
          <InstagramLogo className="cursor-pointer" size={32} onClick={() => handleSocialMediaClick('instagram')} />
        </div>
      </div>
    </footer>
  );
}
