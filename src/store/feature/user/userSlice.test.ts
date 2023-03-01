import { UserStructure } from "../../../types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a loginUser reducer", () => {
  const userInitialState: UserStructure = {
    id: 1,
    username: "",
    token: "",
    email: "",
    isLogged: false,
    shippingDetails: "",
  };

  const userToLogIn: UserStructure = {
    id: 1,
    username: "janesmith",
    token: "def456hij789",
    email: "janesmith@example.com",
    isLogged: false,
    shippingDetails: "456 Oak St, Anytown, USA",
  };

  const userLoggedIn: UserStructure = {
    id: 1,
    username: "janesmith",
    token: "def456hij789",
    email: "janesmith@example.com",
    isLogged: true,
    shippingDetails: "456 Oak St, Anytown, USA",
  };

  describe("When it receives a user with isLogged status set on 'false'", () => {
    test("Then it should return that user with its isLogged status set to 'true'", () => {
      const loginUser = loginUserActionCreator(userToLogIn);

      const newUser = userReducer(userInitialState, loginUser);

      expect(newUser).toStrictEqual(userLoggedIn);
    });
  });
});
