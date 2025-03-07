import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Nicole Pagès Thérapie" description="Description..." />

      <div className="space=y=5">
        <Typography variant="ds-40" theme="ocean-blue" component="h1">
          Site Nicole Pagès en cours de développement
        </Typography>
        <Typography variant="m-19" theme="black" component="div">
          Arrive bientôt...
        </Typography>
      </div>
    </>
  );
}
