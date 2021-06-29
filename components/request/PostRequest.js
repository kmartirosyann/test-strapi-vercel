import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import style from '../../styles/posts.module.css'
import { Button, Card, CardGroup, Container } from 'react-bootstrap';


export default function PostRequest() {
    const [posts, usePosts] = useState([])
    const router = useRouter()
    const singlePost = (id) => {
        router.push(`/blog/${id}`)

    }
  
    const Request = async () => {
        const response = await fetch(" http://localhost:1337/posts")
       const json = await response.json()
        usePosts(json)
    };
    useEffect(() => {

        Request()
       

    }, [])

    return (
        <Container >
            <CardGroup>
                {posts && posts.map(item => (
                    <div key={item.id} className='mr-3' >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`http://localhost:1337${item.Image[0].url}`} width="200px" />
                            <Card.Body>
                                <Card.Title>Field name : {item.FieldName}</Card.Title>
                                <Card.Text className={style.textScrole}>
                                    Content : {item.Content}
                                </Card.Text>
                                <Card.Footer>
                                    <small className="text-muted">date : {new Date(item.date).toISOString().slice(0, 10)}</small>
                                </Card.Footer>
                                <Button variant="primary" onClick={() => singlePost(item.id)}>
                                    Blog Post
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>

                ))}
            </CardGroup>
        </Container>
    )
}
