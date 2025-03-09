import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Nicole Pagès Thérapie" description="Description..." />

      <div className="bg-gray-400 p-4">
        <div className="flex flex-col gap-1">
          {" "}
          {/* gap-1 = 4px, pour 5px utilise gap-[5px] */}
          <Button variant="topMenu">Menu</Button>
          <Button variant="info">+ d'info</Button>
          <Button variant="callAction">Prendre rendez-vous</Button>
        </div>

        <div className="mt-[5px] space-y-[5px]">
          <Typography variant="ds-40" theme="ocean-blue" component="h1">
            Text
          </Typography>
          <Typography variant="ds-50" theme="white" component="h1">
            Text
          </Typography>
          <Typography variant="ds-62-shadow" theme="ocean-blue" component="h1">
            Text
          </Typography>
          <Typography variant="m-18" theme="black" component="div">
            Text
          </Typography>
          <Typography variant="m-18-italic" theme="pale-blue" component="div">
            Text
          </Typography>
          <Typography variant="m-19" theme="ocean-blue" component="div">
            Text
          </Typography>
          <Typography variant="m-20" theme="black" component="div">
            Text
          </Typography>
          <Typography variant="m-24" theme="pale-blue" component="div">
            Text
          </Typography>
          <Typography variant="m-36" theme="ocean-blue" component="div">
            Text
          </Typography>
          <Typography variant="m-40" theme="black" component="div">
            Text
          </Typography>
          <Typography variant="m-88-shadow" theme="white" component="div">
            Text
          </Typography>
        </div>
      </div>
    </>
  );
}
