import PortfolioCard from "./Card";

type Props = {
  data: any[];
};

export default function PortfolioGrid({ data }: Props) {
  return (
    <section className="container-custom">
      <div className="grid md:grid-cols-3 gap-10">
        {data.map((item) => (
          <PortfolioCard key={item.slug} data={item} />
        ))}
      </div>
    </section>
  );
}
