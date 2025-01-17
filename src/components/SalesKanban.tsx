import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { DollarSign } from 'lucide-react';

interface Deal {
  id: string;
  title: string;
  value: number;
  company: string;
  stage: string;
}

const initialDeals: Deal[] = [
  {
    id: '1',
    title: 'Enterprise Software License',
    value: 50000,
    company: 'Tech Corp',
    stage: 'lead',
  },
  {
    id: '2',
    title: 'Consulting Services',
    value: 25000,
    company: 'Innovation Inc',
    stage: 'negotiation',
  },
  {
    id: '3',
    title: 'Annual Subscription',
    value: 15000,
    company: 'StartUp Ltd',
    stage: 'closed',
  },
];

const stages = [
  { id: 'lead', title: 'Lead' },
  { id: 'negotiation', title: 'Negotiation' },
  { id: 'closed', title: 'Closed' },
];

const SalesKanban = () => {
  const [deals, setDeals] = React.useState(initialDeals);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const deal = deals.find((d) => d.id === result.draggableId);
    if (!deal) return;

    const updatedDeals = deals.map((d) =>
      d.id === deal.id ? { ...d, stage: destination.droppableId } : d
    );

    setDeals(updatedDeals);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => (
          <div key={stage.id} className="flex-1 min-w-[250px]">
            <h3 className="font-medium text-gray-900 mb-2">{stage.title}</h3>
            <Droppable droppableId={stage.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-50 p-4 rounded-lg space-y-2 min-h-[200px]"
                >
                  {deals
                    .filter((deal) => deal.stage === stage.id)
                    .map((deal, index) => (
                      <Draggable key={deal.id} draggableId={deal.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white p-4 rounded-lg shadow-sm"
                          >
                            <h4 className="font-medium text-gray-900">{deal.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{deal.company}</p>
                            <div className="flex items-center gap-1 mt-2 text-green-600">
                              <DollarSign className="w-4 h-4" />
                              <span className="font-medium">
                                {deal.value.toLocaleString('en-US', {
                                  style: 'currency',
                                  currency: 'USD',
                                })}
                              </span>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default SalesKanban;