import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Nicole Pagès Thérapie" description="Description..." />
      <Typography variant="ds-40-semibold" component="h1">
        Site Nicole Pagès en cours de développement...
      </Typography>
    </>
  );
}
