/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            '127.0.0.1',                 // for local dev
            'localhost',                 // if you ever use localhost instead
            'api.maraxib.fewnu.app',     // production backend
          ],
    },
};
export default nextConfig;