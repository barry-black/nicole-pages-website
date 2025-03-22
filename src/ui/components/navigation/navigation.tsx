import { Button } from "@/ui/design-system/button/button";
import { Container } from "../container/container";

// interface Props {}

// export const Navigation = ({}: Props) => {
  export const Navigation = () => {
    return (
      <div className="bg-[var(--color-sky-blue)]">
        <div className="w-full px-[5vw] flex items-center justify-between">

          <div className="my-3">
            <Button variant="ico" icon="/assets/svg/papillon_blanc.png">
              Nicole Pagès
            </Button>
          </div>

          <div>
            <Button variant="topMenu">Les soins</Button>
            <Button variant="topMenu">Le cabinet</Button>
            <Button variant="topMenu">Les tarifs</Button>
            <Button variant="topMenu">Contact</Button>
          </div>
        </div>
      </div>
    );
  };