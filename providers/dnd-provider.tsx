import React, { Fragment, useCallback, useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  UniqueIdentifier,
  DragStartEvent,
} from '@dnd-kit/core';
import { SortableContext, SortingStrategy, arrayMove, rectSortingStrategy, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { CardType } from '@/models/card';
import { restrictToParentElement } from '@dnd-kit/modifiers';

export const DndProvider = (
  {
    children,
    activeId,
    setActiveId,
    cards,
    setCards,
    overlay,
    stragegy = rectSortingStrategy,
    sortable = false,
  }: {
    children: React.ReactNode,
    activeId: string | null,
    setActiveId: React.Dispatch<React.SetStateAction<string | null>>,
    cards?: CardType[] | undefined,
    setCards: React.Dispatch<React.SetStateAction<CardType[]>>,
    overlay?: React.ReactNode | undefined,
    stragegy?: SortingStrategy | undefined,
    sortable?: boolean | undefined
  }
) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    if (!event.active || !event.over || event.active.id === event.over.id) return;
    setCards((items) => {
      const oldIndex = items.indexOf(event.active.id as CardType);
      const newIndex = items.indexOf(event.over!.id as CardType);
      const res = arrayMove(items, oldIndex, newIndex);
      console.log(res)
      return res;
    });
  }, []);

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(`${event.active.id}`);
  }, []);

  const handleDragCancel = useCallback(() => setActiveId(null), []);

  return (
    <DndContext
      modifiers={[
        restrictToParentElement
      ]}
      sensors={sensors}
      onDragOver={(event) => {
        console.log(event)
      }}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      {
        sortable && cards ? (
          <Fragment>
            <SortableContext
              items={cards}
              strategy={stragegy}
            >
              {children}
            </SortableContext>
            {!!overlay && overlay}
          </Fragment>
        ) :
          (
            <Fragment>
              {children}
            </Fragment>
          )
      }
    </DndContext>
  )
}
