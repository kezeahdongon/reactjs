import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId; //router.query property gives use access to a nested object;

    // send a request to the backend API
    // to fetch the news item with newsId

    return <h1>The Detail Page</h1>
}

export default DetailPage;