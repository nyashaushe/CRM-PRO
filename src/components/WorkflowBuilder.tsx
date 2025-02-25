import React, { useState } from 'react';
import { Plus, ArrowRight, Settings, AlertCircle } from 'lucide-react';

interface WorkflowNode {
  id: string;
  type: string;
  title: string;
  config: Record<string, any>;
}

const WorkflowBuilder = () => {
  const [nodes, setNodes] = useState<WorkflowNode[]>([]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const nodeTypes = [
    { type: 'trigger', title: 'Trigger', icon: AlertCircle },
    { type: 'action', title: 'Action', icon: Settings },
    { type: 'condition', title: 'Condition', icon: ArrowRight },
  ];

  const addNode = (type: string) => {
    const newNode: WorkflowNode = {
      id: Date.now().toString(),
      type,
      title: `New ${type}`,
      config: {},
    };
    setNodes([...nodes, newNode]);
  };

  return (
    <div className="p-6 grid grid-cols-12 gap-6 min-h-[600px]">
      {/* Toolbox */}
      <div className="col-span-3 border-r pr-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Components</h3>
        <div className="space-y-2">
          {nodeTypes.map((nodeType) => (
            <button
              key={nodeType.type}
              onClick={() => addNode(nodeType.type)}
              className="w-full flex items-center p-3 rounded-lg border hover:bg-gray-50"
            >
              <nodeType.icon className="w-5 h-5 text-gray-500 mr-3" />
              <span className="text-sm text-gray-700">{nodeType.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <div className="col-span-6 bg-gray-50 rounded-lg p-6">
        <div className="space-y-4">
          {nodes.map((node) => (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`p-4 bg-white rounded-lg border ${
                selectedNode === node.id ? 'border-indigo-500 shadow-sm' : 'border-gray-200'
              }`}
            >
              <h4 className="font-medium text-gray-900">{node.title}</h4>
              <p className="text-sm text-gray-500 mt-1">Type: {node.type}</p>
            </div>
          ))}
          {nodes.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Drag components here to build your workflow
            </div>
          )}
        </div>
      </div>

      {/* Properties */}
      <div className="col-span-3 border-l pl-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Properties</h3>
        {selectedNode ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={nodes.find(n => n.id === selectedNode)?.title || ''}
                onChange={(e) => {
                  setNodes(nodes.map(node =>
                    node.id === selectedNode ? { ...node, title: e.target.value } : node
                  ));
                }}
              />
            </div>
            {/* Add more properties based on node type */}
          </div>
        ) : (
          <p className="text-sm text-gray-500">Select a node to edit its properties</p>
        )}
      </div>
    </div>
  );
};

export default WorkflowBuilder; 