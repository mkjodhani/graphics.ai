import { Card, Icon, TextContainer } from '@shopify/polaris';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { DeleteMajor } from '@shopify/polaris-icons';
const finalSpaceCharacters = [
    {
        id: 'gary',
        name: 'Text 1',
    },
    {
        id: 'cato',
        name: 'Text 2',
    },
    {
        id: 'kvn',
        name: 'Text 3',
    },
    {
        id: 'mooncake',
        name: 'Text 4',
    },
    {
        id: 'quinn',
        name: 'Text 5',
    }
]

function CanvasOrder({ characters, updateCharacters, deleteItem }) {
    // const [characters, updateCharacters] = useState(finalSpaceCharacters);
    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);
    }

    return (
        <Card sectioned >
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                    {(provided) => (
                        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                            {characters.map(({ id, name }, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div style={{ 'padding': '10px' }}>
                                                    {/* {name} */}
                                                    <Card title={id} sectioned actions={[{ 'content': <Icon source={DeleteMajor} /> ,'onAction': () => deleteItem(id) }]} />
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <Card.Section>
                {
                    characters.length == 0 && <TextContainer>
                        No Items to display!
                    </TextContainer>
                }
            </Card.Section>
        </Card>
    );
}

export default CanvasOrder;
