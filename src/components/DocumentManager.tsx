import React from 'react';
import { useDropzone } from 'react-dropzone';
import { File, Folder, Download, Trash2, Search } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedAt: Date;
  category: string;
}

const mockDocuments: Document[] = [
  {
    id: '1',
    name: 'Contract_2024.pdf',
    type: 'pdf',
    size: 2500000,
    uploadedAt: new Date('2024-03-15'),
    category: 'Contracts',
  },
  {
    id: '2',
    name: 'Proposal_Q1.docx',
    type: 'docx',
    size: 1800000,
    uploadedAt: new Date('2024-03-10'),
    category: 'Proposals',
  },
  {
    id: '3',
    name: 'Meeting_Notes.txt',
    type: 'txt',
    size: 50000,
    uploadedAt: new Date('2024-03-18'),
    category: 'Notes',
  },
];

const DocumentManager = () => {
  const [documents, setDocuments] = React.useState<Document[]>(mockDocuments);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Handle file upload logic here
      console.log('Uploaded files:', acceptedFiles);
    },
  });

  const categories = ['All', 'Contracts', 'Proposals', 'Notes', 'Other'];

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        {...getRootProps()}
        className={`m-4 p-6 border-2 border-dashed rounded-lg text-center ${
          isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <Folder className="w-12 h-12 mx-auto text-gray-400 mb-2" />
        <p className="text-gray-600">
          {isDragActive
            ? 'Drop the files here...'
            : 'Drag and drop files here, or click to select files'}
        </p>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="divide-y">
          {filteredDocuments.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <File className="w-8 h-8 text-gray-400" />
                <div>
                  <h3 className="font-medium text-gray-900">{doc.name}</h3>
                  <p className="text-sm text-gray-500">
                    {formatFileSize(doc.size)} • Uploaded{' '}
                    {doc.uploadedAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentManager;