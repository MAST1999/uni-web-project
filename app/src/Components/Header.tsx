import Button from "../UI/Button";
import { ButtonType } from "../utilities/ButtonType";
import { Page } from "../utilities/PageEnum";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
};

export const Header = ({ setCurrentPage }: Props) => {
  return (
    <div className="w-full flex justify-between gap-2 p-4">
      {/* navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Button
          className="min-w-[120px]"
          action={() => {
            setCurrentPage(Page.Home);
          }}
          buttonType={ButtonType.Secondary}
        >
          صفحه اصلی
        </Button>
        <Button
          className="min-w-[120px]"
          action={() => {
            setCurrentPage(Page.Education);
          }}
          buttonType={ButtonType.Secondary}
        >
          آموزش ها
        </Button>
        <Button
          className="min-w-[120px]"
          action={() => {
            setCurrentPage(Page.AboutUs);
          }}
          buttonType={ButtonType.Secondary}
        >
          درباره ما
        </Button>
        <Button
          className="min-w-[120px]"
          action={() => {
            setCurrentPage(Page.ContactUs);
          }}
          buttonType={ButtonType.Secondary}
        >
          تماس با ما
        </Button>
      </div>
      {/* login and sign up buttons */}
      <div className="flex justify-between">
        <div className="flex flex-col items-center gap-2">
          <Button
            className="w-24"
            action={() => {
              setCurrentPage(Page.Login);
            }}
            buttonType={ButtonType.Primary}
          >
            ورود
          </Button>
          <Button
            className="w-24"
            action={() => {
              setCurrentPage(Page.SingUp);
            }}
            buttonType={ButtonType.Primary}
          >
            ثبت نام
          </Button>
        </div>
        <div className="flex items-center"></div>
      </div>
    </div>
  );
};
