import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Container from "@material-ui/core/Container";

import Badge from "@material-ui/core/Badge";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { getHome } from "@api/home/_api.js";

import Layout from "@layouts/open/index";
import s from "./index.module.scss";

export default function Home({ data }) {
  const [items, setItems] = useState(data);

  useEffect(() => {}, []);

  return (
    <>
      <Layout>
        <Head>
          <title>TrueLinked | Next.js + Progressive Web App</title>
          <meta
            name="description"
            content="TrueLinked | Next.js + Progressive Web App"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={s.home}>
          <Container>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Body</TableCell>
                    <TableCell align="left">userId</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.post.map((i, index) => (
                    <TableRow key={index}>
                      <TableCell>{i.id}</TableCell>
                      <TableCell align="left">
                        <Link href={`/post/${i.id}`}>
                          <a>{i.title}</a>
                        </Link>
                      </TableCell>
                      <TableCell align="left">{i.body}</TableCell>
                      <TableCell align="left" component="th" scope="row">
                        {i.userId}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getHome();

  return {
    props: { data },
  };
}
