import type { NextConfig } from 'next'

const config: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                port: '',
                pathname: '/photo/**',
                search: '',
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
}

export default config