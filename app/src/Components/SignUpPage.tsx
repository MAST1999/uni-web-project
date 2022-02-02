import { Page } from "../utilities/PageEnum";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
};

export const SignUpPage = ({ setCurrentPage }: Props) => {
  return (
    <div>
      <span>SignUpPage</span>
      <button
        onClick={() => {
          setCurrentPage(Page.AboutUs);
        }}
      >
        Go To About Us
      </button>
    </div>
  );
};
