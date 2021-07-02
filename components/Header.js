import Link from "next/link";

const marginRight = {
  marginRight: "1rem",
};

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={marginRight}>홈</a>
      </Link>
      <Link href="/about">
        <a style={marginRight}>소개</a>
      </Link>
      <Link prefetch href="/ssr-test">
        <a style={marginRight}>ssr-test</a>
      </Link>
    </div>
  );
};

export default Header;
