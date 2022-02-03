import { Page } from "../utilities/PageEnum";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
};

const Home = ({ setCurrentPage }: Props) => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-4">
      <div
        className="flex justify-center items-center p-3 border-2 border-gray-600 rounded 
                    min-h-[400px] min-w-[400px] max-w-xl drop-shadow-md shadow-slate-400 "
      >
        خوش آمدید!
      </div>
    </div>
  );
};

export default Home;
