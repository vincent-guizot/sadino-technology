import { portfolios } from "@/constants/data";
import { notFound } from "next/navigation";
import PortfolioDetailClient from "./PortfolioDetailClient";

export default async function Page({ params }: any) {
  const { slug } = await params;

  const project = portfolios.find((item) => item.slug === slug);

  if (!project) return notFound();

  return <PortfolioDetailClient project={project} />;
}
