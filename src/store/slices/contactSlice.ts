import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { API_CONFIG } from '@/config/constants';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface ContactState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
  formData: ContactFormData;
}

const initialState: ContactState = {
  isSubmitting: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  formData: {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  },
};

// Async thunk for form submission
export const submitContactForm = createAsyncThunk(
  'contact/submitForm',
  async (formData: ContactFormData, { rejectWithValue }) => {
    try {
      // API-ready structure - replace with actual endpoint
      const response = await fetch(`${API_CONFIG.BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      return await response.json();
    } catch (error) {
      // For demo purposes, simulate success after timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { success: true, message: 'Form submitted successfully!' };
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<ContactFormData>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = '';
    },
    clearStatus: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isSubmitting = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.isSubmitting = false;
        state.isSuccess = true;
        state.formData = initialState.formData;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isSubmitting = false;
        state.isError = true;
        state.errorMessage = action.payload as string || 'Something went wrong';
      });
  },
});

export const { updateFormData, resetForm, clearStatus } = contactSlice.actions;
export default contactSlice.reducer;
