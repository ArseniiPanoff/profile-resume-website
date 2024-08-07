import React, { useState } from 'react';
import { Box, TextField, Button, CircularProgress, Alert } from '@mui/material';

interface FormState {
  name: string;
  email: string;
  company: string;
  position: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const useForm = (initialState: FormState) => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email))
      newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setIsSuccess(false);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate form submission
        setIsSuccess(true);
        setFormData(initialState);
      } catch (error) {
        console.error('Form submission error:', error); // Handle form submission error
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  };
};

const ContactForm: React.FC = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  } = useForm({ name: '', email: '', company: '', position: '', message: '' });

  return (
    <Box mt={4} width="100%" maxWidth={600}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
          error={!!errors.name}
          helperText={errors.name}
          aria-label="Name"
          aria-describedby="name-helper-text"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          margin="normal"
          required
          error={!!errors.email}
          helperText={errors.email}
          aria-label="Email"
          aria-describedby="email-helper-text"
        />
        <TextField
          fullWidth
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          margin="normal"
          aria-label="Company"
          aria-describedby="company-helper-text"
        />
        <TextField
          fullWidth
          label="Position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          margin="normal"
          aria-label="Position"
          aria-describedby="position-helper-text"
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          margin="normal"
          required
          error={!!errors.message}
          helperText={errors.message}
          aria-label="Message"
          aria-describedby="message-helper-text"
        />
        {isSubmitting ? (
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgress />
          </Box>
        ) : (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        )}
        {isSuccess && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Message sent successfully!
          </Alert>
        )}
      </form>
    </Box>
  );
};

export default ContactForm;
