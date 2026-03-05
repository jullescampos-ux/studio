import type {NextConfig} from 'next';

// ATENÇÃO: Se você estiver implantando em uma página de projeto do GitHub (ex: username.github.io/my-repo),
// você precisará definir o nome do repositório abaixo.
const repoName = ''; // Substitua pelo nome do seu repositório, por exemplo: 'my-repo'

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const assetPrefix = isGithubActions && repoName ? `/${repoName}/` : '';
const basePath = isGithubActions && repoName ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
