import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
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
