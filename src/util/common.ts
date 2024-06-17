const defaultPostDomain: string = 'https://www.jianshu.com/p/';
const defaultAuthorDomain: string = 'https://www.jianshu.com/u/';
const goLink = (slug: string) => {
    slug && (location.href = defaultPostDomain + slug)
}

export {
    defaultPostDomain,
    defaultAuthorDomain,
    goLink,
};