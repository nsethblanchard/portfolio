import sanityClient from '@sanity/client'

export default sanityClient({
    // Id found in studio/sanity.json or through URL manage.sanity.io
    projectId: "lxy7g4kw",
    dataset: "production"
})