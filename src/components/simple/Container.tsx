import update from "immutability-helper";
import type { Dispatch, FC, SetStateAction } from "react";
import { useCallback, useState } from "react";
import { Card } from "./Card";

const style = {
  width: 400,
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export const Container: FC = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: "Write a cool JS library",
      },
      {
        id: 2,
        text: "Make it generic enough",
      },
      {
        id: 3,
        text: "Write README",
      },
      {
        id: 4,
        text: "Create some examples",
      },
      {
        id: 5,
        text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
      },
      {
        id: 6,
        text: "???",
      },
      {
        id: 7,
        text: "PROFIT",
      },
    ]);
    const [cards1, setCards1] = useState([
      {
        id: 1,
        text: "Write a cool JS library",
      },
      {
        id: 2,
        text: "Make it generic enough",
      },
      {
        id: 3,
        text: "Write README",
      },
      {
        id: 4,
        text: "Create some examples",
      },
      {
        id: 5,
        text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
      },
      {
        id: 6,
        text: "???",
      },
      {
        id: 7,
        text: "PROFIT",
      },
    ]);

    const moveCard = useCallback(
      (
        dragIndex: number,
        hoverIndex: number,
        setValue: Dispatch<SetStateAction<{ id: number; text: string }[]>>
      ) => {
        setValue((prevCards: Item[]) =>
          update(prevCards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, prevCards[dragIndex] as Item],
            ],
          })
        );
        console.log(cards);
      },
      []
    );

    const renderCard = useCallback(
      (
        card: { id: number; text: string },
        index: number,
        setValue: Dispatch<SetStateAction<{ id: number; text: string }[]>>
      ) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={(i1, i2) => moveCard(i1, i2, setValue)}
          />
        );
      },
      []
    );

    return (
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "tomato", margin: "1rem" }}>
          <div style={style}>
            {cards.map((card, i) => renderCard(card, i, setCards))}
          </div>
        </div>
        <div style={{ backgroundColor: "tomato", margin: "1rem" }}>
          <div style={style}>
            {cards1.map((card, i) => renderCard(card, i, setCards1))}
          </div>
        </div>
      </div>
    );
  }
};
