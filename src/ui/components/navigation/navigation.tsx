import { Button } from "@/ui/design-system/button/button";
import { Container } from "../container/container";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="bg-[var(--color-sky-blue)]">

      <div className="px-20">
        <Container className="flex items-center justify-between gap-7">
          <div className="my-3">
            <Button variant="ico" icon="/assets/svg/papillon_blanc.png">
              Nicole Pagès
            </Button>
          </div>
          <div className="flex items-center gap-8 self-end">
            <Button variant="topMenu">Les soins</Button>
            <Button variant="topMenu">Le cabinet</Button>
            <Button variant="topMenu">Les tarifs</Button>
            <Button variant="topMenu">Contact</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};