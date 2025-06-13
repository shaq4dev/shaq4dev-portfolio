import type { NextConfig } from 'next'

const config: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's4dev-portfolio-bucket.s3.us-east-2.amazonaws.com',
                port: '',
                pathname: '/*',
                search: '',
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
}

export default config