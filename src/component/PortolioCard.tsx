import { ReactNode } from "react";
import { CardPixelsHeightBig, CardPixelsWidthBig } from "../design/design";
import { Fade } from "react-awesome-reveal";

interface PortfolioCardHeader {
  headerText: string;
  link?: string;
}
interface PortfolioCardBody {
  bodyText: string;
  embedContent?: ReactNode;
  embedContentWidth?: CardPixelsWidthBig;
  embedContentHeight?: CardPixelsHeightBig;
}
interface PortfolioCardFooter {
  footerText: string;
}

interface PortfolioCardProps {
  header: PortfolioCardHeader;
  body: PortfolioCardBody;
  footer?: PortfolioCardFooter;
  options?: PortolioOptions;
}

type FadeDirection = "left" | "right" | "down" | "up";

interface PortolioOptions {
  fadeDirections?: FadeDirection | undefined;
  triggerOnce?: boolean;
}

const HeaderSection = ({ body }: { body: PortfolioCardBody }) => {
  return (
    <div
      style={{
        display: "flex",
      }}>
      <div style={{ textAlign: "left", marginRight: "30px" }}>
        {body.bodyText}
      </div>
      {body.embedContent && body.embedContent}
    </div>
  );
};

export const PortfolioCrad = ({
  header,
  body,
  footer,
  options,
}: PortfolioCardProps) => {
  return (
    <Fade
      direction={options?.fadeDirections}
      triggerOnce={options?.triggerOnce}>
      <div
        style={{
          width: "1000px",
          height: "500px",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
        <h2 style={{ textAlign: "left" }}>
          {header.headerText} {header.link && <a href={header.link} target="_blank">Github repo link</a>}
        </h2>
        <HeaderSection body={body} />
        <div>{footer?.footerText}</div>
      </div>
    </Fade>
  );
};
