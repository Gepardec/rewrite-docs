import type * as Preset from "@docusaurus/preset-classic";
import type {Config} from "@docusaurus/types";
import remarkTokenReplacer from "./src/plugins/replace-tokens";
import latestVersions from "./src/plugins/latest-versions";

const description = "Large-scale automated source code refactoring"

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'OpenRewrite',
    operatingSystem: 'Windows, macOS, Linux',
    applicationCategory: 'ProductivityApplication',
    description,
    author: {
        '@type': 'Organization',
        name: 'Moderne',
    },
    datePublished: new Date(),
    softwareVersion: latestVersions["{{VERSION_REWRITE_CORE}}"],
    downloadUrl: 'https://github.com/openrewrite/rewrite/releases',
    video: {
        '@type': 'VideoObject',
        name: "Migrate to Java 21 using OpenRewrite",
        description: "This recipe will apply changes commonly needed when migrating to Java 21. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 21 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 21.",
        thumbnailUrl: "https://i.ytimg.com/vi/uViRlX-RahA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCBmYPSz3dMNEQR7pseLWsVszXd2A",
        uploadDate: new Date("Feb 13, 2024 "),
        contentUrl: "https://www.youtube.com/watch?v=uViRlX-RahA",
        embedUrl: "https://www.youtube.com/embed/uViRlX-RahA?si=v1T7sLsQJ4YQdWPo",
    },
};

const config: Config = {
    title: "OpenRewrite Docs",
    headTags: [
        {
            tagName: 'script',
            attributes: {
                type: 'application/ld+json',
            },
            innerHTML: JSON.stringify(structuredData),
        },
        // <link rel="preconnect" href="https://fonts.googleapis.com">
        {
            tagName: 'link',
            attributes: {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
        },
        // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        {
            tagName: 'link',
            attributes: {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: 'anonymous',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
            },
        },

    ],
    tagline: description,
    // favicon: "img/favicon.svg",
    favicon: "img/favicon.ico",

    url: "https://docs.openrewrite.org",
    baseUrl: "/rewrite-docs/",

    organizationName: "openrewrite",
    projectName: "rewrite-docs",
    deploymentBranch: "docusaurus",
    trailingSlash: false,

    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    routeBasePath: "/",
                    sidebarCollapsible: true,
                    sidebarPath: "./sidebars.ts",
                    editUrl: "https://github.com/gepardec/openrewrite-collection-doc",
                    remarkPlugins: [
                        [
                            remarkTokenReplacer,
                            {
                                replacements: latestVersions,
                            },
                        ],
                    ],
                },
                gtag: {
                    trackingID: "G-Y67JVX3WB7",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    future: {
        experimental_faster: true,
    },

    themeConfig: {
        image: "img/moderne-poster-logo.svg",
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            logo: {
                alt: "OpenRewrite Logo",
                src: "img/logo.svg",
                srcDark: "img/darkLogo.svg",
            },
            items: [
                {
                    href: "https://github.com/gepardec",
                    label: "GitHub",
                    position: "right",
                },
                {
                    href: "https://www.gepardec.com",
                    label: "Gepardec",
                    position: "right",
                },
            ],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
