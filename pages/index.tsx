import { ApolloQueryResult } from "@apollo/client";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React, { ReactElement } from "react";

import { HomepageBlock, Layout } from "@/components";
import BaseSeo from "@/components/seo/BaseSeo";
import apolloClient from "@/lib/graphql";
import { MenuQuery, MenuQueryDocument } from "@/saleor/api";

const Home = ({ menuData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <BaseSeo />
      <div className="py-10">
        <header className="mb-4">
          <div className="max-w-7xl mx-auto px-8">
            <div className="h-20 bg-gradient-to-r from-cyan-500 to-blue-500 py-2 sm:py-6 text-center text-amber-50 text-xl">
              Stay tuned... This website is under development!
            </div>

          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto px-8">

            {/*{menuData?.menu?.items?.map((m) => {*/}
            {/*  if (!!m) return <HomepageBlock key={m?.id} menuItem={m} />;*/}
            {/*})}*/}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const result: ApolloQueryResult<MenuQuery | undefined> =
    await apolloClient.query({
      query: MenuQueryDocument,
      variables: { slug: "homepage" },
    });
  return {
    props: {
      menuData: result?.data,
    },
    revalidate: 60 * 60, // value in seconds, how often ISR will trigger on the server
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
