// components/FeedbackForm.tsx
'use client';
import { useState, useEffect } from 'react';
import { useGetFeedbackFormQuery, useSubmitFeedbackResponseMutation } from '@/redux/features/api/event/eventApi';
import { useSelector } from 'react-redux';

interface FormField {
  id: string;
  type: 'text' | 'rating' | 'multiSelect' | 'hashtags' | 'anonymous';
  label: string;
  required: boolean;
  options?: string[];
  placeholder?: string;
  tags?: string[];
}

interface FormResponse {
  [key: string]: { value: any };
}

const FeedbackForm = ({id}: {id: string}) => {


console.log(id);
  
  const { user } = useSelector((state: any) => state.auth);

  const { data: feedbackData, isLoading, error } = useGetFeedbackFormQuery(id);
  console.log(feedbackData);
  const [submitFeedback, { isLoading: isSubmitting, isSuccess, error: submitError }] = useSubmitFeedbackResponseMutation();

  const [formResponses, setFormResponses] = useState<FormResponse>({});

  useEffect(() => {
    if (feedbackData?.feedback?.formFields) {
      const initialResponses = Object.fromEntries(
        Object.entries(feedbackData.feedback.formFields).map(([key, fieldData]: [string, any]) => [
          key,
          { value: fieldData.type === 'rating' ? 0 : fieldData.type === 'multiSelect' ? [] : '' }
        ])
      );
      setFormResponses(initialResponses);
    }
  }, [feedbackData]);

  const handleFieldChange = (fieldId: string, value: any) => {
    setFormResponses((prev) => ({
      ...prev,
      [fieldId]: { value },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?._id) {
      alert('Please log in to submit feedback');
      return;
    }

    try {
      await submitFeedback({ id, formFields: formResponses }).unwrap();
      alert('Feedback submitted successfully!');
      setFormResponses({});
    } catch (err) {
      console.error('Submission error:', err);
      alert('Error submitting feedback: ' + (err instanceof Error ? err.message : 'Unknown error'));
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !feedbackData?.feedback) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error loading feedback form. Please try again later.</div>
      </div>
    );
  }

  const { title, description, formFields, eventId, isAnonymous } = feedbackData.feedback;

  return (
    <div className=" p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">{title || 'Feedback Form'}</h1>
        <p className="text-gray-400">{description || `Feedback for ${eventId.name}`}</p>
        {isAnonymous && <p className="text-sm text-gray-500 mt-2">This form is anonymous</p>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {Object.entries(formFields).map(([fieldId, fieldData]: [string, any]) => {
          const { field } = fieldData;
          const response = formResponses[fieldId]?.value;

          return (
            <div key={fieldId} className="bg-gray-800/80 p-6 rounded-xl border border-gray-700/30">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {field.label} {field.required && <span className="text-red-400">*</span>}
              </label>

              {field.type === 'text' && (
                <input
                  type="text"
                  value={response || ''}
                  onChange={(e) => handleFieldChange(fieldId, e.target.value)}
                  placeholder={field.placeholder || 'Enter your response'}
                  required={field.required}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              )}

              {field.type === 'rating' && (
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleFieldChange(fieldId, star)}
                      className={`text-2xl ${response >= star ? 'text-yellow-400' : 'text-gray-500'} hover:text-yellow-300`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              )}

              {field.type === 'multiSelect' && (
                <div className="space-y-2">
                  {field.options?.map((option: string) => (
                    <label key={option} className="flex items-center gap-2 text-gray-300">
                      <input
                        type="checkbox"
                        checked={(response || []).includes(option)}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...(response || []), option]
                            : (response || []).filter((v: string) => v !== option);
                          handleFieldChange(fieldId, newValue);
                        }}
                        className="rounded bg-gray-700 border-gray-600 text-indigo-500 focus:ring-indigo-500/20"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}

              {field.type === 'hashtags' && (
                <input
                  type="text"
                  value={response || ''}
                  onChange={(e) => handleFieldChange(fieldId, e.target.value.split(',').map((tag: string) => tag.trim()))}
                  placeholder="Enter tags separated by commas"
                  required={field.required}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              )}

              {field.type === 'anonymous' && (
                <p className="text-gray-400">This form will be submitted {isAnonymous ? 'anonymously' : 'with your identity'}</p>
              )}
            </div>
          );
        })}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          Submit Feedback
        </button>
      </form>

      {isSuccess && (
        <p className="mt-4 text-green-500 text-center">Thank you for your feedback!</p>
      )}
      {submitError && (
        <p className="mt-4 text-red-500 text-center">Error submitting feedback. Please try again.</p>
      )}
    </div>
  );
};

export default FeedbackForm;