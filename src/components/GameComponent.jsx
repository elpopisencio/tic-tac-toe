import React from "react";

export const GameComponent = ({ board, onPlay, player, onReset, isWinner }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {isWinner ? (
        <p className="is-size-4">
          player{" "}
          <span className="icon">
            {player === "X" ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-check"></i>
            )}
          </span>{" "}
          wins!{" "}
          <a href="#!" className="is-size-4" onClick={onReset}>
            play again?
          </a>
        </p>
      ) : player ? (
        <p className="is-size-4">
          it's{" "}
          <span className="icon">
            {player === "X" ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-check"></i>
            )}
          </span>{" "}
          turn!
        </p>
      ) : (
        <a href="#!" className="is-size-4" onClick={onReset}>
          game over, play again?
        </a>
      )}
      <div
        style={{
          border: "4px solid #434343",
          width: "fit-content",
          borderRadius: "6px"
        }}
      >
        {board.map((elements, row) => (
          <div key={row} style={{ display: "flex", width: "fit-content" }}>
            {elements.map((element, col) => (
              <div
                key={col}
                style={{
                  border: "2px solid #434343",
                  backgroundColor:
                    (row + col) % 2 === 0 ? "#caeae2" : "#f3f3f3",
                  padding: "1em"
                }}
                onClick={() => onPlay({ row, col })}
              >
                <span
                  className={
                    "icon is-large " +
                    (isWinner &&
                    isWinner.find(
                      pos =>
                        pos[0] === row &&
                        pos[1] === col &&
                        board[row][col] === player
                    )
                      ? "has-text-success"
                      : "")
                  }
                >
                  {element === "X" ? (
                    <i className="fas fa-3x fa-times"></i>
                  ) : element === "O" ? (
                    <i className="fas fa-3x fa-check"></i>
                  ) : (
                    <i className="far fa-3x"></i>
                  )}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
