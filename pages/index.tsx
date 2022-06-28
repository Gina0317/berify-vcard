import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import berifyAPI from "../core/api/berify";
import berifyDB from "../core/db";
import routes from "../core/routes";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        permanent: false, destination: routes.signin,
      }
    };
  }

  return {
    props: {
    }
  };
};

const Page = ({ }: {}): InferGetServerSidePropsType<typeof getServerSideProps> => {
  return (
    <Dashboard />
  );
};

export default Page;
