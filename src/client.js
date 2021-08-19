import sanityClient from '@sanity/client'

export default sanityClient({
    // found in studio/sanity.json
    projectId: "lxy7g4kw",
    dataset: "production"
})