module.exports = {
    siteMetadata: {
        title: `React Native 프론트앤드 개발자 최창원 입니다.`,
        description: `개발자 최창원의 개인 블로그 입니다.`,
        author: `choiuhana`,
        siteUrl: 'https://choiuhana.github.io/',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        `gatsby-plugin-emotion`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-smartypants',
                        options: {
                            dashes: 'oldschool',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 768,
                            quality: 100,
                            withWebp: true,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {},
                    },
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow',
                        },
                    },
                    {
                        resolve: `gatsby-plugin-sharp`,
                        options: {
                            defaults: {
                                formats: ['auto', 'webp'],
                                quality: 100,
                                placeholder: 'blurred',
                            },
                        },
                    },
                    `gatsby-transformer-sharp`,
                    `gatsby-plugin-image`,
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl: 'https://choiuhana.github.io/',
                stripQueryString: true,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [{userAgent: '*', allow: '/'}],
            },
        },
    ],
};
