import { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import Layout from "@layouts/open/index";

import { getPost, getUser } from "@api/post/_api.js";
import s from "./post.module.scss";

export default function Post({ post }) {
  const [userId, setUserId] = useState(post.userId);
  const [id, setId] = useState(post.id);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [username, setUsername] = useState();
  const [website, setWebsite] = useState();

  const apiUser = async () => {
    let data = await getUser();

    return data.user.map((user, key) => {
      if (user.id == userId) {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setUsername(user.username);
        setWebsite(user.website);
      }
    });
  };

  const renderUser = () => {
    apiUser();

    return (
      <Card className={s.user}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" component="p">
            {username}
            <br />
            {email}
            <br />
            {phone}
            <br />
            {website}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  useEffect(() => {}, []);

  return (
    <>
      <Layout>
        <main className={s.post}>
          <Container>
            {renderUser()}

            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  User Id : {userId}
                </Typography>
                <Typography variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography variant="body2" component="p">
                  {body}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  href="/"
                  color="primary"
                  variant="contained"
                  size="small"
                >
                  {`<< Back`}
                </Button>
              </CardActions>
            </Card>
          </Container>
        </main>
      </Layout>

      <style jsx>{``}</style>
      <style jsx global>{``}</style>
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  let data = await getPost(params.slug);

  return {
    props: { post: data?.post },
  };
}
