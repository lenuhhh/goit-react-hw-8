import { createAsyncThunk } from "@reduxjs/toolkit";

import { usersApi } from "../../config/usersApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await usersApi.get("/contacts");
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await usersApi.post("/contacts", contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await usersApi.delete(`contacts/${contactId}`);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
); 
