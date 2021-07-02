import Link from "next/link";

const Index = () => {
  return (
    <>
      <div>index</div>
      <h2>
        <Link href="/about">
          <a>소개</a>
        </Link>
      </h2>
    </>
  );
};

export default Index;
