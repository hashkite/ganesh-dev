let userConfig = undefined;

try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  console.warn('No user config found, using default config.');
  // Ignore error and continue with default config
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  
  // Adding support for global CSS and SCSS
  css: {
    // Enable CSS Modules in your project
    modules: true, // Enable support for CSS Modules (local scoped CSS)
    // Enable support for global CSS
    // The global styles should be imported in your _app.js or _app.tsx
  },

  sassOptions: {
    // Enable Sass options if you're using Sass/SCSS
    prependData: `@import "@/styles/variables.scss";`, // Example of global SCSS import
  },
};

mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (
      typeof userConfig[key] === 'object' &&
      userConfig[key] !== null &&
      !Array.isArray(userConfig[key]) &&
      typeof nextConfig[key] === 'object' &&
      nextConfig[key] !== null &&
      !Array.isArray(nextConfig[key])
    ) {
      // Recursively merge nested objects
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      // Overwrite the value if it's not an object
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
