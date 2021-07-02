import React from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const { keyword } = router.query;
  return <Layout>당신이 검색한 키워드는 "{keyword}" 입니다.</Layout>;
};

export default Search;
