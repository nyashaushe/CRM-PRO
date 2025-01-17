import React from 'react';
import EmailEditor from 'react-email-editor';
import { Send, Save } from 'lucide-react';

const EmailComposer = () => {
  const emailEditorRef = React.useRef<any>(null);

  const saveTemplate = () => {
    emailEditorRef.current?.editor?.exportHtml((data: any) => {
      const { html } = data;
      console.log('Template HTML:', html);
      // Save template logic here
    });
  };

  const sendEmail = () => {
    emailEditorRef.current?.editor?.exportHtml((data: any) => {
      const { html } = data;
      console.log('Sending email with HTML:', html);
      // Send email logic here
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Email Composer</h2>
        <div className="flex gap-2">
          <button
            onClick={saveTemplate}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-gray-50"
          >
            <Save className="w-4 h-4" />
            Save Template
          </button>
          <button
            onClick={sendEmail}
            className="flex items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            <Send className="w-4 h-4" />
            Send Email
          </button>
        </div>
      </div>
      <div className="flex-1">
        <EmailEditor ref={emailEditorRef} minHeight="600px" />
      </div>
    </div>
  );
};

export default EmailComposer;