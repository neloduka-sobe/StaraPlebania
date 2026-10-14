interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl">{title}</h2>
    <p className="mx-auto mt-4 max-w-2xl text-xl text-ink-2">{subtitle}</p>
  </div>
);

export default SectionHeader;
