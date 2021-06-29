import {useEffect,useState} from 'react';
import { useRouter } from "next/router";

import { Button, Card,Container } from 'react-bootstrap';
import { MainLayoult } from '../../components/navBar/MainLayoult';

export default function Index() {
    const [post, usePost] = useState({})
    const router = useRouter()
    useEffect(() => {
        const request = async () => {
            const respons = await fetch(` http://localhost:1337/posts?id=${router.query.id}`)
            const json = await respons.json()
            usePost(json[0])
           
        }
        request()
    }, [])
    
   
   
    return (
        <MainLayoult>
             <Container >
             {post &&  <Card style={{ width: '35rem' }}>
                            <Card.Img variant="top" src={post.Image && `http://localhost:1337${post.Image[0].url}`} alt='not photo' width="200px" />
                            <Card.Body>
                                <Card.Title>Field name : {post.FieldName}</Card.Title>
                                <Card.Text>
                                    Content : {post.Content}
                                </Card.Text>
                                <Card.Footer>
                                    <small className="text-muted">date : {post.date && new Date(post.date).toISOString().slice(0, 10)}</small>
                                </Card.Footer>
                                <Button variant="primary" onClick={()=>router.push('/posts')}>  
                                    Come ta Posts
                                </Button>
                            </Card.Body>
                        </Card>}
                        </Container>
        </MainLayoult>
    )
}
