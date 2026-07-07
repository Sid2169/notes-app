// Constraints shared by both the frontend (for instant validation feedback)
// and the backend (for the validation that actually matters, since the
// backend can never trust the frontend to have checked anything).
export const NOTE_CONSTRAINTS = {
  TITLE_MAX_LENGTH: 100,
  CONTENT_MAX_LENGTH: 5000,
};