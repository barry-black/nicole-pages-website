import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Nicole Pagès Thérapie" description="Description..." />

      <div className="bg-gray-400 p-4">
        <div className="flex flex gap-4 p-10">
          <Spinner size="small"></Spinner>
          <Spinner size="medium" variant="secondary"></Spinner>
          <Spinner size="large"></Spinner>
        </div>

        <div className="flex flex-col gap-4 p-10">
          <Button variant="topMenu">les soins</Button>
          <Button variant="info">+ d&apos;info</Button>
          <Button variant="callAction">Prendre rendez-vous</Button>
          <Button variant="disabled">Prendre rendez-vous</Button>
          <Button variant="ico" icon="/assets/svg/papillon_blanc.png">
            Nicole Pagès
          </Button>
        </div>

        <div className="flex flex-col gap-4 p-10">
          <Button isLoading variant="topMenu">les soins</Button>
          <Button isLoading variant="info">+ d&apos;info</Button>
          <Button isLoading variant="callAction">Prendre rendez-vous</Button>
        </div>

        <div className="gap-4 p-10">
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
