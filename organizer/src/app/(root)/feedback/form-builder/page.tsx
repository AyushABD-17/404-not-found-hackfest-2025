'use client';

import FormBuilder from '@/components/pages/feedback/form-builder/FormBuilder';

export default function FormBuilderPage() {
  const handleSaveForm = (form: { title: string; description: string; fields: any[] }) => {
    // Here you would typically save the form to your backend
    console.log('Form saved:', form);
  };

  return (
    <main className="min-h-screen  text-white">
      <FormBuilder onSave={handleSaveForm} />
    </main>
  );
} 