import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

interface CommentProps {
    content: string;
    onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
        /*   const newLikeCount = likeCount + 1;
          setLikeCount(newLikeCount);
          setLikeCount(likeCount + 1); */

        /*    setLikeCount((state) => {
               return state + 1
           });
   
           setLikeCount((state) => {
               return state + 1
           }); */
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/brunokstein.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Stein</strong>
                            <time title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atras</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={24} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}