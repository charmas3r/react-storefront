import { ApolloQueryResult } from "@apollo/client";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import React, { ReactElement } from "react";

import { HomepageBlock, Layout } from "@/components";
import BaseSeo from "@/components/seo/BaseSeo";
import apolloClient from "@/lib/graphql";
import { MenuQuery, MenuQueryDocument } from "@/saleor/api";
import {Footer} from "@/components/Footer";

const Home = ({ menuData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <BaseSeo />
      <div className="hero min-h-screen"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1574614671614-95100635613c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")'}}
           data-theme="garden"
      >

        <div className='hero-overlay bg-opacity-60'/>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-primary-content">
              Hello there
            </h1>
            <p className="mb-5 text-primary-content">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="py-10">
        <main>
          <div className="max-w-7xl mx-auto px-8">
            {menuData?.menu?.items?.map((m) => {
              if (!!m) return <HomepageBlock key={m?.id} menuItem={m} />;
            })}
          </div>
        </main>
      </div>
      <Footer/>
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
