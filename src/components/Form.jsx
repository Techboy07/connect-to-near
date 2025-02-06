import Button from "./Button";
// import Input from "./Input";
// import React from "react";
import modal from "../wallets/modal";

// function Form() {
//   const [login, setLogin] = React.useState(true);

//   function handleClick() {
//     setLogin(!login);
//   }

//   return (
//     <div className="form-body">
//       <Input label={"Email"} />

//       <Input label={"Username"} />
//       <Input label={"Password"} />

//       <Button login={login} handleClick={handleClick} />
//       <p style={{ fontSize: "15px" }}>
//         Not registered?{" "}
//         <span style={{ color: "green" }} onClick={handleClick}>
//           {login ? "Sign up" : "Login"}
//         </span>
//       </p>
//     </div>
//   );
// }

const Login = () => (
  <>
    <Button
      login={true}
      handleClick={async () => {
        const newModal = await modal;
        newModal.show();
        // const {
        //   isSignedIn,
        //   wallet,
        //   store,
        //   setActiveAccount,
        //   setRememberRecentWallets,
        //   on,
        // } = selector;

        // wallet()
        //   .then((wallet) => {
        //     // return wallet.getPublicKey;
        //     return wallet.getAccounts();
        //   })
        //   .then((acct) => console.log(acct));

        // console.log(await selector);
      }}
    />
  </>
);

export default Login;
