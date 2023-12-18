"use client";
import { FuelPlanProvider } from "@/components/FuelPlanContext";
import Navbar from "@/components/Navbar";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return (
    <div className="min-h-screen flex flex-col p-10 pb-1">
      <ApolloProvider client={client}>
        <FuelPlanProvider>
          <Navbar />
          <div className="grow flex flex-col">{children}</div>
        </FuelPlanProvider>
      </ApolloProvider>
    </div>
  );
}
