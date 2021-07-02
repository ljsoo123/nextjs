import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Index 페이지</title>
      </Head>
      <div>index</div>
      <h2>
        <Link href="/about">
          <a>소개</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default Index;
