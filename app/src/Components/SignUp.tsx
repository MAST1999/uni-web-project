import { useState } from "react";
import Button from "../UI/Button";
import { ButtonType } from "../utilities/ButtonType";
import { Page } from "../utilities/PageEnum";

type Props = {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
};

const SignUp = ({ setCurrentPage }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/2 p-4 flex flex-col gap-2 justify-center items-center">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="input w-64"
          placeholder="نام و نام خانوادگی"
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="input w-64 placeholder:font-sans"
          placeholder="نام کاربری"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="input w-64"
          placeholder="ایمیل"
          type="email"
        />
        <input
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          className="input w-64"
          placeholder="شماره همراه"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="input w-64"
          placeholder="رمز عبور"
          type="password"
        />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          className="input w-64"
          placeholder="تکرار رمز عبور"
          type="password"
        />
        <Button
          className="w-64"
          action={async () => {
            if (isBusy) return;
            setIsBusy(true);
            const registrationResult = await fetch(
              "http://localhost:3000/users/user",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email,
                  name,
                  password,
                  username,
                  phoneNumber,
                }),
              }
            );

            if (registrationResult.status === 200) {
              alert("ثبت نام با موفقیت انجام شد");
              setConfirmPassword("");
              setPassword("");
              setUsername("");
              setPhoneNumber("");
              setEmail("");
              setName("");

              setCurrentPage(Page.Education);
            } else {
              alert("خطا در ثبت نام");
            }
          }}
          buttonType={ButtonType.Primary}
        >
          ثبت نام
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
