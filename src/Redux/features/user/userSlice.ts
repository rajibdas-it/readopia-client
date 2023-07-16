import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

interface IUserSlice {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface IUserCredential {
  email: string;
  password: string;
}

const initialState: IUserSlice = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

const googleProvider = new GoogleAuthProvider();

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password }: IUserCredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }: IUserCredential) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

export const loginWithGoogle = createAsyncThunk(
  "user/loginWithGoogle",
  async () => {
    const data = await signInWithPopup(auth, googleProvider);
    return data.user.email;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isError = false;
        state.error = null;
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload;
        state.error = null;
        state.isError = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user.email = null;
        state.isError = true;
        state.error = action.error.message!;
      })
      .addCase(loginUser.pending, (state) => {
        state.isError = false;
        state.error = null;
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload;
        state.error = null;
        state.isError = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user.email = null;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

export const { setUser, setIsLoading } = userSlice.actions;
export default userSlice.reducer;
