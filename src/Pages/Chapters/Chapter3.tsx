import Page from "../Page";

import "../../styles/Chapters/Chapter1.scss";
import { useSetAtom } from "jotai";
import { pageAtom } from "../../state/pageState";

type Props = {};

const Chapter3 = ({}: Props) => {
  const setChapter = useSetAtom(pageAtom);
  return (
    <Page>
      <p>chapter 3</p>
      <div>
        <button onClick={() => setChapter((oldChapter) => oldChapter - 1)}>
          {"<"} Geri {">"}
        </button>
        <button onClick={() => setChapter((oldChapter) => oldChapter + 1)}>
          {"<"} ileri {">"}
        </button>
      </div>
    </Page>
  );
};

export default Chapter3;
